# `cloud9EnvironmentEc2` Submodule <a name="`cloud9EnvironmentEc2` Submodule" id="@cdktf/provider-aws.cloud9EnvironmentEc2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cloud9EnvironmentEc2 <a name="Cloud9EnvironmentEc2" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2 aws_cloud9_environment_ec2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloud9_environment_ec2

cloud9EnvironmentEc2.Cloud9EnvironmentEc2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_type: str,
  name: str,
  automatic_stop_time_minutes: typing.Union[int, float] = None,
  connection_type: str = None,
  description: str = None,
  id: str = None,
  image_id: str = None,
  owner_arn: str = None,
  subnet_id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#instance_type Cloud9EnvironmentEc2#instance_type}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#name Cloud9EnvironmentEc2#name}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.automaticStopTimeMinutes">automatic_stop_time_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#automatic_stop_time_minutes Cloud9EnvironmentEc2#automatic_stop_time_minutes}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.connectionType">connection_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#connection_type Cloud9EnvironmentEc2#connection_type}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#description Cloud9EnvironmentEc2#description}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#id Cloud9EnvironmentEc2#id}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#image_id Cloud9EnvironmentEc2#image_id}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.ownerArn">owner_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#owner_arn Cloud9EnvironmentEc2#owner_arn}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#subnet_id Cloud9EnvironmentEc2#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#tags Cloud9EnvironmentEc2#tags}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#tags_all Cloud9EnvironmentEc2#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#instance_type Cloud9EnvironmentEc2#instance_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#name Cloud9EnvironmentEc2#name}.

---

##### `automatic_stop_time_minutes`<sup>Optional</sup> <a name="automatic_stop_time_minutes" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.automaticStopTimeMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#automatic_stop_time_minutes Cloud9EnvironmentEc2#automatic_stop_time_minutes}.

---

##### `connection_type`<sup>Optional</sup> <a name="connection_type" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.connectionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#connection_type Cloud9EnvironmentEc2#connection_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#description Cloud9EnvironmentEc2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#id Cloud9EnvironmentEc2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_id`<sup>Optional</sup> <a name="image_id" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.imageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#image_id Cloud9EnvironmentEc2#image_id}.

---

##### `owner_arn`<sup>Optional</sup> <a name="owner_arn" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.ownerArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#owner_arn Cloud9EnvironmentEc2#owner_arn}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#subnet_id Cloud9EnvironmentEc2#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#tags Cloud9EnvironmentEc2#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#tags_all Cloud9EnvironmentEc2#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetAutomaticStopTimeMinutes">reset_automatic_stop_time_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetConnectionType">reset_connection_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetImageId">reset_image_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetOwnerArn">reset_owner_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_automatic_stop_time_minutes` <a name="reset_automatic_stop_time_minutes" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetAutomaticStopTimeMinutes"></a>

```python
def reset_automatic_stop_time_minutes() -> None
```

##### `reset_connection_type` <a name="reset_connection_type" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetConnectionType"></a>

```python
def reset_connection_type() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image_id` <a name="reset_image_id" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetImageId"></a>

```python
def reset_image_id() -> None
```

##### `reset_owner_arn` <a name="reset_owner_arn" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetOwnerArn"></a>

```python
def reset_owner_arn() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cloud9_environment_ec2

cloud9EnvironmentEc2.Cloud9EnvironmentEc2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cloud9_environment_ec2

cloud9EnvironmentEc2.Cloud9EnvironmentEc2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cloud9_environment_ec2

cloud9EnvironmentEc2.Cloud9EnvironmentEc2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.automaticStopTimeMinutesInput">automatic_stop_time_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connectionTypeInput">connection_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.imageIdInput">image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.ownerArnInput">owner_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.automaticStopTimeMinutes">automatic_stop_time_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connectionType">connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.ownerArn">owner_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `automatic_stop_time_minutes_input`<sup>Optional</sup> <a name="automatic_stop_time_minutes_input" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.automaticStopTimeMinutesInput"></a>

```python
automatic_stop_time_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `connection_type_input`<sup>Optional</sup> <a name="connection_type_input" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connectionTypeInput"></a>

```python
connection_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_id_input`<sup>Optional</sup> <a name="image_id_input" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.imageIdInput"></a>

```python
image_id_input: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owner_arn_input`<sup>Optional</sup> <a name="owner_arn_input" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.ownerArnInput"></a>

```python
owner_arn_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `automatic_stop_time_minutes`<sup>Required</sup> <a name="automatic_stop_time_minutes" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.automaticStopTimeMinutes"></a>

```python
automatic_stop_time_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner_arn`<sup>Required</sup> <a name="owner_arn" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.ownerArn"></a>

```python
owner_arn: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Cloud9EnvironmentEc2Config <a name="Cloud9EnvironmentEc2Config" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloud9_environment_ec2

cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_type: str,
  name: str,
  automatic_stop_time_minutes: typing.Union[int, float] = None,
  connection_type: str = None,
  description: str = None,
  id: str = None,
  image_id: str = None,
  owner_arn: str = None,
  subnet_id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#instance_type Cloud9EnvironmentEc2#instance_type}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#name Cloud9EnvironmentEc2#name}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.automaticStopTimeMinutes">automatic_stop_time_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#automatic_stop_time_minutes Cloud9EnvironmentEc2#automatic_stop_time_minutes}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.connectionType">connection_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#connection_type Cloud9EnvironmentEc2#connection_type}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#description Cloud9EnvironmentEc2#description}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#id Cloud9EnvironmentEc2#id}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#image_id Cloud9EnvironmentEc2#image_id}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.ownerArn">owner_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#owner_arn Cloud9EnvironmentEc2#owner_arn}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#subnet_id Cloud9EnvironmentEc2#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#tags Cloud9EnvironmentEc2#tags}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#tags_all Cloud9EnvironmentEc2#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#instance_type Cloud9EnvironmentEc2#instance_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#name Cloud9EnvironmentEc2#name}.

---

##### `automatic_stop_time_minutes`<sup>Optional</sup> <a name="automatic_stop_time_minutes" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.automaticStopTimeMinutes"></a>

```python
automatic_stop_time_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#automatic_stop_time_minutes Cloud9EnvironmentEc2#automatic_stop_time_minutes}.

---

##### `connection_type`<sup>Optional</sup> <a name="connection_type" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#connection_type Cloud9EnvironmentEc2#connection_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#description Cloud9EnvironmentEc2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#id Cloud9EnvironmentEc2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_id`<sup>Optional</sup> <a name="image_id" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#image_id Cloud9EnvironmentEc2#image_id}.

---

##### `owner_arn`<sup>Optional</sup> <a name="owner_arn" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.ownerArn"></a>

```python
owner_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#owner_arn Cloud9EnvironmentEc2#owner_arn}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#subnet_id Cloud9EnvironmentEc2#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#tags Cloud9EnvironmentEc2#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#tags_all Cloud9EnvironmentEc2#tags_all}.

---



