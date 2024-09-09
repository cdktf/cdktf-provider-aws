# `dataAwsEcrLifecyclePolicyDocument` Submodule <a name="`dataAwsEcrLifecyclePolicyDocument` Submodule" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEcrLifecyclePolicyDocument <a name="DataAwsEcrLifecyclePolicyDocument" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ecr_lifecycle_policy_document aws_ecr_lifecycle_policy_document}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecr_lifecycle_policy_document

dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  rule: typing.Union[IResolvable, typing.List[DataAwsEcrLifecyclePolicyDocumentRule]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.Initializer.parameter.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRule">DataAwsEcrLifecyclePolicyDocumentRule</a>]]</code> | rule block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.Initializer.parameter.rule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRule">DataAwsEcrLifecyclePolicyDocumentRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ecr_lifecycle_policy_document#rule DataAwsEcrLifecyclePolicyDocument#rule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.resetRule">reset_rule</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_rule` <a name="put_rule" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.putRule"></a>

```python
def put_rule(
  value: typing.Union[IResolvable, typing.List[DataAwsEcrLifecyclePolicyDocumentRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.putRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRule">DataAwsEcrLifecyclePolicyDocumentRule</a>]]

---

##### `reset_rule` <a name="reset_rule" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.resetRule"></a>

```python
def reset_rule() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsEcrLifecyclePolicyDocument resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecr_lifecycle_policy_document

dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecr_lifecycle_policy_document

dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecr_lifecycle_policy_document

dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecr_lifecycle_policy_document

dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsEcrLifecyclePolicyDocument resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsEcrLifecyclePolicyDocument to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsEcrLifecyclePolicyDocument that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ecr_lifecycle_policy_document#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEcrLifecyclePolicyDocument to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.json">json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleList">DataAwsEcrLifecyclePolicyDocumentRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.ruleInput">rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRule">DataAwsEcrLifecyclePolicyDocumentRule</a>]]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.json"></a>

```python
json: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.rule"></a>

```python
rule: DataAwsEcrLifecyclePolicyDocumentRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleList">DataAwsEcrLifecyclePolicyDocumentRuleList</a>

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.ruleInput"></a>

```python
rule_input: typing.Union[IResolvable, typing.List[DataAwsEcrLifecyclePolicyDocumentRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRule">DataAwsEcrLifecyclePolicyDocumentRule</a>]]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocument.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEcrLifecyclePolicyDocumentConfig <a name="DataAwsEcrLifecyclePolicyDocumentConfig" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecr_lifecycle_policy_document

dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  rule: typing.Union[IResolvable, typing.List[DataAwsEcrLifecyclePolicyDocumentRule]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentConfig.property.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRule">DataAwsEcrLifecyclePolicyDocumentRule</a>]]</code> | rule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentConfig.property.rule"></a>

```python
rule: typing.Union[IResolvable, typing.List[DataAwsEcrLifecyclePolicyDocumentRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRule">DataAwsEcrLifecyclePolicyDocumentRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ecr_lifecycle_policy_document#rule DataAwsEcrLifecyclePolicyDocument#rule}

---

### DataAwsEcrLifecyclePolicyDocumentRule <a name="DataAwsEcrLifecyclePolicyDocumentRule" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecr_lifecycle_policy_document

dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRule(
  priority: typing.Union[int, float],
  action: typing.Union[IResolvable, typing.List[DataAwsEcrLifecyclePolicyDocumentRuleAction]] = None,
  description: str = None,
  selection: typing.Union[IResolvable, typing.List[DataAwsEcrLifecyclePolicyDocumentRuleSelection]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ecr_lifecycle_policy_document#priority DataAwsEcrLifecyclePolicyDocument#priority}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRule.property.action">action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleAction">DataAwsEcrLifecyclePolicyDocumentRuleAction</a>]]</code> | action block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRule.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ecr_lifecycle_policy_document#description DataAwsEcrLifecyclePolicyDocument#description}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRule.property.selection">selection</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelection">DataAwsEcrLifecyclePolicyDocumentRuleSelection</a>]]</code> | selection block. |

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ecr_lifecycle_policy_document#priority DataAwsEcrLifecyclePolicyDocument#priority}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRule.property.action"></a>

```python
action: typing.Union[IResolvable, typing.List[DataAwsEcrLifecyclePolicyDocumentRuleAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleAction">DataAwsEcrLifecyclePolicyDocumentRuleAction</a>]]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ecr_lifecycle_policy_document#action DataAwsEcrLifecyclePolicyDocument#action}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRule.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ecr_lifecycle_policy_document#description DataAwsEcrLifecyclePolicyDocument#description}.

---

##### `selection`<sup>Optional</sup> <a name="selection" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRule.property.selection"></a>

```python
selection: typing.Union[IResolvable, typing.List[DataAwsEcrLifecyclePolicyDocumentRuleSelection]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelection">DataAwsEcrLifecyclePolicyDocumentRuleSelection</a>]]

selection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ecr_lifecycle_policy_document#selection DataAwsEcrLifecyclePolicyDocument#selection}

---

### DataAwsEcrLifecyclePolicyDocumentRuleAction <a name="DataAwsEcrLifecyclePolicyDocumentRuleAction" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecr_lifecycle_policy_document

dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleAction(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleAction.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ecr_lifecycle_policy_document#type DataAwsEcrLifecyclePolicyDocument#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleAction.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ecr_lifecycle_policy_document#type DataAwsEcrLifecyclePolicyDocument#type}.

---

### DataAwsEcrLifecyclePolicyDocumentRuleSelection <a name="DataAwsEcrLifecyclePolicyDocumentRuleSelection" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelection.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecr_lifecycle_policy_document

dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelection(
  count_number: typing.Union[int, float],
  count_type: str,
  tag_status: str,
  count_unit: str = None,
  tag_pattern_list: typing.List[str] = None,
  tag_prefix_list: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelection.property.countNumber">count_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ecr_lifecycle_policy_document#count_number DataAwsEcrLifecyclePolicyDocument#count_number}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelection.property.countType">count_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ecr_lifecycle_policy_document#count_type DataAwsEcrLifecyclePolicyDocument#count_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelection.property.tagStatus">tag_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ecr_lifecycle_policy_document#tag_status DataAwsEcrLifecyclePolicyDocument#tag_status}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelection.property.countUnit">count_unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ecr_lifecycle_policy_document#count_unit DataAwsEcrLifecyclePolicyDocument#count_unit}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelection.property.tagPatternList">tag_pattern_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ecr_lifecycle_policy_document#tag_pattern_list DataAwsEcrLifecyclePolicyDocument#tag_pattern_list}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelection.property.tagPrefixList">tag_prefix_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ecr_lifecycle_policy_document#tag_prefix_list DataAwsEcrLifecyclePolicyDocument#tag_prefix_list}. |

---

##### `count_number`<sup>Required</sup> <a name="count_number" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelection.property.countNumber"></a>

```python
count_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ecr_lifecycle_policy_document#count_number DataAwsEcrLifecyclePolicyDocument#count_number}.

---

##### `count_type`<sup>Required</sup> <a name="count_type" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelection.property.countType"></a>

```python
count_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ecr_lifecycle_policy_document#count_type DataAwsEcrLifecyclePolicyDocument#count_type}.

---

##### `tag_status`<sup>Required</sup> <a name="tag_status" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelection.property.tagStatus"></a>

```python
tag_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ecr_lifecycle_policy_document#tag_status DataAwsEcrLifecyclePolicyDocument#tag_status}.

---

##### `count_unit`<sup>Optional</sup> <a name="count_unit" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelection.property.countUnit"></a>

```python
count_unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ecr_lifecycle_policy_document#count_unit DataAwsEcrLifecyclePolicyDocument#count_unit}.

---

##### `tag_pattern_list`<sup>Optional</sup> <a name="tag_pattern_list" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelection.property.tagPatternList"></a>

```python
tag_pattern_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ecr_lifecycle_policy_document#tag_pattern_list DataAwsEcrLifecyclePolicyDocument#tag_pattern_list}.

---

##### `tag_prefix_list`<sup>Optional</sup> <a name="tag_prefix_list" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelection.property.tagPrefixList"></a>

```python
tag_prefix_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ecr_lifecycle_policy_document#tag_prefix_list DataAwsEcrLifecyclePolicyDocument#tag_prefix_list}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEcrLifecyclePolicyDocumentRuleActionList <a name="DataAwsEcrLifecyclePolicyDocumentRuleActionList" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecr_lifecycle_policy_document

dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleAction">DataAwsEcrLifecyclePolicyDocumentRuleAction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsEcrLifecyclePolicyDocumentRuleAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleAction">DataAwsEcrLifecyclePolicyDocumentRuleAction</a>]]

---


### DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference <a name="DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecr_lifecycle_policy_document

dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleAction">DataAwsEcrLifecyclePolicyDocumentRuleAction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsEcrLifecyclePolicyDocumentRuleAction]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleAction">DataAwsEcrLifecyclePolicyDocumentRuleAction</a>]

---


### DataAwsEcrLifecyclePolicyDocumentRuleList <a name="DataAwsEcrLifecyclePolicyDocumentRuleList" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecr_lifecycle_policy_document

dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEcrLifecyclePolicyDocumentRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRule">DataAwsEcrLifecyclePolicyDocumentRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsEcrLifecyclePolicyDocumentRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRule">DataAwsEcrLifecyclePolicyDocumentRule</a>]]

---


### DataAwsEcrLifecyclePolicyDocumentRuleOutputReference <a name="DataAwsEcrLifecyclePolicyDocumentRuleOutputReference" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecr_lifecycle_policy_document

dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.putSelection">put_selection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.resetSelection">reset_selection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.putAction"></a>

```python
def put_action(
  value: typing.Union[IResolvable, typing.List[DataAwsEcrLifecyclePolicyDocumentRuleAction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.putAction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleAction">DataAwsEcrLifecyclePolicyDocumentRuleAction</a>]]

---

##### `put_selection` <a name="put_selection" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.putSelection"></a>

```python
def put_selection(
  value: typing.Union[IResolvable, typing.List[DataAwsEcrLifecyclePolicyDocumentRuleSelection]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.putSelection.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelection">DataAwsEcrLifecyclePolicyDocumentRuleSelection</a>]]

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_selection` <a name="reset_selection" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.resetSelection"></a>

```python
def reset_selection() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionList">DataAwsEcrLifecyclePolicyDocumentRuleActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.property.selection">selection</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionList">DataAwsEcrLifecyclePolicyDocumentRuleSelectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.property.actionInput">action_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleAction">DataAwsEcrLifecyclePolicyDocumentRuleAction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.property.selectionInput">selection_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelection">DataAwsEcrLifecyclePolicyDocumentRuleSelection</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRule">DataAwsEcrLifecyclePolicyDocumentRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.property.action"></a>

```python
action: DataAwsEcrLifecyclePolicyDocumentRuleActionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleActionList">DataAwsEcrLifecyclePolicyDocumentRuleActionList</a>

---

##### `selection`<sup>Required</sup> <a name="selection" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.property.selection"></a>

```python
selection: DataAwsEcrLifecyclePolicyDocumentRuleSelectionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionList">DataAwsEcrLifecyclePolicyDocumentRuleSelectionList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.property.actionInput"></a>

```python
action_input: typing.Union[IResolvable, typing.List[DataAwsEcrLifecyclePolicyDocumentRuleAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleAction">DataAwsEcrLifecyclePolicyDocumentRuleAction</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `selection_input`<sup>Optional</sup> <a name="selection_input" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.property.selectionInput"></a>

```python
selection_input: typing.Union[IResolvable, typing.List[DataAwsEcrLifecyclePolicyDocumentRuleSelection]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelection">DataAwsEcrLifecyclePolicyDocumentRuleSelection</a>]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsEcrLifecyclePolicyDocumentRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRule">DataAwsEcrLifecyclePolicyDocumentRule</a>]

---


### DataAwsEcrLifecyclePolicyDocumentRuleSelectionList <a name="DataAwsEcrLifecyclePolicyDocumentRuleSelectionList" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecr_lifecycle_policy_document

dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelection">DataAwsEcrLifecyclePolicyDocumentRuleSelection</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsEcrLifecyclePolicyDocumentRuleSelection]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelection">DataAwsEcrLifecyclePolicyDocumentRuleSelection</a>]]

---


### DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference <a name="DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecr_lifecycle_policy_document

dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.resetCountUnit">reset_count_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.resetTagPatternList">reset_tag_pattern_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.resetTagPrefixList">reset_tag_prefix_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_count_unit` <a name="reset_count_unit" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.resetCountUnit"></a>

```python
def reset_count_unit() -> None
```

##### `reset_tag_pattern_list` <a name="reset_tag_pattern_list" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.resetTagPatternList"></a>

```python
def reset_tag_pattern_list() -> None
```

##### `reset_tag_prefix_list` <a name="reset_tag_prefix_list" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.resetTagPrefixList"></a>

```python
def reset_tag_prefix_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.property.countNumberInput">count_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.property.countTypeInput">count_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.property.countUnitInput">count_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.property.tagPatternListInput">tag_pattern_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.property.tagPrefixListInput">tag_prefix_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.property.tagStatusInput">tag_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.property.countNumber">count_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.property.countType">count_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.property.countUnit">count_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.property.tagPatternList">tag_pattern_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.property.tagPrefixList">tag_prefix_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.property.tagStatus">tag_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelection">DataAwsEcrLifecyclePolicyDocumentRuleSelection</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_number_input`<sup>Optional</sup> <a name="count_number_input" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.property.countNumberInput"></a>

```python
count_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count_type_input`<sup>Optional</sup> <a name="count_type_input" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.property.countTypeInput"></a>

```python
count_type_input: str
```

- *Type:* str

---

##### `count_unit_input`<sup>Optional</sup> <a name="count_unit_input" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.property.countUnitInput"></a>

```python
count_unit_input: str
```

- *Type:* str

---

##### `tag_pattern_list_input`<sup>Optional</sup> <a name="tag_pattern_list_input" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.property.tagPatternListInput"></a>

```python
tag_pattern_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_prefix_list_input`<sup>Optional</sup> <a name="tag_prefix_list_input" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.property.tagPrefixListInput"></a>

```python
tag_prefix_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_status_input`<sup>Optional</sup> <a name="tag_status_input" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.property.tagStatusInput"></a>

```python
tag_status_input: str
```

- *Type:* str

---

##### `count_number`<sup>Required</sup> <a name="count_number" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.property.countNumber"></a>

```python
count_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count_type`<sup>Required</sup> <a name="count_type" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.property.countType"></a>

```python
count_type: str
```

- *Type:* str

---

##### `count_unit`<sup>Required</sup> <a name="count_unit" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.property.countUnit"></a>

```python
count_unit: str
```

- *Type:* str

---

##### `tag_pattern_list`<sup>Required</sup> <a name="tag_pattern_list" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.property.tagPatternList"></a>

```python
tag_pattern_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_prefix_list`<sup>Required</sup> <a name="tag_prefix_list" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.property.tagPrefixList"></a>

```python
tag_prefix_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_status`<sup>Required</sup> <a name="tag_status" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.property.tagStatus"></a>

```python
tag_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsEcrLifecyclePolicyDocumentRuleSelection]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsEcrLifecyclePolicyDocument.DataAwsEcrLifecyclePolicyDocumentRuleSelection">DataAwsEcrLifecyclePolicyDocumentRuleSelection</a>]

---



