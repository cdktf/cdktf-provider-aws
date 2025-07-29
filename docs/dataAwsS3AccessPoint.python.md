# `dataAwsS3AccessPoint` Submodule <a name="`dataAwsS3AccessPoint` Submodule" id="@cdktf/provider-aws.dataAwsS3AccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsS3AccessPoint <a name="DataAwsS3AccessPoint" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/s3_access_point aws_s3_access_point}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_s3_access_point

dataAwsS3AccessPoint.DataAwsS3AccessPoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  account_id: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/s3_access_point#name DataAwsS3AccessPoint#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/s3_access_point#account_id DataAwsS3AccessPoint#account_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/s3_access_point#name DataAwsS3AccessPoint#name}.

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/s3_access_point#account_id DataAwsS3AccessPoint#account_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/s3_access_point#region DataAwsS3AccessPoint#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsS3AccessPoint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_s3_access_point

dataAwsS3AccessPoint.DataAwsS3AccessPoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_s3_access_point

dataAwsS3AccessPoint.DataAwsS3AccessPoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_s3_access_point

dataAwsS3AccessPoint.DataAwsS3AccessPoint.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_s3_access_point

dataAwsS3AccessPoint.DataAwsS3AccessPoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsS3AccessPoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsS3AccessPoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsS3AccessPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/s3_access_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsS3AccessPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.bucketAccountId">bucket_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.dataSourceId">data_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.dataSourceType">data_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.endpoints">endpoints</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.networkOrigin">network_origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.publicAccessBlockConfiguration">public_access_block_configuration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationList">DataAwsS3AccessPointPublicAccessBlockConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationList">DataAwsS3AccessPointVpcConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `bucket_account_id`<sup>Required</sup> <a name="bucket_account_id" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.bucketAccountId"></a>

```python
bucket_account_id: str
```

- *Type:* str

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.dataSourceId"></a>

```python
data_source_id: str
```

- *Type:* str

---

##### `data_source_type`<sup>Required</sup> <a name="data_source_type" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.dataSourceType"></a>

```python
data_source_type: str
```

- *Type:* str

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.endpoints"></a>

```python
endpoints: StringMap
```

- *Type:* cdktf.StringMap

---

##### `network_origin`<sup>Required</sup> <a name="network_origin" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.networkOrigin"></a>

```python
network_origin: str
```

- *Type:* str

---

##### `public_access_block_configuration`<sup>Required</sup> <a name="public_access_block_configuration" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.publicAccessBlockConfiguration"></a>

```python
public_access_block_configuration: DataAwsS3AccessPointPublicAccessBlockConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationList">DataAwsS3AccessPointPublicAccessBlockConfigurationList</a>

---

##### `vpc_configuration`<sup>Required</sup> <a name="vpc_configuration" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.vpcConfiguration"></a>

```python
vpc_configuration: DataAwsS3AccessPointVpcConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationList">DataAwsS3AccessPointVpcConfigurationList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsS3AccessPointConfig <a name="DataAwsS3AccessPointConfig" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_s3_access_point

dataAwsS3AccessPoint.DataAwsS3AccessPointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  account_id: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/s3_access_point#name DataAwsS3AccessPoint#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/s3_access_point#account_id DataAwsS3AccessPoint#account_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/s3_access_point#name DataAwsS3AccessPoint#name}.

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/s3_access_point#account_id DataAwsS3AccessPoint#account_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/s3_access_point#region DataAwsS3AccessPoint#region}

---

### DataAwsS3AccessPointPublicAccessBlockConfiguration <a name="DataAwsS3AccessPointPublicAccessBlockConfiguration" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_s3_access_point

dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfiguration()
```


### DataAwsS3AccessPointVpcConfiguration <a name="DataAwsS3AccessPointVpcConfiguration" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_s3_access_point

dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsS3AccessPointPublicAccessBlockConfigurationList <a name="DataAwsS3AccessPointPublicAccessBlockConfigurationList" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_s3_access_point

dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference <a name="DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_s3_access_point

dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAcls">block_public_acls</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicy">block_public_policy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAcls">ignore_public_acls</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBuckets">restrict_public_buckets</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfiguration">DataAwsS3AccessPointPublicAccessBlockConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_public_acls`<sup>Required</sup> <a name="block_public_acls" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAcls"></a>

```python
block_public_acls: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `block_public_policy`<sup>Required</sup> <a name="block_public_policy" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicy"></a>

```python
block_public_policy: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ignore_public_acls`<sup>Required</sup> <a name="ignore_public_acls" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAcls"></a>

```python
ignore_public_acls: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `restrict_public_buckets`<sup>Required</sup> <a name="restrict_public_buckets" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBuckets"></a>

```python
restrict_public_buckets: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsS3AccessPointPublicAccessBlockConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointPublicAccessBlockConfiguration">DataAwsS3AccessPointPublicAccessBlockConfiguration</a>

---


### DataAwsS3AccessPointVpcConfigurationList <a name="DataAwsS3AccessPointVpcConfigurationList" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_s3_access_point

dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsS3AccessPointVpcConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsS3AccessPointVpcConfigurationOutputReference <a name="DataAwsS3AccessPointVpcConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_s3_access_point

dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfiguration">DataAwsS3AccessPointVpcConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsS3AccessPointVpcConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsS3AccessPoint.DataAwsS3AccessPointVpcConfiguration">DataAwsS3AccessPointVpcConfiguration</a>

---



