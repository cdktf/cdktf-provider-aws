# `s3ControlMultiRegionAccessPoint` Submodule <a name="`s3ControlMultiRegionAccessPoint` Submodule" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ControlMultiRegionAccessPoint <a name="S3ControlMultiRegionAccessPoint" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point aws_s3control_multi_region_access_point}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_multi_region_access_point

s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  details: S3ControlMultiRegionAccessPointDetails,
  account_id: str = None,
  id: str = None,
  timeouts: S3ControlMultiRegionAccessPointTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.details">details</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails">S3ControlMultiRegionAccessPointDetails</a></code> | details block. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#account_id S3ControlMultiRegionAccessPoint#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#id S3ControlMultiRegionAccessPoint#id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts">S3ControlMultiRegionAccessPointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.details"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails">S3ControlMultiRegionAccessPointDetails</a>

details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#details S3ControlMultiRegionAccessPoint#details}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#account_id S3ControlMultiRegionAccessPoint#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#id S3ControlMultiRegionAccessPoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts">S3ControlMultiRegionAccessPointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#timeouts S3ControlMultiRegionAccessPoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.putDetails">put_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_details` <a name="put_details" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.putDetails"></a>

```python
def put_details(
  name: str,
  region: typing.Union[IResolvable, typing.List[S3ControlMultiRegionAccessPointDetailsRegion]],
  public_access_block: S3ControlMultiRegionAccessPointDetailsPublicAccessBlock = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.putDetails.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#name S3ControlMultiRegionAccessPoint#name}.

---

###### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.putDetails.parameter.region"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion">S3ControlMultiRegionAccessPointDetailsRegion</a>]]

region block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#region S3ControlMultiRegionAccessPoint#region}

---

###### `public_access_block`<sup>Optional</sup> <a name="public_access_block" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.putDetails.parameter.publicAccessBlock"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock">S3ControlMultiRegionAccessPointDetailsPublicAccessBlock</a>

public_access_block block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#public_access_block S3ControlMultiRegionAccessPoint#public_access_block}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#create S3ControlMultiRegionAccessPoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#delete S3ControlMultiRegionAccessPoint#delete}.

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_multi_region_access_point

s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_multi_region_access_point

s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_multi_region_access_point

s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.details">details</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference">S3ControlMultiRegionAccessPointDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference">S3ControlMultiRegionAccessPointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.detailsInput">details_input</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails">S3ControlMultiRegionAccessPointDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts">S3ControlMultiRegionAccessPointTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.details"></a>

```python
details: S3ControlMultiRegionAccessPointDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference">S3ControlMultiRegionAccessPointDetailsOutputReference</a>

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.timeouts"></a>

```python
timeouts: S3ControlMultiRegionAccessPointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference">S3ControlMultiRegionAccessPointTimeoutsOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `details_input`<sup>Optional</sup> <a name="details_input" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.detailsInput"></a>

```python
details_input: S3ControlMultiRegionAccessPointDetails
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails">S3ControlMultiRegionAccessPointDetails</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[S3ControlMultiRegionAccessPointTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts">S3ControlMultiRegionAccessPointTimeouts</a>, cdktf.IResolvable]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3ControlMultiRegionAccessPointConfig <a name="S3ControlMultiRegionAccessPointConfig" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_multi_region_access_point

s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  details: S3ControlMultiRegionAccessPointDetails,
  account_id: str = None,
  id: str = None,
  timeouts: S3ControlMultiRegionAccessPointTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.details">details</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails">S3ControlMultiRegionAccessPointDetails</a></code> | details block. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#account_id S3ControlMultiRegionAccessPoint#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#id S3ControlMultiRegionAccessPoint#id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts">S3ControlMultiRegionAccessPointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.details"></a>

```python
details: S3ControlMultiRegionAccessPointDetails
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails">S3ControlMultiRegionAccessPointDetails</a>

details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#details S3ControlMultiRegionAccessPoint#details}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#account_id S3ControlMultiRegionAccessPoint#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#id S3ControlMultiRegionAccessPoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.timeouts"></a>

```python
timeouts: S3ControlMultiRegionAccessPointTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts">S3ControlMultiRegionAccessPointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#timeouts S3ControlMultiRegionAccessPoint#timeouts}

---

### S3ControlMultiRegionAccessPointDetails <a name="S3ControlMultiRegionAccessPointDetails" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_multi_region_access_point

s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails(
  name: str,
  region: typing.Union[IResolvable, typing.List[S3ControlMultiRegionAccessPointDetailsRegion]],
  public_access_block: S3ControlMultiRegionAccessPointDetailsPublicAccessBlock = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#name S3ControlMultiRegionAccessPoint#name}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails.property.region">region</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion">S3ControlMultiRegionAccessPointDetailsRegion</a>]]</code> | region block. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails.property.publicAccessBlock">public_access_block</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock">S3ControlMultiRegionAccessPointDetailsPublicAccessBlock</a></code> | public_access_block block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#name S3ControlMultiRegionAccessPoint#name}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails.property.region"></a>

```python
region: typing.Union[IResolvable, typing.List[S3ControlMultiRegionAccessPointDetailsRegion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion">S3ControlMultiRegionAccessPointDetailsRegion</a>]]

region block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#region S3ControlMultiRegionAccessPoint#region}

---

##### `public_access_block`<sup>Optional</sup> <a name="public_access_block" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails.property.publicAccessBlock"></a>

```python
public_access_block: S3ControlMultiRegionAccessPointDetailsPublicAccessBlock
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock">S3ControlMultiRegionAccessPointDetailsPublicAccessBlock</a>

public_access_block block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#public_access_block S3ControlMultiRegionAccessPoint#public_access_block}

---

### S3ControlMultiRegionAccessPointDetailsPublicAccessBlock <a name="S3ControlMultiRegionAccessPointDetailsPublicAccessBlock" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_multi_region_access_point

s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock(
  block_public_acls: typing.Union[bool, IResolvable] = None,
  block_public_policy: typing.Union[bool, IResolvable] = None,
  ignore_public_acls: typing.Union[bool, IResolvable] = None,
  restrict_public_buckets: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock.property.blockPublicAcls">block_public_acls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#block_public_acls S3ControlMultiRegionAccessPoint#block_public_acls}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock.property.blockPublicPolicy">block_public_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#block_public_policy S3ControlMultiRegionAccessPoint#block_public_policy}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock.property.ignorePublicAcls">ignore_public_acls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#ignore_public_acls S3ControlMultiRegionAccessPoint#ignore_public_acls}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock.property.restrictPublicBuckets">restrict_public_buckets</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#restrict_public_buckets S3ControlMultiRegionAccessPoint#restrict_public_buckets}. |

---

##### `block_public_acls`<sup>Optional</sup> <a name="block_public_acls" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock.property.blockPublicAcls"></a>

```python
block_public_acls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#block_public_acls S3ControlMultiRegionAccessPoint#block_public_acls}.

---

##### `block_public_policy`<sup>Optional</sup> <a name="block_public_policy" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock.property.blockPublicPolicy"></a>

```python
block_public_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#block_public_policy S3ControlMultiRegionAccessPoint#block_public_policy}.

---

##### `ignore_public_acls`<sup>Optional</sup> <a name="ignore_public_acls" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock.property.ignorePublicAcls"></a>

```python
ignore_public_acls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#ignore_public_acls S3ControlMultiRegionAccessPoint#ignore_public_acls}.

---

##### `restrict_public_buckets`<sup>Optional</sup> <a name="restrict_public_buckets" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock.property.restrictPublicBuckets"></a>

```python
restrict_public_buckets: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#restrict_public_buckets S3ControlMultiRegionAccessPoint#restrict_public_buckets}.

---

### S3ControlMultiRegionAccessPointDetailsRegion <a name="S3ControlMultiRegionAccessPointDetailsRegion" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_multi_region_access_point

s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion(
  bucket: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#bucket S3ControlMultiRegionAccessPoint#bucket}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#bucket S3ControlMultiRegionAccessPoint#bucket}.

---

### S3ControlMultiRegionAccessPointTimeouts <a name="S3ControlMultiRegionAccessPointTimeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_multi_region_access_point

s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#create S3ControlMultiRegionAccessPoint#create}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#delete S3ControlMultiRegionAccessPoint#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#create S3ControlMultiRegionAccessPoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#delete S3ControlMultiRegionAccessPoint#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ControlMultiRegionAccessPointDetailsOutputReference <a name="S3ControlMultiRegionAccessPointDetailsOutputReference" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_multi_region_access_point

s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.putPublicAccessBlock">put_public_access_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.putRegion">put_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.resetPublicAccessBlock">reset_public_access_block</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_public_access_block` <a name="put_public_access_block" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.putPublicAccessBlock"></a>

```python
def put_public_access_block(
  block_public_acls: typing.Union[bool, IResolvable] = None,
  block_public_policy: typing.Union[bool, IResolvable] = None,
  ignore_public_acls: typing.Union[bool, IResolvable] = None,
  restrict_public_buckets: typing.Union[bool, IResolvable] = None
) -> None
```

###### `block_public_acls`<sup>Optional</sup> <a name="block_public_acls" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.putPublicAccessBlock.parameter.blockPublicAcls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#block_public_acls S3ControlMultiRegionAccessPoint#block_public_acls}.

---

###### `block_public_policy`<sup>Optional</sup> <a name="block_public_policy" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.putPublicAccessBlock.parameter.blockPublicPolicy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#block_public_policy S3ControlMultiRegionAccessPoint#block_public_policy}.

---

###### `ignore_public_acls`<sup>Optional</sup> <a name="ignore_public_acls" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.putPublicAccessBlock.parameter.ignorePublicAcls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#ignore_public_acls S3ControlMultiRegionAccessPoint#ignore_public_acls}.

---

###### `restrict_public_buckets`<sup>Optional</sup> <a name="restrict_public_buckets" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.putPublicAccessBlock.parameter.restrictPublicBuckets"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#restrict_public_buckets S3ControlMultiRegionAccessPoint#restrict_public_buckets}.

---

##### `put_region` <a name="put_region" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.putRegion"></a>

```python
def put_region(
  value: typing.Union[IResolvable, typing.List[S3ControlMultiRegionAccessPointDetailsRegion]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.putRegion.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion">S3ControlMultiRegionAccessPointDetailsRegion</a>]]

---

##### `reset_public_access_block` <a name="reset_public_access_block" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.resetPublicAccessBlock"></a>

```python
def reset_public_access_block() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.publicAccessBlock">public_access_block</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference">S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.region">region</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList">S3ControlMultiRegionAccessPointDetailsRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.publicAccessBlockInput">public_access_block_input</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock">S3ControlMultiRegionAccessPointDetailsPublicAccessBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.regionInput">region_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion">S3ControlMultiRegionAccessPointDetailsRegion</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails">S3ControlMultiRegionAccessPointDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `public_access_block`<sup>Required</sup> <a name="public_access_block" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.publicAccessBlock"></a>

```python
public_access_block: S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference">S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.region"></a>

```python
region: S3ControlMultiRegionAccessPointDetailsRegionList
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList">S3ControlMultiRegionAccessPointDetailsRegionList</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `public_access_block_input`<sup>Optional</sup> <a name="public_access_block_input" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.publicAccessBlockInput"></a>

```python
public_access_block_input: S3ControlMultiRegionAccessPointDetailsPublicAccessBlock
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock">S3ControlMultiRegionAccessPointDetailsPublicAccessBlock</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.regionInput"></a>

```python
region_input: typing.Union[IResolvable, typing.List[S3ControlMultiRegionAccessPointDetailsRegion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion">S3ControlMultiRegionAccessPointDetailsRegion</a>]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.internalValue"></a>

```python
internal_value: S3ControlMultiRegionAccessPointDetails
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails">S3ControlMultiRegionAccessPointDetails</a>

---


### S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference <a name="S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_multi_region_access_point

s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resetBlockPublicAcls">reset_block_public_acls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resetBlockPublicPolicy">reset_block_public_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resetIgnorePublicAcls">reset_ignore_public_acls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resetRestrictPublicBuckets">reset_restrict_public_buckets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_block_public_acls` <a name="reset_block_public_acls" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resetBlockPublicAcls"></a>

```python
def reset_block_public_acls() -> None
```

##### `reset_block_public_policy` <a name="reset_block_public_policy" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resetBlockPublicPolicy"></a>

```python
def reset_block_public_policy() -> None
```

##### `reset_ignore_public_acls` <a name="reset_ignore_public_acls" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resetIgnorePublicAcls"></a>

```python
def reset_ignore_public_acls() -> None
```

##### `reset_restrict_public_buckets` <a name="reset_restrict_public_buckets" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resetRestrictPublicBuckets"></a>

```python
def reset_restrict_public_buckets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.blockPublicAclsInput">block_public_acls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.blockPublicPolicyInput">block_public_policy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.ignorePublicAclsInput">ignore_public_acls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.restrictPublicBucketsInput">restrict_public_buckets_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.blockPublicAcls">block_public_acls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.blockPublicPolicy">block_public_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.ignorePublicAcls">ignore_public_acls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.restrictPublicBuckets">restrict_public_buckets</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock">S3ControlMultiRegionAccessPointDetailsPublicAccessBlock</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_public_acls_input`<sup>Optional</sup> <a name="block_public_acls_input" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.blockPublicAclsInput"></a>

```python
block_public_acls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `block_public_policy_input`<sup>Optional</sup> <a name="block_public_policy_input" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.blockPublicPolicyInput"></a>

```python
block_public_policy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ignore_public_acls_input`<sup>Optional</sup> <a name="ignore_public_acls_input" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.ignorePublicAclsInput"></a>

```python
ignore_public_acls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `restrict_public_buckets_input`<sup>Optional</sup> <a name="restrict_public_buckets_input" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.restrictPublicBucketsInput"></a>

```python
restrict_public_buckets_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `block_public_acls`<sup>Required</sup> <a name="block_public_acls" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.blockPublicAcls"></a>

```python
block_public_acls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `block_public_policy`<sup>Required</sup> <a name="block_public_policy" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.blockPublicPolicy"></a>

```python
block_public_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ignore_public_acls`<sup>Required</sup> <a name="ignore_public_acls" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.ignorePublicAcls"></a>

```python
ignore_public_acls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `restrict_public_buckets`<sup>Required</sup> <a name="restrict_public_buckets" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.restrictPublicBuckets"></a>

```python
restrict_public_buckets: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.internalValue"></a>

```python
internal_value: S3ControlMultiRegionAccessPointDetailsPublicAccessBlock
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock">S3ControlMultiRegionAccessPointDetailsPublicAccessBlock</a>

---


### S3ControlMultiRegionAccessPointDetailsRegionList <a name="S3ControlMultiRegionAccessPointDetailsRegionList" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_multi_region_access_point

s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3ControlMultiRegionAccessPointDetailsRegionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion">S3ControlMultiRegionAccessPointDetailsRegion</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[S3ControlMultiRegionAccessPointDetailsRegion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion">S3ControlMultiRegionAccessPointDetailsRegion</a>]]

---


### S3ControlMultiRegionAccessPointDetailsRegionOutputReference <a name="S3ControlMultiRegionAccessPointDetailsRegionOutputReference" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_multi_region_access_point

s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion">S3ControlMultiRegionAccessPointDetailsRegion</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[S3ControlMultiRegionAccessPointDetailsRegion, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion">S3ControlMultiRegionAccessPointDetailsRegion</a>, cdktf.IResolvable]

---


### S3ControlMultiRegionAccessPointTimeoutsOutputReference <a name="S3ControlMultiRegionAccessPointTimeoutsOutputReference" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_multi_region_access_point

s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts">S3ControlMultiRegionAccessPointTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[S3ControlMultiRegionAccessPointTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts">S3ControlMultiRegionAccessPointTimeouts</a>, cdktf.IResolvable]

---



