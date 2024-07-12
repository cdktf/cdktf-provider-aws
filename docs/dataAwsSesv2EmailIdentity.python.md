# `dataAwsSesv2EmailIdentity` Submodule <a name="`dataAwsSesv2EmailIdentity` Submodule" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSesv2EmailIdentity <a name="DataAwsSesv2EmailIdentity" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/sesv2_email_identity aws_sesv2_email_identity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_email_identity

dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email_identity: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.emailIdentity">email_identity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/sesv2_email_identity#email_identity DataAwsSesv2EmailIdentity#email_identity}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/sesv2_email_identity#id DataAwsSesv2EmailIdentity#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/sesv2_email_identity#tags DataAwsSesv2EmailIdentity#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email_identity`<sup>Required</sup> <a name="email_identity" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.emailIdentity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/sesv2_email_identity#email_identity DataAwsSesv2EmailIdentity#email_identity}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/sesv2_email_identity#id DataAwsSesv2EmailIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/sesv2_email_identity#tags DataAwsSesv2EmailIdentity#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsSesv2EmailIdentity resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_email_identity

dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_email_identity

dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_email_identity

dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_email_identity

dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsSesv2EmailIdentity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsSesv2EmailIdentity to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsSesv2EmailIdentity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/sesv2_email_identity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSesv2EmailIdentity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.configurationSetName">configuration_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.dkimSigningAttributes">dkim_signing_attributes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList">DataAwsSesv2EmailIdentityDkimSigningAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.identityType">identity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.verifiedForSendingStatus">verified_for_sending_status</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.emailIdentityInput">email_identity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.emailIdentity">email_identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `configuration_set_name`<sup>Required</sup> <a name="configuration_set_name" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.configurationSetName"></a>

```python
configuration_set_name: str
```

- *Type:* str

---

##### `dkim_signing_attributes`<sup>Required</sup> <a name="dkim_signing_attributes" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.dkimSigningAttributes"></a>

```python
dkim_signing_attributes: DataAwsSesv2EmailIdentityDkimSigningAttributesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList">DataAwsSesv2EmailIdentityDkimSigningAttributesList</a>

---

##### `identity_type`<sup>Required</sup> <a name="identity_type" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.identityType"></a>

```python
identity_type: str
```

- *Type:* str

---

##### `verified_for_sending_status`<sup>Required</sup> <a name="verified_for_sending_status" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.verifiedForSendingStatus"></a>

```python
verified_for_sending_status: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `email_identity_input`<sup>Optional</sup> <a name="email_identity_input" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.emailIdentityInput"></a>

```python
email_identity_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `email_identity`<sup>Required</sup> <a name="email_identity" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.emailIdentity"></a>

```python
email_identity: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSesv2EmailIdentityConfig <a name="DataAwsSesv2EmailIdentityConfig" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_email_identity

dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email_identity: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.emailIdentity">email_identity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/sesv2_email_identity#email_identity DataAwsSesv2EmailIdentity#email_identity}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/sesv2_email_identity#id DataAwsSesv2EmailIdentity#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/sesv2_email_identity#tags DataAwsSesv2EmailIdentity#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email_identity`<sup>Required</sup> <a name="email_identity" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.emailIdentity"></a>

```python
email_identity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/sesv2_email_identity#email_identity DataAwsSesv2EmailIdentity#email_identity}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/sesv2_email_identity#id DataAwsSesv2EmailIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/sesv2_email_identity#tags DataAwsSesv2EmailIdentity#tags}.

---

### DataAwsSesv2EmailIdentityDkimSigningAttributes <a name="DataAwsSesv2EmailIdentityDkimSigningAttributes" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_email_identity

dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributes()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSesv2EmailIdentityDkimSigningAttributesList <a name="DataAwsSesv2EmailIdentityDkimSigningAttributesList" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_email_identity

dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference <a name="DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_email_identity

dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.currentSigningKeyLength">current_signing_key_length</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKey">domain_signing_private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelector">domain_signing_selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.lastKeyGenerationTimestamp">last_key_generation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLength">next_signing_key_length</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.signingAttributesOrigin">signing_attributes_origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.tokens">tokens</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributes">DataAwsSesv2EmailIdentityDkimSigningAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_signing_key_length`<sup>Required</sup> <a name="current_signing_key_length" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.currentSigningKeyLength"></a>

```python
current_signing_key_length: str
```

- *Type:* str

---

##### `domain_signing_private_key`<sup>Required</sup> <a name="domain_signing_private_key" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKey"></a>

```python
domain_signing_private_key: str
```

- *Type:* str

---

##### `domain_signing_selector`<sup>Required</sup> <a name="domain_signing_selector" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelector"></a>

```python
domain_signing_selector: str
```

- *Type:* str

---

##### `last_key_generation_timestamp`<sup>Required</sup> <a name="last_key_generation_timestamp" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.lastKeyGenerationTimestamp"></a>

```python
last_key_generation_timestamp: str
```

- *Type:* str

---

##### `next_signing_key_length`<sup>Required</sup> <a name="next_signing_key_length" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLength"></a>

```python
next_signing_key_length: str
```

- *Type:* str

---

##### `signing_attributes_origin`<sup>Required</sup> <a name="signing_attributes_origin" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.signingAttributesOrigin"></a>

```python
signing_attributes_origin: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.tokens"></a>

```python
tokens: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSesv2EmailIdentityDkimSigningAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributes">DataAwsSesv2EmailIdentityDkimSigningAttributes</a>

---



