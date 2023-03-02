# `dataAwsS3ControlMultiRegionAccessPoint` Submodule <a name="`dataAwsS3ControlMultiRegionAccessPoint` Submodule" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsS3ControlMultiRegionAccessPoint <a name="DataAwsS3ControlMultiRegionAccessPoint" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/s3control_multi_region_access_point aws_s3control_multi_region_access_point}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_s3_control_multi_region_access_point

dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  account_id: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3control_multi_region_access_point#name DataAwsS3ControlMultiRegionAccessPoint#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3control_multi_region_access_point#account_id DataAwsS3ControlMultiRegionAccessPoint#account_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3control_multi_region_access_point#id DataAwsS3ControlMultiRegionAccessPoint#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3control_multi_region_access_point#name DataAwsS3ControlMultiRegionAccessPoint#name}.

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3control_multi_region_access_point#account_id DataAwsS3ControlMultiRegionAccessPoint#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3control_multi_region_access_point#id DataAwsS3ControlMultiRegionAccessPoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_s3_control_multi_region_access_point

dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_s3_control_multi_region_access_point

dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_s3_control_multi_region_access_point

dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.publicAccessBlock">public_access_block</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList">DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.regions">regions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList">DataAwsS3ControlMultiRegionAccessPointRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `public_access_block`<sup>Required</sup> <a name="public_access_block" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.publicAccessBlock"></a>

```python
public_access_block: DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList">DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList</a>

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.regions"></a>

```python
regions: DataAwsS3ControlMultiRegionAccessPointRegionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList">DataAwsS3ControlMultiRegionAccessPointRegionsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsS3ControlMultiRegionAccessPointConfig <a name="DataAwsS3ControlMultiRegionAccessPointConfig" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_s3_control_multi_region_access_point

dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  account_id: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3control_multi_region_access_point#name DataAwsS3ControlMultiRegionAccessPoint#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3control_multi_region_access_point#account_id DataAwsS3ControlMultiRegionAccessPoint#account_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3control_multi_region_access_point#id DataAwsS3ControlMultiRegionAccessPoint#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3control_multi_region_access_point#name DataAwsS3ControlMultiRegionAccessPoint#name}.

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3control_multi_region_access_point#account_id DataAwsS3ControlMultiRegionAccessPoint#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3control_multi_region_access_point#id DataAwsS3ControlMultiRegionAccessPoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock <a name="DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_s3_control_multi_region_access_point

dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock()
```


### DataAwsS3ControlMultiRegionAccessPointRegions <a name="DataAwsS3ControlMultiRegionAccessPointRegions" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_s3_control_multi_region_access_point

dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList <a name="DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_s3_control_multi_region_access_point

dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference <a name="DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_s3_control_multi_region_access_point

dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.blockPublicAcls">block_public_acls</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.blockPublicPolicy">block_public_policy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.ignorePublicAcls">ignore_public_acls</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.restrictPublicBuckets">restrict_public_buckets</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock">DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_public_acls`<sup>Required</sup> <a name="block_public_acls" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.blockPublicAcls"></a>

```python
block_public_acls: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `block_public_policy`<sup>Required</sup> <a name="block_public_policy" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.blockPublicPolicy"></a>

```python
block_public_policy: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ignore_public_acls`<sup>Required</sup> <a name="ignore_public_acls" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.ignorePublicAcls"></a>

```python
ignore_public_acls: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `restrict_public_buckets`<sup>Required</sup> <a name="restrict_public_buckets" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.restrictPublicBuckets"></a>

```python
restrict_public_buckets: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock">DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock</a>

---


### DataAwsS3ControlMultiRegionAccessPointRegionsList <a name="DataAwsS3ControlMultiRegionAccessPointRegionsList" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_s3_control_multi_region_access_point

dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference <a name="DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_s3_control_multi_region_access_point

dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegions">DataAwsS3ControlMultiRegionAccessPointRegions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsS3ControlMultiRegionAccessPointRegions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegions">DataAwsS3ControlMultiRegionAccessPointRegions</a>

---



