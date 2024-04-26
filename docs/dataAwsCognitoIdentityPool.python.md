# `dataAwsCognitoIdentityPool` Submodule <a name="`dataAwsCognitoIdentityPool` Submodule" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCognitoIdentityPool <a name="DataAwsCognitoIdentityPool" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/data-sources/cognito_identity_pool aws_cognito_identity_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cognito_identity_pool

dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  identity_pool_name: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.identityPoolName">identity_pool_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/data-sources/cognito_identity_pool#identity_pool_name DataAwsCognitoIdentityPool#identity_pool_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/data-sources/cognito_identity_pool#id DataAwsCognitoIdentityPool#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/data-sources/cognito_identity_pool#tags DataAwsCognitoIdentityPool#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identity_pool_name`<sup>Required</sup> <a name="identity_pool_name" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.identityPoolName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/data-sources/cognito_identity_pool#identity_pool_name DataAwsCognitoIdentityPool#identity_pool_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/data-sources/cognito_identity_pool#id DataAwsCognitoIdentityPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/data-sources/cognito_identity_pool#tags DataAwsCognitoIdentityPool#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsCognitoIdentityPool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cognito_identity_pool

dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cognito_identity_pool

dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cognito_identity_pool

dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cognito_identity_pool

dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsCognitoIdentityPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsCognitoIdentityPool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsCognitoIdentityPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/data-sources/cognito_identity_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsCognitoIdentityPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.allowClassicFlow">allow_classic_flow</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.allowUnauthenticatedIdentities">allow_unauthenticated_identities</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.cognitoIdentityProviders">cognito_identity_providers</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList">DataAwsCognitoIdentityPoolCognitoIdentityProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.developerProviderName">developer_provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.openidConnectProviderArns">openid_connect_provider_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.samlProviderArns">saml_provider_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.supportedLoginProviders">supported_login_providers</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.identityPoolNameInput">identity_pool_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.identityPoolName">identity_pool_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `allow_classic_flow`<sup>Required</sup> <a name="allow_classic_flow" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.allowClassicFlow"></a>

```python
allow_classic_flow: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `allow_unauthenticated_identities`<sup>Required</sup> <a name="allow_unauthenticated_identities" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.allowUnauthenticatedIdentities"></a>

```python
allow_unauthenticated_identities: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cognito_identity_providers`<sup>Required</sup> <a name="cognito_identity_providers" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.cognitoIdentityProviders"></a>

```python
cognito_identity_providers: DataAwsCognitoIdentityPoolCognitoIdentityProvidersList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList">DataAwsCognitoIdentityPoolCognitoIdentityProvidersList</a>

---

##### `developer_provider_name`<sup>Required</sup> <a name="developer_provider_name" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.developerProviderName"></a>

```python
developer_provider_name: str
```

- *Type:* str

---

##### `openid_connect_provider_arns`<sup>Required</sup> <a name="openid_connect_provider_arns" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.openidConnectProviderArns"></a>

```python
openid_connect_provider_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `saml_provider_arns`<sup>Required</sup> <a name="saml_provider_arns" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.samlProviderArns"></a>

```python
saml_provider_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_login_providers`<sup>Required</sup> <a name="supported_login_providers" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.supportedLoginProviders"></a>

```python
supported_login_providers: StringMap
```

- *Type:* cdktf.StringMap

---

##### `identity_pool_name_input`<sup>Optional</sup> <a name="identity_pool_name_input" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.identityPoolNameInput"></a>

```python
identity_pool_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_pool_name`<sup>Required</sup> <a name="identity_pool_name" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.identityPoolName"></a>

```python
identity_pool_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCognitoIdentityPoolCognitoIdentityProviders <a name="DataAwsCognitoIdentityPoolCognitoIdentityProviders" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProviders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProviders.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cognito_identity_pool

dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProviders()
```


### DataAwsCognitoIdentityPoolConfig <a name="DataAwsCognitoIdentityPoolConfig" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cognito_identity_pool

dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  identity_pool_name: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.identityPoolName">identity_pool_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/data-sources/cognito_identity_pool#identity_pool_name DataAwsCognitoIdentityPool#identity_pool_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/data-sources/cognito_identity_pool#id DataAwsCognitoIdentityPool#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/data-sources/cognito_identity_pool#tags DataAwsCognitoIdentityPool#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identity_pool_name`<sup>Required</sup> <a name="identity_pool_name" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.identityPoolName"></a>

```python
identity_pool_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/data-sources/cognito_identity_pool#identity_pool_name DataAwsCognitoIdentityPool#identity_pool_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/data-sources/cognito_identity_pool#id DataAwsCognitoIdentityPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/data-sources/cognito_identity_pool#tags DataAwsCognitoIdentityPool#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsCognitoIdentityPoolCognitoIdentityProvidersList <a name="DataAwsCognitoIdentityPoolCognitoIdentityProvidersList" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cognito_identity_pool

dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference <a name="DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cognito_identity_pool

dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheck">server_side_token_check</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProviders">DataAwsCognitoIdentityPoolCognitoIdentityProviders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

##### `server_side_token_check`<sup>Required</sup> <a name="server_side_token_check" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheck"></a>

```python
server_side_token_check: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCognitoIdentityPoolCognitoIdentityProviders
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProviders">DataAwsCognitoIdentityPoolCognitoIdentityProviders</a>

---



