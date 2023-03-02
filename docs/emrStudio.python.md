# `emrStudio` Submodule <a name="`emrStudio` Submodule" id="@cdktf/provider-aws.emrStudio"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrStudio <a name="EmrStudio" id="@cdktf/provider-aws.emrStudio.EmrStudio"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_studio aws_emr_studio}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrStudio.EmrStudio.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_studio

emrStudio.EmrStudio(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auth_mode: str,
  default_s3_location: str,
  engine_security_group_id: str,
  name: str,
  service_role: str,
  subnet_ids: typing.List[str],
  vpc_id: str,
  workspace_security_group_id: str,
  description: str = None,
  id: str = None,
  idp_auth_url: str = None,
  idp_relay_state_parameter_name: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  user_role: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.authMode">auth_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#auth_mode EmrStudio#auth_mode}. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.defaultS3Location">default_s3_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#default_s3_location EmrStudio#default_s3_location}. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.engineSecurityGroupId">engine_security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#engine_security_group_id EmrStudio#engine_security_group_id}. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#name EmrStudio#name}. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.serviceRole">service_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#service_role EmrStudio#service_role}. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#subnet_ids EmrStudio#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#vpc_id EmrStudio#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.workspaceSecurityGroupId">workspace_security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#workspace_security_group_id EmrStudio#workspace_security_group_id}. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#description EmrStudio#description}. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#id EmrStudio#id}. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.idpAuthUrl">idp_auth_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#idp_auth_url EmrStudio#idp_auth_url}. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.idpRelayStateParameterName">idp_relay_state_parameter_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#idp_relay_state_parameter_name EmrStudio#idp_relay_state_parameter_name}. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#tags EmrStudio#tags}. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#tags_all EmrStudio#tags_all}. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.userRole">user_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#user_role EmrStudio#user_role}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_mode`<sup>Required</sup> <a name="auth_mode" id="@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.authMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#auth_mode EmrStudio#auth_mode}.

---

##### `default_s3_location`<sup>Required</sup> <a name="default_s3_location" id="@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.defaultS3Location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#default_s3_location EmrStudio#default_s3_location}.

---

##### `engine_security_group_id`<sup>Required</sup> <a name="engine_security_group_id" id="@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.engineSecurityGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#engine_security_group_id EmrStudio#engine_security_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#name EmrStudio#name}.

---

##### `service_role`<sup>Required</sup> <a name="service_role" id="@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.serviceRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#service_role EmrStudio#service_role}.

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#subnet_ids EmrStudio#subnet_ids}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#vpc_id EmrStudio#vpc_id}.

---

##### `workspace_security_group_id`<sup>Required</sup> <a name="workspace_security_group_id" id="@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.workspaceSecurityGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#workspace_security_group_id EmrStudio#workspace_security_group_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#description EmrStudio#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#id EmrStudio#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idp_auth_url`<sup>Optional</sup> <a name="idp_auth_url" id="@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.idpAuthUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#idp_auth_url EmrStudio#idp_auth_url}.

---

##### `idp_relay_state_parameter_name`<sup>Optional</sup> <a name="idp_relay_state_parameter_name" id="@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.idpRelayStateParameterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#idp_relay_state_parameter_name EmrStudio#idp_relay_state_parameter_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#tags EmrStudio#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#tags_all EmrStudio#tags_all}.

---

##### `user_role`<sup>Optional</sup> <a name="user_role" id="@cdktf/provider-aws.emrStudio.EmrStudio.Initializer.parameter.userRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#user_role EmrStudio#user_role}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.resetIdpAuthUrl">reset_idp_auth_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.resetIdpRelayStateParameterName">reset_idp_relay_state_parameter_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.resetUserRole">reset_user_role</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrStudio.EmrStudio.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.emrStudio.EmrStudio.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.emrStudio.EmrStudio.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrStudio.EmrStudio.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.emrStudio.EmrStudio.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.emrStudio.EmrStudio.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.emrStudio.EmrStudio.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.emrStudio.EmrStudio.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.emrStudio.EmrStudio.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrStudio.EmrStudio.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrStudio.EmrStudio.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrStudio.EmrStudio.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrStudio.EmrStudio.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrStudio.EmrStudio.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrStudio.EmrStudio.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrStudio.EmrStudio.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrStudio.EmrStudio.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrStudio.EmrStudio.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrStudio.EmrStudio.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrStudio.EmrStudio.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrStudio.EmrStudio.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrStudio.EmrStudio.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrStudio.EmrStudio.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrStudio.EmrStudio.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrStudio.EmrStudio.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrStudio.EmrStudio.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrStudio.EmrStudio.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrStudio.EmrStudio.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrStudio.EmrStudio.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.emrStudio.EmrStudio.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.emrStudio.EmrStudio.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_idp_auth_url` <a name="reset_idp_auth_url" id="@cdktf/provider-aws.emrStudio.EmrStudio.resetIdpAuthUrl"></a>

```python
def reset_idp_auth_url() -> None
```

##### `reset_idp_relay_state_parameter_name` <a name="reset_idp_relay_state_parameter_name" id="@cdktf/provider-aws.emrStudio.EmrStudio.resetIdpRelayStateParameterName"></a>

```python
def reset_idp_relay_state_parameter_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.emrStudio.EmrStudio.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.emrStudio.EmrStudio.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_user_role` <a name="reset_user_role" id="@cdktf/provider-aws.emrStudio.EmrStudio.resetUserRole"></a>

```python
def reset_user_role() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.emrStudio.EmrStudio.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import emr_studio

emrStudio.EmrStudio.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrStudio.EmrStudio.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.emrStudio.EmrStudio.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import emr_studio

emrStudio.EmrStudio.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrStudio.EmrStudio.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.emrStudio.EmrStudio.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import emr_studio

emrStudio.EmrStudio.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrStudio.EmrStudio.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.authModeInput">auth_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.defaultS3LocationInput">default_s3_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.engineSecurityGroupIdInput">engine_security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.idpAuthUrlInput">idp_auth_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.idpRelayStateParameterNameInput">idp_relay_state_parameter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.serviceRoleInput">service_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.userRoleInput">user_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.workspaceSecurityGroupIdInput">workspace_security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.authMode">auth_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.defaultS3Location">default_s3_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.engineSecurityGroupId">engine_security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.idpAuthUrl">idp_auth_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.idpRelayStateParameterName">idp_relay_state_parameter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.serviceRole">service_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.userRole">user_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.workspaceSecurityGroupId">workspace_security_group_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `auth_mode_input`<sup>Optional</sup> <a name="auth_mode_input" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.authModeInput"></a>

```python
auth_mode_input: str
```

- *Type:* str

---

##### `default_s3_location_input`<sup>Optional</sup> <a name="default_s3_location_input" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.defaultS3LocationInput"></a>

```python
default_s3_location_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `engine_security_group_id_input`<sup>Optional</sup> <a name="engine_security_group_id_input" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.engineSecurityGroupIdInput"></a>

```python
engine_security_group_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idp_auth_url_input`<sup>Optional</sup> <a name="idp_auth_url_input" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.idpAuthUrlInput"></a>

```python
idp_auth_url_input: str
```

- *Type:* str

---

##### `idp_relay_state_parameter_name_input`<sup>Optional</sup> <a name="idp_relay_state_parameter_name_input" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.idpRelayStateParameterNameInput"></a>

```python
idp_relay_state_parameter_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `service_role_input`<sup>Optional</sup> <a name="service_role_input" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.serviceRoleInput"></a>

```python
service_role_input: str
```

- *Type:* str

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `user_role_input`<sup>Optional</sup> <a name="user_role_input" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.userRoleInput"></a>

```python
user_role_input: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `workspace_security_group_id_input`<sup>Optional</sup> <a name="workspace_security_group_id_input" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.workspaceSecurityGroupIdInput"></a>

```python
workspace_security_group_id_input: str
```

- *Type:* str

---

##### `auth_mode`<sup>Required</sup> <a name="auth_mode" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.authMode"></a>

```python
auth_mode: str
```

- *Type:* str

---

##### `default_s3_location`<sup>Required</sup> <a name="default_s3_location" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.defaultS3Location"></a>

```python
default_s3_location: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `engine_security_group_id`<sup>Required</sup> <a name="engine_security_group_id" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.engineSecurityGroupId"></a>

```python
engine_security_group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idp_auth_url`<sup>Required</sup> <a name="idp_auth_url" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.idpAuthUrl"></a>

```python
idp_auth_url: str
```

- *Type:* str

---

##### `idp_relay_state_parameter_name`<sup>Required</sup> <a name="idp_relay_state_parameter_name" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.idpRelayStateParameterName"></a>

```python
idp_relay_state_parameter_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_role`<sup>Required</sup> <a name="service_role" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.serviceRole"></a>

```python
service_role: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `user_role`<sup>Required</sup> <a name="user_role" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.userRole"></a>

```python
user_role: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `workspace_security_group_id`<sup>Required</sup> <a name="workspace_security_group_id" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.workspaceSecurityGroupId"></a>

```python
workspace_security_group_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudio.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.emrStudio.EmrStudio.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EmrStudioConfig <a name="EmrStudioConfig" id="@cdktf/provider-aws.emrStudio.EmrStudioConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrStudio.EmrStudioConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_studio

emrStudio.EmrStudioConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auth_mode: str,
  default_s3_location: str,
  engine_security_group_id: str,
  name: str,
  service_role: str,
  subnet_ids: typing.List[str],
  vpc_id: str,
  workspace_security_group_id: str,
  description: str = None,
  id: str = None,
  idp_auth_url: str = None,
  idp_relay_state_parameter_name: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  user_role: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.authMode">auth_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#auth_mode EmrStudio#auth_mode}. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.defaultS3Location">default_s3_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#default_s3_location EmrStudio#default_s3_location}. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.engineSecurityGroupId">engine_security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#engine_security_group_id EmrStudio#engine_security_group_id}. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#name EmrStudio#name}. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.serviceRole">service_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#service_role EmrStudio#service_role}. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#subnet_ids EmrStudio#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#vpc_id EmrStudio#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.workspaceSecurityGroupId">workspace_security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#workspace_security_group_id EmrStudio#workspace_security_group_id}. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#description EmrStudio#description}. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#id EmrStudio#id}. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.idpAuthUrl">idp_auth_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#idp_auth_url EmrStudio#idp_auth_url}. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.idpRelayStateParameterName">idp_relay_state_parameter_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#idp_relay_state_parameter_name EmrStudio#idp_relay_state_parameter_name}. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#tags EmrStudio#tags}. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#tags_all EmrStudio#tags_all}. |
| <code><a href="#@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.userRole">user_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#user_role EmrStudio#user_role}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_mode`<sup>Required</sup> <a name="auth_mode" id="@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.authMode"></a>

```python
auth_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#auth_mode EmrStudio#auth_mode}.

---

##### `default_s3_location`<sup>Required</sup> <a name="default_s3_location" id="@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.defaultS3Location"></a>

```python
default_s3_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#default_s3_location EmrStudio#default_s3_location}.

---

##### `engine_security_group_id`<sup>Required</sup> <a name="engine_security_group_id" id="@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.engineSecurityGroupId"></a>

```python
engine_security_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#engine_security_group_id EmrStudio#engine_security_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#name EmrStudio#name}.

---

##### `service_role`<sup>Required</sup> <a name="service_role" id="@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.serviceRole"></a>

```python
service_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#service_role EmrStudio#service_role}.

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#subnet_ids EmrStudio#subnet_ids}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#vpc_id EmrStudio#vpc_id}.

---

##### `workspace_security_group_id`<sup>Required</sup> <a name="workspace_security_group_id" id="@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.workspaceSecurityGroupId"></a>

```python
workspace_security_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#workspace_security_group_id EmrStudio#workspace_security_group_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#description EmrStudio#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#id EmrStudio#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idp_auth_url`<sup>Optional</sup> <a name="idp_auth_url" id="@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.idpAuthUrl"></a>

```python
idp_auth_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#idp_auth_url EmrStudio#idp_auth_url}.

---

##### `idp_relay_state_parameter_name`<sup>Optional</sup> <a name="idp_relay_state_parameter_name" id="@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.idpRelayStateParameterName"></a>

```python
idp_relay_state_parameter_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#idp_relay_state_parameter_name EmrStudio#idp_relay_state_parameter_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#tags EmrStudio#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#tags_all EmrStudio#tags_all}.

---

##### `user_role`<sup>Optional</sup> <a name="user_role" id="@cdktf/provider-aws.emrStudio.EmrStudioConfig.property.userRole"></a>

```python
user_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#user_role EmrStudio#user_role}.

---



