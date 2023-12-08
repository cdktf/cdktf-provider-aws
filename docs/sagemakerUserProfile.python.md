# `sagemakerUserProfile` Submodule <a name="`sagemakerUserProfile` Submodule" id="@cdktf/provider-aws.sagemakerUserProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerUserProfile <a name="SagemakerUserProfile" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile aws_sagemaker_user_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfile(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_id: str,
  user_profile_name: str,
  id: str = None,
  single_sign_on_user_identifier: str = None,
  single_sign_on_user_value: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  user_settings: SagemakerUserProfileUserSettings = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.domainId">domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#domain_id SagemakerUserProfile#domain_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.userProfileName">user_profile_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#user_profile_name SagemakerUserProfile#user_profile_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#id SagemakerUserProfile#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.singleSignOnUserIdentifier">single_sign_on_user_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#single_sign_on_user_identifier SagemakerUserProfile#single_sign_on_user_identifier}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.singleSignOnUserValue">single_sign_on_user_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#single_sign_on_user_value SagemakerUserProfile#single_sign_on_user_value}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#tags SagemakerUserProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#tags_all SagemakerUserProfile#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.userSettings">user_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a></code> | user_settings block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.domainId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#domain_id SagemakerUserProfile#domain_id}.

---

##### `user_profile_name`<sup>Required</sup> <a name="user_profile_name" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.userProfileName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#user_profile_name SagemakerUserProfile#user_profile_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#id SagemakerUserProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `single_sign_on_user_identifier`<sup>Optional</sup> <a name="single_sign_on_user_identifier" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.singleSignOnUserIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#single_sign_on_user_identifier SagemakerUserProfile#single_sign_on_user_identifier}.

---

##### `single_sign_on_user_value`<sup>Optional</sup> <a name="single_sign_on_user_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.singleSignOnUserValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#single_sign_on_user_value SagemakerUserProfile#single_sign_on_user_value}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#tags SagemakerUserProfile#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#tags_all SagemakerUserProfile#tags_all}.

---

##### `user_settings`<sup>Optional</sup> <a name="user_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.userSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a>

user_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#user_settings SagemakerUserProfile#user_settings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.putUserSettings">put_user_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.resetSingleSignOnUserIdentifier">reset_single_sign_on_user_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.resetSingleSignOnUserValue">reset_single_sign_on_user_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.resetUserSettings">reset_user_settings</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_user_settings` <a name="put_user_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.putUserSettings"></a>

```python
def put_user_settings(
  execution_role: str,
  canvas_app_settings: SagemakerUserProfileUserSettingsCanvasAppSettings = None,
  code_editor_app_settings: SagemakerUserProfileUserSettingsCodeEditorAppSettings = None,
  custom_file_system_config: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsCustomFileSystemConfig]] = None,
  custom_posix_user_config: SagemakerUserProfileUserSettingsCustomPosixUserConfig = None,
  default_landing_uri: str = None,
  jupyter_lab_app_settings: SagemakerUserProfileUserSettingsJupyterLabAppSettings = None,
  jupyter_server_app_settings: SagemakerUserProfileUserSettingsJupyterServerAppSettings = None,
  kernel_gateway_app_settings: SagemakerUserProfileUserSettingsKernelGatewayAppSettings = None,
  r_session_app_settings: SagemakerUserProfileUserSettingsRSessionAppSettings = None,
  r_studio_server_pro_app_settings: SagemakerUserProfileUserSettingsRStudioServerProAppSettings = None,
  security_groups: typing.List[str] = None,
  sharing_settings: SagemakerUserProfileUserSettingsSharingSettings = None,
  space_storage_settings: SagemakerUserProfileUserSettingsSpaceStorageSettings = None,
  studio_web_portal: str = None,
  tensor_board_app_settings: SagemakerUserProfileUserSettingsTensorBoardAppSettings = None
) -> None
```

###### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.putUserSettings.parameter.executionRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#execution_role SagemakerUserProfile#execution_role}.

---

###### `canvas_app_settings`<sup>Optional</sup> <a name="canvas_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.putUserSettings.parameter.canvasAppSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings">SagemakerUserProfileUserSettingsCanvasAppSettings</a>

canvas_app_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#canvas_app_settings SagemakerUserProfile#canvas_app_settings}

---

###### `code_editor_app_settings`<sup>Optional</sup> <a name="code_editor_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.putUserSettings.parameter.codeEditorAppSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettings</a>

code_editor_app_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#code_editor_app_settings SagemakerUserProfile#code_editor_app_settings}

---

###### `custom_file_system_config`<sup>Optional</sup> <a name="custom_file_system_config" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.putUserSettings.parameter.customFileSystemConfig"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfig</a>]]

custom_file_system_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#custom_file_system_config SagemakerUserProfile#custom_file_system_config}

---

###### `custom_posix_user_config`<sup>Optional</sup> <a name="custom_posix_user_config" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.putUserSettings.parameter.customPosixUserConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig">SagemakerUserProfileUserSettingsCustomPosixUserConfig</a>

custom_posix_user_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#custom_posix_user_config SagemakerUserProfile#custom_posix_user_config}

---

###### `default_landing_uri`<sup>Optional</sup> <a name="default_landing_uri" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.putUserSettings.parameter.defaultLandingUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#default_landing_uri SagemakerUserProfile#default_landing_uri}.

---

###### `jupyter_lab_app_settings`<sup>Optional</sup> <a name="jupyter_lab_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.putUserSettings.parameter.jupyterLabAppSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettings</a>

jupyter_lab_app_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#jupyter_lab_app_settings SagemakerUserProfile#jupyter_lab_app_settings}

---

###### `jupyter_server_app_settings`<sup>Optional</sup> <a name="jupyter_server_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.putUserSettings.parameter.jupyterServerAppSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings">SagemakerUserProfileUserSettingsJupyterServerAppSettings</a>

jupyter_server_app_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#jupyter_server_app_settings SagemakerUserProfile#jupyter_server_app_settings}

---

###### `kernel_gateway_app_settings`<sup>Optional</sup> <a name="kernel_gateway_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.putUserSettings.parameter.kernelGatewayAppSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings">SagemakerUserProfileUserSettingsKernelGatewayAppSettings</a>

kernel_gateway_app_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#kernel_gateway_app_settings SagemakerUserProfile#kernel_gateway_app_settings}

---

###### `r_session_app_settings`<sup>Optional</sup> <a name="r_session_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.putUserSettings.parameter.rSessionAppSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettings">SagemakerUserProfileUserSettingsRSessionAppSettings</a>

r_session_app_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#r_session_app_settings SagemakerUserProfile#r_session_app_settings}

---

###### `r_studio_server_pro_app_settings`<sup>Optional</sup> <a name="r_studio_server_pro_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.putUserSettings.parameter.rStudioServerProAppSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings">SagemakerUserProfileUserSettingsRStudioServerProAppSettings</a>

r_studio_server_pro_app_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#r_studio_server_pro_app_settings SagemakerUserProfile#r_studio_server_pro_app_settings}

---

###### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.putUserSettings.parameter.securityGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#security_groups SagemakerUserProfile#security_groups}.

---

###### `sharing_settings`<sup>Optional</sup> <a name="sharing_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.putUserSettings.parameter.sharingSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings">SagemakerUserProfileUserSettingsSharingSettings</a>

sharing_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sharing_settings SagemakerUserProfile#sharing_settings}

---

###### `space_storage_settings`<sup>Optional</sup> <a name="space_storage_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.putUserSettings.parameter.spaceStorageSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettings</a>

space_storage_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#space_storage_settings SagemakerUserProfile#space_storage_settings}

---

###### `studio_web_portal`<sup>Optional</sup> <a name="studio_web_portal" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.putUserSettings.parameter.studioWebPortal"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#studio_web_portal SagemakerUserProfile#studio_web_portal}.

---

###### `tensor_board_app_settings`<sup>Optional</sup> <a name="tensor_board_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.putUserSettings.parameter.tensorBoardAppSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettings">SagemakerUserProfileUserSettingsTensorBoardAppSettings</a>

tensor_board_app_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#tensor_board_app_settings SagemakerUserProfile#tensor_board_app_settings}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_single_sign_on_user_identifier` <a name="reset_single_sign_on_user_identifier" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.resetSingleSignOnUserIdentifier"></a>

```python
def reset_single_sign_on_user_identifier() -> None
```

##### `reset_single_sign_on_user_value` <a name="reset_single_sign_on_user_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.resetSingleSignOnUserValue"></a>

```python
def reset_single_sign_on_user_value() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_user_settings` <a name="reset_user_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.resetUserSettings"></a>

```python
def reset_user_settings() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SagemakerUserProfile resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SagemakerUserProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerUserProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerUserProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SagemakerUserProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.homeEfsFileSystemUid">home_efs_file_system_uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.userSettings">user_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference">SagemakerUserProfileUserSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.domainIdInput">domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserIdentifierInput">single_sign_on_user_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserValueInput">single_sign_on_user_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.userProfileNameInput">user_profile_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.userSettingsInput">user_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserIdentifier">single_sign_on_user_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserValue">single_sign_on_user_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.userProfileName">user_profile_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `home_efs_file_system_uid`<sup>Required</sup> <a name="home_efs_file_system_uid" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.homeEfsFileSystemUid"></a>

```python
home_efs_file_system_uid: str
```

- *Type:* str

---

##### `user_settings`<sup>Required</sup> <a name="user_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.userSettings"></a>

```python
user_settings: SagemakerUserProfileUserSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference">SagemakerUserProfileUserSettingsOutputReference</a>

---

##### `domain_id_input`<sup>Optional</sup> <a name="domain_id_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.domainIdInput"></a>

```python
domain_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `single_sign_on_user_identifier_input`<sup>Optional</sup> <a name="single_sign_on_user_identifier_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserIdentifierInput"></a>

```python
single_sign_on_user_identifier_input: str
```

- *Type:* str

---

##### `single_sign_on_user_value_input`<sup>Optional</sup> <a name="single_sign_on_user_value_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserValueInput"></a>

```python
single_sign_on_user_value_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `user_profile_name_input`<sup>Optional</sup> <a name="user_profile_name_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.userProfileNameInput"></a>

```python
user_profile_name_input: str
```

- *Type:* str

---

##### `user_settings_input`<sup>Optional</sup> <a name="user_settings_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.userSettingsInput"></a>

```python
user_settings_input: SagemakerUserProfileUserSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a>

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `single_sign_on_user_identifier`<sup>Required</sup> <a name="single_sign_on_user_identifier" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserIdentifier"></a>

```python
single_sign_on_user_identifier: str
```

- *Type:* str

---

##### `single_sign_on_user_value`<sup>Required</sup> <a name="single_sign_on_user_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserValue"></a>

```python
single_sign_on_user_value: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `user_profile_name`<sup>Required</sup> <a name="user_profile_name" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.userProfileName"></a>

```python
user_profile_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerUserProfileConfig <a name="SagemakerUserProfileConfig" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_id: str,
  user_profile_name: str,
  id: str = None,
  single_sign_on_user_identifier: str = None,
  single_sign_on_user_value: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  user_settings: SagemakerUserProfileUserSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.domainId">domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#domain_id SagemakerUserProfile#domain_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.userProfileName">user_profile_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#user_profile_name SagemakerUserProfile#user_profile_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#id SagemakerUserProfile#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.singleSignOnUserIdentifier">single_sign_on_user_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#single_sign_on_user_identifier SagemakerUserProfile#single_sign_on_user_identifier}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.singleSignOnUserValue">single_sign_on_user_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#single_sign_on_user_value SagemakerUserProfile#single_sign_on_user_value}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#tags SagemakerUserProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#tags_all SagemakerUserProfile#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.userSettings">user_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a></code> | user_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#domain_id SagemakerUserProfile#domain_id}.

---

##### `user_profile_name`<sup>Required</sup> <a name="user_profile_name" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.userProfileName"></a>

```python
user_profile_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#user_profile_name SagemakerUserProfile#user_profile_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#id SagemakerUserProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `single_sign_on_user_identifier`<sup>Optional</sup> <a name="single_sign_on_user_identifier" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.singleSignOnUserIdentifier"></a>

```python
single_sign_on_user_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#single_sign_on_user_identifier SagemakerUserProfile#single_sign_on_user_identifier}.

---

##### `single_sign_on_user_value`<sup>Optional</sup> <a name="single_sign_on_user_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.singleSignOnUserValue"></a>

```python
single_sign_on_user_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#single_sign_on_user_value SagemakerUserProfile#single_sign_on_user_value}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#tags SagemakerUserProfile#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#tags_all SagemakerUserProfile#tags_all}.

---

##### `user_settings`<sup>Optional</sup> <a name="user_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.userSettings"></a>

```python
user_settings: SagemakerUserProfileUserSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a>

user_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#user_settings SagemakerUserProfile#user_settings}

---

### SagemakerUserProfileUserSettings <a name="SagemakerUserProfileUserSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettings(
  execution_role: str,
  canvas_app_settings: SagemakerUserProfileUserSettingsCanvasAppSettings = None,
  code_editor_app_settings: SagemakerUserProfileUserSettingsCodeEditorAppSettings = None,
  custom_file_system_config: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsCustomFileSystemConfig]] = None,
  custom_posix_user_config: SagemakerUserProfileUserSettingsCustomPosixUserConfig = None,
  default_landing_uri: str = None,
  jupyter_lab_app_settings: SagemakerUserProfileUserSettingsJupyterLabAppSettings = None,
  jupyter_server_app_settings: SagemakerUserProfileUserSettingsJupyterServerAppSettings = None,
  kernel_gateway_app_settings: SagemakerUserProfileUserSettingsKernelGatewayAppSettings = None,
  r_session_app_settings: SagemakerUserProfileUserSettingsRSessionAppSettings = None,
  r_studio_server_pro_app_settings: SagemakerUserProfileUserSettingsRStudioServerProAppSettings = None,
  security_groups: typing.List[str] = None,
  sharing_settings: SagemakerUserProfileUserSettingsSharingSettings = None,
  space_storage_settings: SagemakerUserProfileUserSettingsSpaceStorageSettings = None,
  studio_web_portal: str = None,
  tensor_board_app_settings: SagemakerUserProfileUserSettingsTensorBoardAppSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.executionRole">execution_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#execution_role SagemakerUserProfile#execution_role}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.canvasAppSettings">canvas_app_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings">SagemakerUserProfileUserSettingsCanvasAppSettings</a></code> | canvas_app_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.codeEditorAppSettings">code_editor_app_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettings</a></code> | code_editor_app_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.customFileSystemConfig">custom_file_system_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfig</a>]]</code> | custom_file_system_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.customPosixUserConfig">custom_posix_user_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig">SagemakerUserProfileUserSettingsCustomPosixUserConfig</a></code> | custom_posix_user_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.defaultLandingUri">default_landing_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#default_landing_uri SagemakerUserProfile#default_landing_uri}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.jupyterLabAppSettings">jupyter_lab_app_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettings</a></code> | jupyter_lab_app_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.jupyterServerAppSettings">jupyter_server_app_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings">SagemakerUserProfileUserSettingsJupyterServerAppSettings</a></code> | jupyter_server_app_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.kernelGatewayAppSettings">kernel_gateway_app_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings">SagemakerUserProfileUserSettingsKernelGatewayAppSettings</a></code> | kernel_gateway_app_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.rSessionAppSettings">r_session_app_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettings">SagemakerUserProfileUserSettingsRSessionAppSettings</a></code> | r_session_app_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.rStudioServerProAppSettings">r_studio_server_pro_app_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings">SagemakerUserProfileUserSettingsRStudioServerProAppSettings</a></code> | r_studio_server_pro_app_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#security_groups SagemakerUserProfile#security_groups}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.sharingSettings">sharing_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings">SagemakerUserProfileUserSettingsSharingSettings</a></code> | sharing_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.spaceStorageSettings">space_storage_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettings</a></code> | space_storage_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.studioWebPortal">studio_web_portal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#studio_web_portal SagemakerUserProfile#studio_web_portal}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.tensorBoardAppSettings">tensor_board_app_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettings">SagemakerUserProfileUserSettingsTensorBoardAppSettings</a></code> | tensor_board_app_settings block. |

---

##### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#execution_role SagemakerUserProfile#execution_role}.

---

##### `canvas_app_settings`<sup>Optional</sup> <a name="canvas_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.canvasAppSettings"></a>

```python
canvas_app_settings: SagemakerUserProfileUserSettingsCanvasAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings">SagemakerUserProfileUserSettingsCanvasAppSettings</a>

canvas_app_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#canvas_app_settings SagemakerUserProfile#canvas_app_settings}

---

##### `code_editor_app_settings`<sup>Optional</sup> <a name="code_editor_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.codeEditorAppSettings"></a>

```python
code_editor_app_settings: SagemakerUserProfileUserSettingsCodeEditorAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettings</a>

code_editor_app_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#code_editor_app_settings SagemakerUserProfile#code_editor_app_settings}

---

##### `custom_file_system_config`<sup>Optional</sup> <a name="custom_file_system_config" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.customFileSystemConfig"></a>

```python
custom_file_system_config: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsCustomFileSystemConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfig</a>]]

custom_file_system_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#custom_file_system_config SagemakerUserProfile#custom_file_system_config}

---

##### `custom_posix_user_config`<sup>Optional</sup> <a name="custom_posix_user_config" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.customPosixUserConfig"></a>

```python
custom_posix_user_config: SagemakerUserProfileUserSettingsCustomPosixUserConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig">SagemakerUserProfileUserSettingsCustomPosixUserConfig</a>

custom_posix_user_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#custom_posix_user_config SagemakerUserProfile#custom_posix_user_config}

---

##### `default_landing_uri`<sup>Optional</sup> <a name="default_landing_uri" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.defaultLandingUri"></a>

```python
default_landing_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#default_landing_uri SagemakerUserProfile#default_landing_uri}.

---

##### `jupyter_lab_app_settings`<sup>Optional</sup> <a name="jupyter_lab_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.jupyterLabAppSettings"></a>

```python
jupyter_lab_app_settings: SagemakerUserProfileUserSettingsJupyterLabAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettings</a>

jupyter_lab_app_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#jupyter_lab_app_settings SagemakerUserProfile#jupyter_lab_app_settings}

---

##### `jupyter_server_app_settings`<sup>Optional</sup> <a name="jupyter_server_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.jupyterServerAppSettings"></a>

```python
jupyter_server_app_settings: SagemakerUserProfileUserSettingsJupyterServerAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings">SagemakerUserProfileUserSettingsJupyterServerAppSettings</a>

jupyter_server_app_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#jupyter_server_app_settings SagemakerUserProfile#jupyter_server_app_settings}

---

##### `kernel_gateway_app_settings`<sup>Optional</sup> <a name="kernel_gateway_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.kernelGatewayAppSettings"></a>

```python
kernel_gateway_app_settings: SagemakerUserProfileUserSettingsKernelGatewayAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings">SagemakerUserProfileUserSettingsKernelGatewayAppSettings</a>

kernel_gateway_app_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#kernel_gateway_app_settings SagemakerUserProfile#kernel_gateway_app_settings}

---

##### `r_session_app_settings`<sup>Optional</sup> <a name="r_session_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.rSessionAppSettings"></a>

```python
r_session_app_settings: SagemakerUserProfileUserSettingsRSessionAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettings">SagemakerUserProfileUserSettingsRSessionAppSettings</a>

r_session_app_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#r_session_app_settings SagemakerUserProfile#r_session_app_settings}

---

##### `r_studio_server_pro_app_settings`<sup>Optional</sup> <a name="r_studio_server_pro_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.rStudioServerProAppSettings"></a>

```python
r_studio_server_pro_app_settings: SagemakerUserProfileUserSettingsRStudioServerProAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings">SagemakerUserProfileUserSettingsRStudioServerProAppSettings</a>

r_studio_server_pro_app_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#r_studio_server_pro_app_settings SagemakerUserProfile#r_studio_server_pro_app_settings}

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#security_groups SagemakerUserProfile#security_groups}.

---

##### `sharing_settings`<sup>Optional</sup> <a name="sharing_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.sharingSettings"></a>

```python
sharing_settings: SagemakerUserProfileUserSettingsSharingSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings">SagemakerUserProfileUserSettingsSharingSettings</a>

sharing_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sharing_settings SagemakerUserProfile#sharing_settings}

---

##### `space_storage_settings`<sup>Optional</sup> <a name="space_storage_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.spaceStorageSettings"></a>

```python
space_storage_settings: SagemakerUserProfileUserSettingsSpaceStorageSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettings</a>

space_storage_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#space_storage_settings SagemakerUserProfile#space_storage_settings}

---

##### `studio_web_portal`<sup>Optional</sup> <a name="studio_web_portal" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.studioWebPortal"></a>

```python
studio_web_portal: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#studio_web_portal SagemakerUserProfile#studio_web_portal}.

---

##### `tensor_board_app_settings`<sup>Optional</sup> <a name="tensor_board_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.tensorBoardAppSettings"></a>

```python
tensor_board_app_settings: SagemakerUserProfileUserSettingsTensorBoardAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettings">SagemakerUserProfileUserSettingsTensorBoardAppSettings</a>

tensor_board_app_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#tensor_board_app_settings SagemakerUserProfile#tensor_board_app_settings}

---

### SagemakerUserProfileUserSettingsCanvasAppSettings <a name="SagemakerUserProfileUserSettingsCanvasAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings(
  direct_deploy_settings: SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings = None,
  identity_provider_oauth_settings: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings]] = None,
  kendra_settings: SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings = None,
  model_register_settings: SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings = None,
  time_series_forecasting_settings: SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings = None,
  workspace_settings: SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings.property.directDeploySettings">direct_deploy_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings">SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings</a></code> | direct_deploy_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings.property.identityProviderOauthSettings">identity_provider_oauth_settings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings</a>]]</code> | identity_provider_oauth_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings.property.kendraSettings">kendra_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings</a></code> | kendra_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings.property.modelRegisterSettings">model_register_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings</a></code> | model_register_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings.property.timeSeriesForecastingSettings">time_series_forecasting_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings</a></code> | time_series_forecasting_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings.property.workspaceSettings">workspace_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings</a></code> | workspace_settings block. |

---

##### `direct_deploy_settings`<sup>Optional</sup> <a name="direct_deploy_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings.property.directDeploySettings"></a>

```python
direct_deploy_settings: SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings">SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings</a>

direct_deploy_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#direct_deploy_settings SagemakerUserProfile#direct_deploy_settings}

---

##### `identity_provider_oauth_settings`<sup>Optional</sup> <a name="identity_provider_oauth_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings.property.identityProviderOauthSettings"></a>

```python
identity_provider_oauth_settings: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings</a>]]

identity_provider_oauth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#identity_provider_oauth_settings SagemakerUserProfile#identity_provider_oauth_settings}

---

##### `kendra_settings`<sup>Optional</sup> <a name="kendra_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings.property.kendraSettings"></a>

```python
kendra_settings: SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings</a>

kendra_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#kendra_settings SagemakerUserProfile#kendra_settings}

---

##### `model_register_settings`<sup>Optional</sup> <a name="model_register_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings.property.modelRegisterSettings"></a>

```python
model_register_settings: SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings</a>

model_register_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#model_register_settings SagemakerUserProfile#model_register_settings}

---

##### `time_series_forecasting_settings`<sup>Optional</sup> <a name="time_series_forecasting_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings.property.timeSeriesForecastingSettings"></a>

```python
time_series_forecasting_settings: SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings</a>

time_series_forecasting_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#time_series_forecasting_settings SagemakerUserProfile#time_series_forecasting_settings}

---

##### `workspace_settings`<sup>Optional</sup> <a name="workspace_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings.property.workspaceSettings"></a>

```python
workspace_settings: SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings</a>

workspace_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#workspace_settings SagemakerUserProfile#workspace_settings}

---

### SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings <a name="SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings(
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#status SagemakerUserProfile#status}. |

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#status SagemakerUserProfile#status}.

---

### SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings <a name="SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings(
  secret_arn: str,
  data_source_name: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings.property.secretArn">secret_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#secret_arn SagemakerUserProfile#secret_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings.property.dataSourceName">data_source_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#data_source_name SagemakerUserProfile#data_source_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#status SagemakerUserProfile#status}. |

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#secret_arn SagemakerUserProfile#secret_arn}.

---

##### `data_source_name`<sup>Optional</sup> <a name="data_source_name" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings.property.dataSourceName"></a>

```python
data_source_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#data_source_name SagemakerUserProfile#data_source_name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#status SagemakerUserProfile#status}.

---

### SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings <a name="SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings(
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#status SagemakerUserProfile#status}. |

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#status SagemakerUserProfile#status}.

---

### SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings <a name="SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings(
  cross_account_model_register_role_arn: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings.property.crossAccountModelRegisterRoleArn">cross_account_model_register_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#cross_account_model_register_role_arn SagemakerUserProfile#cross_account_model_register_role_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#status SagemakerUserProfile#status}. |

---

##### `cross_account_model_register_role_arn`<sup>Optional</sup> <a name="cross_account_model_register_role_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings.property.crossAccountModelRegisterRoleArn"></a>

```python
cross_account_model_register_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#cross_account_model_register_role_arn SagemakerUserProfile#cross_account_model_register_role_arn}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#status SagemakerUserProfile#status}.

---

### SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings <a name="SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings(
  amazon_forecast_role_arn: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings.property.amazonForecastRoleArn">amazon_forecast_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#amazon_forecast_role_arn SagemakerUserProfile#amazon_forecast_role_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#status SagemakerUserProfile#status}. |

---

##### `amazon_forecast_role_arn`<sup>Optional</sup> <a name="amazon_forecast_role_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings.property.amazonForecastRoleArn"></a>

```python
amazon_forecast_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#amazon_forecast_role_arn SagemakerUserProfile#amazon_forecast_role_arn}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#status SagemakerUserProfile#status}.

---

### SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings <a name="SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings(
  s3_artifact_path: str = None,
  s3_kms_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings.property.s3ArtifactPath">s3_artifact_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#s3_artifact_path SagemakerUserProfile#s3_artifact_path}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings.property.s3KmsKeyId">s3_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#s3_kms_key_id SagemakerUserProfile#s3_kms_key_id}. |

---

##### `s3_artifact_path`<sup>Optional</sup> <a name="s3_artifact_path" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings.property.s3ArtifactPath"></a>

```python
s3_artifact_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#s3_artifact_path SagemakerUserProfile#s3_artifact_path}.

---

##### `s3_kms_key_id`<sup>Optional</sup> <a name="s3_kms_key_id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings.property.s3KmsKeyId"></a>

```python
s3_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#s3_kms_key_id SagemakerUserProfile#s3_kms_key_id}.

---

### SagemakerUserProfileUserSettingsCodeEditorAppSettings <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings(
  default_resource_spec: SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec = None,
  lifecycle_config_arns: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.defaultResourceSpec">default_resource_spec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec</a></code> | default_resource_spec block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.lifecycleConfigArns">lifecycle_config_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}. |

---

##### `default_resource_spec`<sup>Optional</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.defaultResourceSpec"></a>

```python
default_resource_spec: SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}

---

##### `lifecycle_config_arns`<sup>Optional</sup> <a name="lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.lifecycleConfigArns"></a>

```python
lifecycle_config_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}.

---

### SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec(
  instance_type: str = None,
  lifecycle_config_arn: str = None,
  sagemaker_image_arn: str = None,
  sagemaker_image_version_alias: str = None,
  sagemaker_image_version_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycle_config_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sagemakerImageArn">sagemaker_image_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sagemakerImageVersionAlias">sagemaker_image_version_alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias SagemakerUserProfile#sagemaker_image_version_alias}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn">sagemaker_image_version_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}. |

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}.

---

##### `lifecycle_config_arn`<sup>Optional</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```python
lifecycle_config_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}.

---

##### `sagemaker_image_arn`<sup>Optional</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sagemakerImageArn"></a>

```python
sagemaker_image_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}.

---

##### `sagemaker_image_version_alias`<sup>Optional</sup> <a name="sagemaker_image_version_alias" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sagemakerImageVersionAlias"></a>

```python
sagemaker_image_version_alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias SagemakerUserProfile#sagemaker_image_version_alias}.

---

##### `sagemaker_image_version_arn`<sup>Optional</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn"></a>

```python
sagemaker_image_version_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}.

---

### SagemakerUserProfileUserSettingsCustomFileSystemConfig <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfig" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfig(
  efs_file_system_config: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfig.property.efsFileSystemConfig">efs_file_system_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig</a>]]</code> | efs_file_system_config block. |

---

##### `efs_file_system_config`<sup>Optional</sup> <a name="efs_file_system_config" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfig.property.efsFileSystemConfig"></a>

```python
efs_file_system_config: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig</a>]]

efs_file_system_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#efs_file_system_config SagemakerUserProfile#efs_file_system_config}

---

### SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig(
  file_system_id: str,
  file_system_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig.property.fileSystemId">file_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#file_system_id SagemakerUserProfile#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig.property.fileSystemPath">file_system_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#file_system_path SagemakerUserProfile#file_system_path}. |

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#file_system_id SagemakerUserProfile#file_system_id}.

---

##### `file_system_path`<sup>Optional</sup> <a name="file_system_path" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig.property.fileSystemPath"></a>

```python
file_system_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#file_system_path SagemakerUserProfile#file_system_path}.

---

### SagemakerUserProfileUserSettingsCustomPosixUserConfig <a name="SagemakerUserProfileUserSettingsCustomPosixUserConfig" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig(
  gid: typing.Union[int, float],
  uid: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig.property.gid">gid</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#gid SagemakerUserProfile#gid}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig.property.uid">uid</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#uid SagemakerUserProfile#uid}. |

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig.property.gid"></a>

```python
gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#gid SagemakerUserProfile#gid}.

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig.property.uid"></a>

```python
uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#uid SagemakerUserProfile#uid}.

---

### SagemakerUserProfileUserSettingsJupyterLabAppSettings <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings(
  code_repository: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository]] = None,
  custom_image: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage]] = None,
  default_resource_spec: SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec = None,
  lifecycle_config_arns: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.codeRepository">code_repository</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository</a>]]</code> | code_repository block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.customImage">custom_image</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage</a>]]</code> | custom_image block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.defaultResourceSpec">default_resource_spec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec</a></code> | default_resource_spec block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.lifecycleConfigArns">lifecycle_config_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}. |

---

##### `code_repository`<sup>Optional</sup> <a name="code_repository" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.codeRepository"></a>

```python
code_repository: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository</a>]]

code_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#code_repository SagemakerUserProfile#code_repository}

---

##### `custom_image`<sup>Optional</sup> <a name="custom_image" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.customImage"></a>

```python
custom_image: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage</a>]]

custom_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#custom_image SagemakerUserProfile#custom_image}

---

##### `default_resource_spec`<sup>Optional</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.defaultResourceSpec"></a>

```python
default_resource_spec: SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}

---

##### `lifecycle_config_arns`<sup>Optional</sup> <a name="lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.lifecycleConfigArns"></a>

```python
lifecycle_config_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}.

---

### SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository(
  repository_url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository.property.repositoryUrl">repository_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#repository_url SagemakerUserProfile#repository_url}. |

---

##### `repository_url`<sup>Required</sup> <a name="repository_url" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository.property.repositoryUrl"></a>

```python
repository_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#repository_url SagemakerUserProfile#repository_url}.

---

### SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage(
  app_image_config_name: str,
  image_name: str,
  image_version_number: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage.property.appImageConfigName">app_image_config_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#app_image_config_name SagemakerUserProfile#app_image_config_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage.property.imageName">image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#image_name SagemakerUserProfile#image_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage.property.imageVersionNumber">image_version_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#image_version_number SagemakerUserProfile#image_version_number}. |

---

##### `app_image_config_name`<sup>Required</sup> <a name="app_image_config_name" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage.property.appImageConfigName"></a>

```python
app_image_config_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#app_image_config_name SagemakerUserProfile#app_image_config_name}.

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#image_name SagemakerUserProfile#image_name}.

---

##### `image_version_number`<sup>Optional</sup> <a name="image_version_number" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage.property.imageVersionNumber"></a>

```python
image_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#image_version_number SagemakerUserProfile#image_version_number}.

---

### SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec(
  instance_type: str = None,
  lifecycle_config_arn: str = None,
  sagemaker_image_arn: str = None,
  sagemaker_image_version_alias: str = None,
  sagemaker_image_version_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycle_config_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sagemakerImageArn">sagemaker_image_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sagemakerImageVersionAlias">sagemaker_image_version_alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias SagemakerUserProfile#sagemaker_image_version_alias}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn">sagemaker_image_version_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}. |

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}.

---

##### `lifecycle_config_arn`<sup>Optional</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```python
lifecycle_config_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}.

---

##### `sagemaker_image_arn`<sup>Optional</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sagemakerImageArn"></a>

```python
sagemaker_image_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}.

---

##### `sagemaker_image_version_alias`<sup>Optional</sup> <a name="sagemaker_image_version_alias" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sagemakerImageVersionAlias"></a>

```python
sagemaker_image_version_alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias SagemakerUserProfile#sagemaker_image_version_alias}.

---

##### `sagemaker_image_version_arn`<sup>Optional</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn"></a>

```python
sagemaker_image_version_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}.

---

### SagemakerUserProfileUserSettingsJupyterServerAppSettings <a name="SagemakerUserProfileUserSettingsJupyterServerAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings(
  code_repository: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository]] = None,
  default_resource_spec: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec = None,
  lifecycle_config_arns: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings.property.codeRepository">code_repository</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository">SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository</a>]]</code> | code_repository block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings.property.defaultResourceSpec">default_resource_spec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | default_resource_spec block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings.property.lifecycleConfigArns">lifecycle_config_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}. |

---

##### `code_repository`<sup>Optional</sup> <a name="code_repository" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings.property.codeRepository"></a>

```python
code_repository: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository">SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository</a>]]

code_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#code_repository SagemakerUserProfile#code_repository}

---

##### `default_resource_spec`<sup>Optional</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings.property.defaultResourceSpec"></a>

```python
default_resource_spec: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}

---

##### `lifecycle_config_arns`<sup>Optional</sup> <a name="lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings.property.lifecycleConfigArns"></a>

```python
lifecycle_config_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}.

---

### SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository <a name="SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository(
  repository_url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository.property.repositoryUrl">repository_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#repository_url SagemakerUserProfile#repository_url}. |

---

##### `repository_url`<sup>Required</sup> <a name="repository_url" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository.property.repositoryUrl"></a>

```python
repository_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#repository_url SagemakerUserProfile#repository_url}.

---

### SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec <a name="SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec(
  instance_type: str = None,
  lifecycle_config_arn: str = None,
  sagemaker_image_arn: str = None,
  sagemaker_image_version_alias: str = None,
  sagemaker_image_version_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycle_config_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageArn">sagemaker_image_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageVersionAlias">sagemaker_image_version_alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias SagemakerUserProfile#sagemaker_image_version_alias}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn">sagemaker_image_version_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}. |

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}.

---

##### `lifecycle_config_arn`<sup>Optional</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```python
lifecycle_config_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}.

---

##### `sagemaker_image_arn`<sup>Optional</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageArn"></a>

```python
sagemaker_image_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}.

---

##### `sagemaker_image_version_alias`<sup>Optional</sup> <a name="sagemaker_image_version_alias" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageVersionAlias"></a>

```python
sagemaker_image_version_alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias SagemakerUserProfile#sagemaker_image_version_alias}.

---

##### `sagemaker_image_version_arn`<sup>Optional</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn"></a>

```python
sagemaker_image_version_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}.

---

### SagemakerUserProfileUserSettingsKernelGatewayAppSettings <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings(
  custom_image: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage]] = None,
  default_resource_spec: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec = None,
  lifecycle_config_arns: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.property.customImage">custom_image</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage</a>]]</code> | custom_image block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.property.defaultResourceSpec">default_resource_spec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | default_resource_spec block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.property.lifecycleConfigArns">lifecycle_config_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}. |

---

##### `custom_image`<sup>Optional</sup> <a name="custom_image" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.property.customImage"></a>

```python
custom_image: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage</a>]]

custom_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#custom_image SagemakerUserProfile#custom_image}

---

##### `default_resource_spec`<sup>Optional</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.property.defaultResourceSpec"></a>

```python
default_resource_spec: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}

---

##### `lifecycle_config_arns`<sup>Optional</sup> <a name="lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.property.lifecycleConfigArns"></a>

```python
lifecycle_config_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}.

---

### SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage(
  app_image_config_name: str,
  image_name: str,
  image_version_number: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage.property.appImageConfigName">app_image_config_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#app_image_config_name SagemakerUserProfile#app_image_config_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage.property.imageName">image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#image_name SagemakerUserProfile#image_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage.property.imageVersionNumber">image_version_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#image_version_number SagemakerUserProfile#image_version_number}. |

---

##### `app_image_config_name`<sup>Required</sup> <a name="app_image_config_name" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage.property.appImageConfigName"></a>

```python
app_image_config_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#app_image_config_name SagemakerUserProfile#app_image_config_name}.

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#image_name SagemakerUserProfile#image_name}.

---

##### `image_version_number`<sup>Optional</sup> <a name="image_version_number" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage.property.imageVersionNumber"></a>

```python
image_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#image_version_number SagemakerUserProfile#image_version_number}.

---

### SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec(
  instance_type: str = None,
  lifecycle_config_arn: str = None,
  sagemaker_image_arn: str = None,
  sagemaker_image_version_alias: str = None,
  sagemaker_image_version_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycle_config_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageArn">sagemaker_image_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageVersionAlias">sagemaker_image_version_alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias SagemakerUserProfile#sagemaker_image_version_alias}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn">sagemaker_image_version_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}. |

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}.

---

##### `lifecycle_config_arn`<sup>Optional</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```python
lifecycle_config_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}.

---

##### `sagemaker_image_arn`<sup>Optional</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageArn"></a>

```python
sagemaker_image_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}.

---

##### `sagemaker_image_version_alias`<sup>Optional</sup> <a name="sagemaker_image_version_alias" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageVersionAlias"></a>

```python
sagemaker_image_version_alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias SagemakerUserProfile#sagemaker_image_version_alias}.

---

##### `sagemaker_image_version_arn`<sup>Optional</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn"></a>

```python
sagemaker_image_version_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}.

---

### SagemakerUserProfileUserSettingsRSessionAppSettings <a name="SagemakerUserProfileUserSettingsRSessionAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettings(
  custom_image: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage]] = None,
  default_resource_spec: SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettings.property.customImage">custom_image</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage">SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage</a>]]</code> | custom_image block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettings.property.defaultResourceSpec">default_resource_spec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec</a></code> | default_resource_spec block. |

---

##### `custom_image`<sup>Optional</sup> <a name="custom_image" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettings.property.customImage"></a>

```python
custom_image: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage">SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage</a>]]

custom_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#custom_image SagemakerUserProfile#custom_image}

---

##### `default_resource_spec`<sup>Optional</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettings.property.defaultResourceSpec"></a>

```python
default_resource_spec: SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}

---

### SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage <a name="SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage(
  app_image_config_name: str,
  image_name: str,
  image_version_number: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage.property.appImageConfigName">app_image_config_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#app_image_config_name SagemakerUserProfile#app_image_config_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage.property.imageName">image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#image_name SagemakerUserProfile#image_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage.property.imageVersionNumber">image_version_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#image_version_number SagemakerUserProfile#image_version_number}. |

---

##### `app_image_config_name`<sup>Required</sup> <a name="app_image_config_name" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage.property.appImageConfigName"></a>

```python
app_image_config_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#app_image_config_name SagemakerUserProfile#app_image_config_name}.

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#image_name SagemakerUserProfile#image_name}.

---

##### `image_version_number`<sup>Optional</sup> <a name="image_version_number" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage.property.imageVersionNumber"></a>

```python
image_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#image_version_number SagemakerUserProfile#image_version_number}.

---

### SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec <a name="SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec(
  instance_type: str = None,
  lifecycle_config_arn: str = None,
  sagemaker_image_arn: str = None,
  sagemaker_image_version_alias: str = None,
  sagemaker_image_version_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycle_config_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec.property.sagemakerImageArn">sagemaker_image_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec.property.sagemakerImageVersionAlias">sagemaker_image_version_alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias SagemakerUserProfile#sagemaker_image_version_alias}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn">sagemaker_image_version_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}. |

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}.

---

##### `lifecycle_config_arn`<sup>Optional</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```python
lifecycle_config_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}.

---

##### `sagemaker_image_arn`<sup>Optional</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec.property.sagemakerImageArn"></a>

```python
sagemaker_image_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}.

---

##### `sagemaker_image_version_alias`<sup>Optional</sup> <a name="sagemaker_image_version_alias" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec.property.sagemakerImageVersionAlias"></a>

```python
sagemaker_image_version_alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias SagemakerUserProfile#sagemaker_image_version_alias}.

---

##### `sagemaker_image_version_arn`<sup>Optional</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn"></a>

```python
sagemaker_image_version_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}.

---

### SagemakerUserProfileUserSettingsRStudioServerProAppSettings <a name="SagemakerUserProfileUserSettingsRStudioServerProAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings(
  access_status: str = None,
  user_group: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings.property.accessStatus">access_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#access_status SagemakerUserProfile#access_status}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings.property.userGroup">user_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#user_group SagemakerUserProfile#user_group}. |

---

##### `access_status`<sup>Optional</sup> <a name="access_status" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings.property.accessStatus"></a>

```python
access_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#access_status SagemakerUserProfile#access_status}.

---

##### `user_group`<sup>Optional</sup> <a name="user_group" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings.property.userGroup"></a>

```python
user_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#user_group SagemakerUserProfile#user_group}.

---

### SagemakerUserProfileUserSettingsSharingSettings <a name="SagemakerUserProfileUserSettingsSharingSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings(
  notebook_output_option: str = None,
  s3_kms_key_id: str = None,
  s3_output_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.property.notebookOutputOption">notebook_output_option</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#notebook_output_option SagemakerUserProfile#notebook_output_option}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.property.s3KmsKeyId">s3_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#s3_kms_key_id SagemakerUserProfile#s3_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.property.s3OutputPath">s3_output_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#s3_output_path SagemakerUserProfile#s3_output_path}. |

---

##### `notebook_output_option`<sup>Optional</sup> <a name="notebook_output_option" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.property.notebookOutputOption"></a>

```python
notebook_output_option: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#notebook_output_option SagemakerUserProfile#notebook_output_option}.

---

##### `s3_kms_key_id`<sup>Optional</sup> <a name="s3_kms_key_id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.property.s3KmsKeyId"></a>

```python
s3_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#s3_kms_key_id SagemakerUserProfile#s3_kms_key_id}.

---

##### `s3_output_path`<sup>Optional</sup> <a name="s3_output_path" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.property.s3OutputPath"></a>

```python
s3_output_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#s3_output_path SagemakerUserProfile#s3_output_path}.

---

### SagemakerUserProfileUserSettingsSpaceStorageSettings <a name="SagemakerUserProfileUserSettingsSpaceStorageSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings(
  default_ebs_storage_settings: SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings.property.defaultEbsStorageSettings">default_ebs_storage_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings</a></code> | default_ebs_storage_settings block. |

---

##### `default_ebs_storage_settings`<sup>Optional</sup> <a name="default_ebs_storage_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings.property.defaultEbsStorageSettings"></a>

```python
default_ebs_storage_settings: SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings</a>

default_ebs_storage_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#default_ebs_storage_settings SagemakerUserProfile#default_ebs_storage_settings}

---

### SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings <a name="SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings(
  default_ebs_volume_size_in_gb: typing.Union[int, float],
  maximum_ebs_volume_size_in_gb: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings.property.defaultEbsVolumeSizeInGb">default_ebs_volume_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#default_ebs_volume_size_in_gb SagemakerUserProfile#default_ebs_volume_size_in_gb}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings.property.maximumEbsVolumeSizeInGb">maximum_ebs_volume_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#maximum_ebs_volume_size_in_gb SagemakerUserProfile#maximum_ebs_volume_size_in_gb}. |

---

##### `default_ebs_volume_size_in_gb`<sup>Required</sup> <a name="default_ebs_volume_size_in_gb" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings.property.defaultEbsVolumeSizeInGb"></a>

```python
default_ebs_volume_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#default_ebs_volume_size_in_gb SagemakerUserProfile#default_ebs_volume_size_in_gb}.

---

##### `maximum_ebs_volume_size_in_gb`<sup>Required</sup> <a name="maximum_ebs_volume_size_in_gb" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings.property.maximumEbsVolumeSizeInGb"></a>

```python
maximum_ebs_volume_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#maximum_ebs_volume_size_in_gb SagemakerUserProfile#maximum_ebs_volume_size_in_gb}.

---

### SagemakerUserProfileUserSettingsTensorBoardAppSettings <a name="SagemakerUserProfileUserSettingsTensorBoardAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettings(
  default_resource_spec: SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettings.property.defaultResourceSpec">default_resource_spec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec</a></code> | default_resource_spec block. |

---

##### `default_resource_spec`<sup>Optional</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettings.property.defaultResourceSpec"></a>

```python
default_resource_spec: SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}

---

### SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec <a name="SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec(
  instance_type: str = None,
  lifecycle_config_arn: str = None,
  sagemaker_image_arn: str = None,
  sagemaker_image_version_alias: str = None,
  sagemaker_image_version_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycle_config_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.sagemakerImageArn">sagemaker_image_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.sagemakerImageVersionAlias">sagemaker_image_version_alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias SagemakerUserProfile#sagemaker_image_version_alias}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn">sagemaker_image_version_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}. |

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}.

---

##### `lifecycle_config_arn`<sup>Optional</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```python
lifecycle_config_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}.

---

##### `sagemaker_image_arn`<sup>Optional</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.sagemakerImageArn"></a>

```python
sagemaker_image_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}.

---

##### `sagemaker_image_version_alias`<sup>Optional</sup> <a name="sagemaker_image_version_alias" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.sagemakerImageVersionAlias"></a>

```python
sagemaker_image_version_alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias SagemakerUserProfile#sagemaker_image_version_alias}.

---

##### `sagemaker_image_version_arn`<sup>Optional</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn"></a>

```python
sagemaker_image_version_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference <a name="SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_status` <a name="reset_status" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings">SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings">SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings</a>

---


### SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList <a name="SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings</a>]]

---


### SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference <a name="SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.resetDataSourceName">reset_data_source_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_source_name` <a name="reset_data_source_name" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.resetDataSourceName"></a>

```python
def reset_data_source_name() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.property.dataSourceNameInput">data_source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.property.dataSourceName">data_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_source_name_input`<sup>Optional</sup> <a name="data_source_name_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.property.dataSourceNameInput"></a>

```python
data_source_name_input: str
```

- *Type:* str

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `data_source_name`<sup>Required</sup> <a name="data_source_name" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.property.dataSourceName"></a>

```python
data_source_name: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings</a>]

---


### SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference <a name="SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_status` <a name="reset_status" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings</a>

---


### SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference <a name="SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.resetCrossAccountModelRegisterRoleArn">reset_cross_account_model_register_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cross_account_model_register_role_arn` <a name="reset_cross_account_model_register_role_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.resetCrossAccountModelRegisterRoleArn"></a>

```python
def reset_cross_account_model_register_role_arn() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.property.crossAccountModelRegisterRoleArnInput">cross_account_model_register_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.property.crossAccountModelRegisterRoleArn">cross_account_model_register_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cross_account_model_register_role_arn_input`<sup>Optional</sup> <a name="cross_account_model_register_role_arn_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.property.crossAccountModelRegisterRoleArnInput"></a>

```python
cross_account_model_register_role_arn_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `cross_account_model_register_role_arn`<sup>Required</sup> <a name="cross_account_model_register_role_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.property.crossAccountModelRegisterRoleArn"></a>

```python
cross_account_model_register_role_arn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings</a>

---


### SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference <a name="SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.putDirectDeploySettings">put_direct_deploy_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.putIdentityProviderOauthSettings">put_identity_provider_oauth_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.putKendraSettings">put_kendra_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.putModelRegisterSettings">put_model_register_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.putTimeSeriesForecastingSettings">put_time_series_forecasting_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.putWorkspaceSettings">put_workspace_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.resetDirectDeploySettings">reset_direct_deploy_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.resetIdentityProviderOauthSettings">reset_identity_provider_oauth_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.resetKendraSettings">reset_kendra_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.resetModelRegisterSettings">reset_model_register_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.resetTimeSeriesForecastingSettings">reset_time_series_forecasting_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.resetWorkspaceSettings">reset_workspace_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_direct_deploy_settings` <a name="put_direct_deploy_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.putDirectDeploySettings"></a>

```python
def put_direct_deploy_settings(
  status: str = None
) -> None
```

###### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.putDirectDeploySettings.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#status SagemakerUserProfile#status}.

---

##### `put_identity_provider_oauth_settings` <a name="put_identity_provider_oauth_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.putIdentityProviderOauthSettings"></a>

```python
def put_identity_provider_oauth_settings(
  value: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.putIdentityProviderOauthSettings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings</a>]]

---

##### `put_kendra_settings` <a name="put_kendra_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.putKendraSettings"></a>

```python
def put_kendra_settings(
  status: str = None
) -> None
```

###### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.putKendraSettings.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#status SagemakerUserProfile#status}.

---

##### `put_model_register_settings` <a name="put_model_register_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.putModelRegisterSettings"></a>

```python
def put_model_register_settings(
  cross_account_model_register_role_arn: str = None,
  status: str = None
) -> None
```

###### `cross_account_model_register_role_arn`<sup>Optional</sup> <a name="cross_account_model_register_role_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.putModelRegisterSettings.parameter.crossAccountModelRegisterRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#cross_account_model_register_role_arn SagemakerUserProfile#cross_account_model_register_role_arn}.

---

###### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.putModelRegisterSettings.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#status SagemakerUserProfile#status}.

---

##### `put_time_series_forecasting_settings` <a name="put_time_series_forecasting_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.putTimeSeriesForecastingSettings"></a>

```python
def put_time_series_forecasting_settings(
  amazon_forecast_role_arn: str = None,
  status: str = None
) -> None
```

###### `amazon_forecast_role_arn`<sup>Optional</sup> <a name="amazon_forecast_role_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.putTimeSeriesForecastingSettings.parameter.amazonForecastRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#amazon_forecast_role_arn SagemakerUserProfile#amazon_forecast_role_arn}.

---

###### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.putTimeSeriesForecastingSettings.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#status SagemakerUserProfile#status}.

---

##### `put_workspace_settings` <a name="put_workspace_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.putWorkspaceSettings"></a>

```python
def put_workspace_settings(
  s3_artifact_path: str = None,
  s3_kms_key_id: str = None
) -> None
```

###### `s3_artifact_path`<sup>Optional</sup> <a name="s3_artifact_path" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.putWorkspaceSettings.parameter.s3ArtifactPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#s3_artifact_path SagemakerUserProfile#s3_artifact_path}.

---

###### `s3_kms_key_id`<sup>Optional</sup> <a name="s3_kms_key_id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.putWorkspaceSettings.parameter.s3KmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#s3_kms_key_id SagemakerUserProfile#s3_kms_key_id}.

---

##### `reset_direct_deploy_settings` <a name="reset_direct_deploy_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.resetDirectDeploySettings"></a>

```python
def reset_direct_deploy_settings() -> None
```

##### `reset_identity_provider_oauth_settings` <a name="reset_identity_provider_oauth_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.resetIdentityProviderOauthSettings"></a>

```python
def reset_identity_provider_oauth_settings() -> None
```

##### `reset_kendra_settings` <a name="reset_kendra_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.resetKendraSettings"></a>

```python
def reset_kendra_settings() -> None
```

##### `reset_model_register_settings` <a name="reset_model_register_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.resetModelRegisterSettings"></a>

```python
def reset_model_register_settings() -> None
```

##### `reset_time_series_forecasting_settings` <a name="reset_time_series_forecasting_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.resetTimeSeriesForecastingSettings"></a>

```python
def reset_time_series_forecasting_settings() -> None
```

##### `reset_workspace_settings` <a name="reset_workspace_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.resetWorkspaceSettings"></a>

```python
def reset_workspace_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.directDeploySettings">direct_deploy_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference">SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.identityProviderOauthSettings">identity_provider_oauth_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList">SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.kendraSettings">kendra_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference">SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.modelRegisterSettings">model_register_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference">SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.timeSeriesForecastingSettings">time_series_forecasting_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference">SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.workspaceSettings">workspace_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference">SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.directDeploySettingsInput">direct_deploy_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings">SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.identityProviderOauthSettingsInput">identity_provider_oauth_settings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.kendraSettingsInput">kendra_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.modelRegisterSettingsInput">model_register_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.timeSeriesForecastingSettingsInput">time_series_forecasting_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.workspaceSettingsInput">workspace_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings">SagemakerUserProfileUserSettingsCanvasAppSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direct_deploy_settings`<sup>Required</sup> <a name="direct_deploy_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.directDeploySettings"></a>

```python
direct_deploy_settings: SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference">SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference</a>

---

##### `identity_provider_oauth_settings`<sup>Required</sup> <a name="identity_provider_oauth_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.identityProviderOauthSettings"></a>

```python
identity_provider_oauth_settings: SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList">SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList</a>

---

##### `kendra_settings`<sup>Required</sup> <a name="kendra_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.kendraSettings"></a>

```python
kendra_settings: SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference">SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference</a>

---

##### `model_register_settings`<sup>Required</sup> <a name="model_register_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.modelRegisterSettings"></a>

```python
model_register_settings: SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference">SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference</a>

---

##### `time_series_forecasting_settings`<sup>Required</sup> <a name="time_series_forecasting_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.timeSeriesForecastingSettings"></a>

```python
time_series_forecasting_settings: SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference">SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference</a>

---

##### `workspace_settings`<sup>Required</sup> <a name="workspace_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.workspaceSettings"></a>

```python
workspace_settings: SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference">SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference</a>

---

##### `direct_deploy_settings_input`<sup>Optional</sup> <a name="direct_deploy_settings_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.directDeploySettingsInput"></a>

```python
direct_deploy_settings_input: SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings">SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings</a>

---

##### `identity_provider_oauth_settings_input`<sup>Optional</sup> <a name="identity_provider_oauth_settings_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.identityProviderOauthSettingsInput"></a>

```python
identity_provider_oauth_settings_input: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings</a>]]

---

##### `kendra_settings_input`<sup>Optional</sup> <a name="kendra_settings_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.kendraSettingsInput"></a>

```python
kendra_settings_input: SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings</a>

---

##### `model_register_settings_input`<sup>Optional</sup> <a name="model_register_settings_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.modelRegisterSettingsInput"></a>

```python
model_register_settings_input: SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings</a>

---

##### `time_series_forecasting_settings_input`<sup>Optional</sup> <a name="time_series_forecasting_settings_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.timeSeriesForecastingSettingsInput"></a>

```python
time_series_forecasting_settings_input: SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings</a>

---

##### `workspace_settings_input`<sup>Optional</sup> <a name="workspace_settings_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.workspaceSettingsInput"></a>

```python
workspace_settings_input: SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerUserProfileUserSettingsCanvasAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings">SagemakerUserProfileUserSettingsCanvasAppSettings</a>

---


### SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference <a name="SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.resetAmazonForecastRoleArn">reset_amazon_forecast_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_amazon_forecast_role_arn` <a name="reset_amazon_forecast_role_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.resetAmazonForecastRoleArn"></a>

```python
def reset_amazon_forecast_role_arn() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.amazonForecastRoleArnInput">amazon_forecast_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.amazonForecastRoleArn">amazon_forecast_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amazon_forecast_role_arn_input`<sup>Optional</sup> <a name="amazon_forecast_role_arn_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.amazonForecastRoleArnInput"></a>

```python
amazon_forecast_role_arn_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `amazon_forecast_role_arn`<sup>Required</sup> <a name="amazon_forecast_role_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.amazonForecastRoleArn"></a>

```python
amazon_forecast_role_arn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings</a>

---


### SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference <a name="SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.resetS3ArtifactPath">reset_s3_artifact_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.resetS3KmsKeyId">reset_s3_kms_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_artifact_path` <a name="reset_s3_artifact_path" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.resetS3ArtifactPath"></a>

```python
def reset_s3_artifact_path() -> None
```

##### `reset_s3_kms_key_id` <a name="reset_s3_kms_key_id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.resetS3KmsKeyId"></a>

```python
def reset_s3_kms_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.property.s3ArtifactPathInput">s3_artifact_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.property.s3KmsKeyIdInput">s3_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.property.s3ArtifactPath">s3_artifact_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.property.s3KmsKeyId">s3_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_artifact_path_input`<sup>Optional</sup> <a name="s3_artifact_path_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.property.s3ArtifactPathInput"></a>

```python
s3_artifact_path_input: str
```

- *Type:* str

---

##### `s3_kms_key_id_input`<sup>Optional</sup> <a name="s3_kms_key_id_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.property.s3KmsKeyIdInput"></a>

```python
s3_kms_key_id_input: str
```

- *Type:* str

---

##### `s3_artifact_path`<sup>Required</sup> <a name="s3_artifact_path" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.property.s3ArtifactPath"></a>

```python
s3_artifact_path: str
```

- *Type:* str

---

##### `s3_kms_key_id`<sup>Required</sup> <a name="s3_kms_key_id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.property.s3KmsKeyId"></a>

```python
s3_kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings</a>

---


### SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">reset_lifecycle_config_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn">reset_sagemaker_image_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionAlias">reset_sagemaker_image_version_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn">reset_sagemaker_image_version_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_lifecycle_config_arn` <a name="reset_lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```python
def reset_lifecycle_config_arn() -> None
```

##### `reset_sagemaker_image_arn` <a name="reset_sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn"></a>

```python
def reset_sagemaker_image_arn() -> None
```

##### `reset_sagemaker_image_version_alias` <a name="reset_sagemaker_image_version_alias" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionAlias"></a>

```python
def reset_sagemaker_image_version_alias() -> None
```

##### `reset_sagemaker_image_version_arn` <a name="reset_sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```python
def reset_sagemaker_image_version_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycle_config_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput">sagemaker_image_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAliasInput">sagemaker_image_version_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput">sagemaker_image_version_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycle_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn">sagemaker_image_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAlias">sagemaker_image_version_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn">sagemaker_image_version_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `lifecycle_config_arn_input`<sup>Optional</sup> <a name="lifecycle_config_arn_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```python
lifecycle_config_arn_input: str
```

- *Type:* str

---

##### `sagemaker_image_arn_input`<sup>Optional</sup> <a name="sagemaker_image_arn_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```python
sagemaker_image_arn_input: str
```

- *Type:* str

---

##### `sagemaker_image_version_alias_input`<sup>Optional</sup> <a name="sagemaker_image_version_alias_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAliasInput"></a>

```python
sagemaker_image_version_alias_input: str
```

- *Type:* str

---

##### `sagemaker_image_version_arn_input`<sup>Optional</sup> <a name="sagemaker_image_version_arn_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```python
sagemaker_image_version_arn_input: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `lifecycle_config_arn`<sup>Required</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```python
lifecycle_config_arn: str
```

- *Type:* str

---

##### `sagemaker_image_arn`<sup>Required</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn"></a>

```python
sagemaker_image_arn: str
```

- *Type:* str

---

##### `sagemaker_image_version_alias`<sup>Required</sup> <a name="sagemaker_image_version_alias" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAlias"></a>

```python
sagemaker_image_version_alias: str
```

- *Type:* str

---

##### `sagemaker_image_version_arn`<sup>Required</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```python
sagemaker_image_version_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

---


### SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putDefaultResourceSpec">put_default_resource_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetDefaultResourceSpec">reset_default_resource_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetLifecycleConfigArns">reset_lifecycle_config_arns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_default_resource_spec` <a name="put_default_resource_spec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putDefaultResourceSpec"></a>

```python
def put_default_resource_spec(
  instance_type: str = None,
  lifecycle_config_arn: str = None,
  sagemaker_image_arn: str = None,
  sagemaker_image_version_alias: str = None,
  sagemaker_image_version_arn: str = None
) -> None
```

###### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putDefaultResourceSpec.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}.

---

###### `lifecycle_config_arn`<sup>Optional</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putDefaultResourceSpec.parameter.lifecycleConfigArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}.

---

###### `sagemaker_image_arn`<sup>Optional</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putDefaultResourceSpec.parameter.sagemakerImageArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}.

---

###### `sagemaker_image_version_alias`<sup>Optional</sup> <a name="sagemaker_image_version_alias" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putDefaultResourceSpec.parameter.sagemakerImageVersionAlias"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias SagemakerUserProfile#sagemaker_image_version_alias}.

---

###### `sagemaker_image_version_arn`<sup>Optional</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putDefaultResourceSpec.parameter.sagemakerImageVersionArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}.

---

##### `reset_default_resource_spec` <a name="reset_default_resource_spec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```python
def reset_default_resource_spec() -> None
```

##### `reset_lifecycle_config_arns` <a name="reset_lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```python
def reset_lifecycle_config_arns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpec">default_resource_spec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpecInput">default_resource_spec_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.lifecycleConfigArnsInput">lifecycle_config_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.lifecycleConfigArns">lifecycle_config_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_resource_spec`<sup>Required</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpec"></a>

```python
default_resource_spec: SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `default_resource_spec_input`<sup>Optional</sup> <a name="default_resource_spec_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```python
default_resource_spec_input: SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

---

##### `lifecycle_config_arns_input`<sup>Optional</sup> <a name="lifecycle_config_arns_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```python
lifecycle_config_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lifecycle_config_arns`<sup>Required</sup> <a name="lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```python
lifecycle_config_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerUserProfileUserSettingsCodeEditorAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettings</a>

---


### SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig</a>]]

---


### SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.resetFileSystemPath">reset_file_system_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_system_path` <a name="reset_file_system_path" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.resetFileSystemPath"></a>

```python
def reset_file_system_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.property.fileSystemIdInput">file_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.property.fileSystemPathInput">file_system_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.property.fileSystemPath">file_system_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_system_id_input`<sup>Optional</sup> <a name="file_system_id_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.property.fileSystemIdInput"></a>

```python
file_system_id_input: str
```

- *Type:* str

---

##### `file_system_path_input`<sup>Optional</sup> <a name="file_system_path_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.property.fileSystemPathInput"></a>

```python
file_system_path_input: str
```

- *Type:* str

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

##### `file_system_path`<sup>Required</sup> <a name="file_system_path" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.property.fileSystemPath"></a>

```python
file_system_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig</a>]

---


### SagemakerUserProfileUserSettingsCustomFileSystemConfigList <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigList" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsCustomFileSystemConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfig</a>]]

---


### SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.putEfsFileSystemConfig">put_efs_file_system_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.resetEfsFileSystemConfig">reset_efs_file_system_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_efs_file_system_config` <a name="put_efs_file_system_config" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.putEfsFileSystemConfig"></a>

```python
def put_efs_file_system_config(
  value: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.putEfsFileSystemConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig</a>]]

---

##### `reset_efs_file_system_config` <a name="reset_efs_file_system_config" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.resetEfsFileSystemConfig"></a>

```python
def reset_efs_file_system_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.property.efsFileSystemConfig">efs_file_system_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList">SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.property.efsFileSystemConfigInput">efs_file_system_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `efs_file_system_config`<sup>Required</sup> <a name="efs_file_system_config" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.property.efsFileSystemConfig"></a>

```python
efs_file_system_config: SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList">SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList</a>

---

##### `efs_file_system_config_input`<sup>Optional</sup> <a name="efs_file_system_config_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.property.efsFileSystemConfigInput"></a>

```python
efs_file_system_config_input: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SagemakerUserProfileUserSettingsCustomFileSystemConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfig</a>]

---


### SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference <a name="SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.gidInput">gid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.uidInput">uid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.gid">gid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.uid">uid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig">SagemakerUserProfileUserSettingsCustomPosixUserConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gid_input`<sup>Optional</sup> <a name="gid_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.gidInput"></a>

```python
gid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uid_input`<sup>Optional</sup> <a name="uid_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.uidInput"></a>

```python
uid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.gid"></a>

```python
gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.uid"></a>

```python
uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerUserProfileUserSettingsCustomPosixUserConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig">SagemakerUserProfileUserSettingsCustomPosixUserConfig</a>

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository</a>]]

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.property.repositoryUrlInput">repository_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.property.repositoryUrl">repository_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_url_input`<sup>Optional</sup> <a name="repository_url_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.property.repositoryUrlInput"></a>

```python
repository_url_input: str
```

- *Type:* str

---

##### `repository_url`<sup>Required</sup> <a name="repository_url" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.property.repositoryUrl"></a>

```python
repository_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository</a>]

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage</a>]]

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.resetImageVersionNumber">reset_image_version_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_image_version_number` <a name="reset_image_version_number" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.resetImageVersionNumber"></a>

```python
def reset_image_version_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.property.appImageConfigNameInput">app_image_config_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.property.imageNameInput">image_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.property.imageVersionNumberInput">image_version_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.property.appImageConfigName">app_image_config_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.property.imageVersionNumber">image_version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_image_config_name_input`<sup>Optional</sup> <a name="app_image_config_name_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.property.appImageConfigNameInput"></a>

```python
app_image_config_name_input: str
```

- *Type:* str

---

##### `image_name_input`<sup>Optional</sup> <a name="image_name_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.property.imageNameInput"></a>

```python
image_name_input: str
```

- *Type:* str

---

##### `image_version_number_input`<sup>Optional</sup> <a name="image_version_number_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.property.imageVersionNumberInput"></a>

```python
image_version_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `app_image_config_name`<sup>Required</sup> <a name="app_image_config_name" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.property.appImageConfigName"></a>

```python
app_image_config_name: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `image_version_number`<sup>Required</sup> <a name="image_version_number" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.property.imageVersionNumber"></a>

```python
image_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage</a>]

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">reset_lifecycle_config_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn">reset_sagemaker_image_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionAlias">reset_sagemaker_image_version_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn">reset_sagemaker_image_version_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_lifecycle_config_arn` <a name="reset_lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```python
def reset_lifecycle_config_arn() -> None
```

##### `reset_sagemaker_image_arn` <a name="reset_sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn"></a>

```python
def reset_sagemaker_image_arn() -> None
```

##### `reset_sagemaker_image_version_alias` <a name="reset_sagemaker_image_version_alias" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionAlias"></a>

```python
def reset_sagemaker_image_version_alias() -> None
```

##### `reset_sagemaker_image_version_arn` <a name="reset_sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```python
def reset_sagemaker_image_version_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycle_config_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput">sagemaker_image_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAliasInput">sagemaker_image_version_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput">sagemaker_image_version_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycle_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn">sagemaker_image_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAlias">sagemaker_image_version_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn">sagemaker_image_version_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `lifecycle_config_arn_input`<sup>Optional</sup> <a name="lifecycle_config_arn_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```python
lifecycle_config_arn_input: str
```

- *Type:* str

---

##### `sagemaker_image_arn_input`<sup>Optional</sup> <a name="sagemaker_image_arn_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```python
sagemaker_image_arn_input: str
```

- *Type:* str

---

##### `sagemaker_image_version_alias_input`<sup>Optional</sup> <a name="sagemaker_image_version_alias_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAliasInput"></a>

```python
sagemaker_image_version_alias_input: str
```

- *Type:* str

---

##### `sagemaker_image_version_arn_input`<sup>Optional</sup> <a name="sagemaker_image_version_arn_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```python
sagemaker_image_version_arn_input: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `lifecycle_config_arn`<sup>Required</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```python
lifecycle_config_arn: str
```

- *Type:* str

---

##### `sagemaker_image_arn`<sup>Required</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn"></a>

```python
sagemaker_image_arn: str
```

- *Type:* str

---

##### `sagemaker_image_version_alias`<sup>Required</sup> <a name="sagemaker_image_version_alias" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAlias"></a>

```python
sagemaker_image_version_alias: str
```

- *Type:* str

---

##### `sagemaker_image_version_arn`<sup>Required</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```python
sagemaker_image_version_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putCodeRepository">put_code_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putCustomImage">put_custom_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putDefaultResourceSpec">put_default_resource_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetCodeRepository">reset_code_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetCustomImage">reset_custom_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetDefaultResourceSpec">reset_default_resource_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetLifecycleConfigArns">reset_lifecycle_config_arns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_code_repository` <a name="put_code_repository" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putCodeRepository"></a>

```python
def put_code_repository(
  value: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putCodeRepository.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository</a>]]

---

##### `put_custom_image` <a name="put_custom_image" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putCustomImage"></a>

```python
def put_custom_image(
  value: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putCustomImage.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage</a>]]

---

##### `put_default_resource_spec` <a name="put_default_resource_spec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putDefaultResourceSpec"></a>

```python
def put_default_resource_spec(
  instance_type: str = None,
  lifecycle_config_arn: str = None,
  sagemaker_image_arn: str = None,
  sagemaker_image_version_alias: str = None,
  sagemaker_image_version_arn: str = None
) -> None
```

###### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putDefaultResourceSpec.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}.

---

###### `lifecycle_config_arn`<sup>Optional</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putDefaultResourceSpec.parameter.lifecycleConfigArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}.

---

###### `sagemaker_image_arn`<sup>Optional</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putDefaultResourceSpec.parameter.sagemakerImageArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}.

---

###### `sagemaker_image_version_alias`<sup>Optional</sup> <a name="sagemaker_image_version_alias" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putDefaultResourceSpec.parameter.sagemakerImageVersionAlias"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias SagemakerUserProfile#sagemaker_image_version_alias}.

---

###### `sagemaker_image_version_arn`<sup>Optional</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putDefaultResourceSpec.parameter.sagemakerImageVersionArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}.

---

##### `reset_code_repository` <a name="reset_code_repository" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetCodeRepository"></a>

```python
def reset_code_repository() -> None
```

##### `reset_custom_image` <a name="reset_custom_image" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetCustomImage"></a>

```python
def reset_custom_image() -> None
```

##### `reset_default_resource_spec` <a name="reset_default_resource_spec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```python
def reset_default_resource_spec() -> None
```

##### `reset_lifecycle_config_arns` <a name="reset_lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```python
def reset_lifecycle_config_arns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.codeRepository">code_repository</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.customImage">custom_image</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpec">default_resource_spec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.codeRepositoryInput">code_repository_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.customImageInput">custom_image_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpecInput">default_resource_spec_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.lifecycleConfigArnsInput">lifecycle_config_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.lifecycleConfigArns">lifecycle_config_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_repository`<sup>Required</sup> <a name="code_repository" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.codeRepository"></a>

```python
code_repository: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList</a>

---

##### `custom_image`<sup>Required</sup> <a name="custom_image" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.customImage"></a>

```python
custom_image: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList</a>

---

##### `default_resource_spec`<sup>Required</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpec"></a>

```python
default_resource_spec: SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `code_repository_input`<sup>Optional</sup> <a name="code_repository_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.codeRepositoryInput"></a>

```python
code_repository_input: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository</a>]]

---

##### `custom_image_input`<sup>Optional</sup> <a name="custom_image_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.customImageInput"></a>

```python
custom_image_input: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage</a>]]

---

##### `default_resource_spec_input`<sup>Optional</sup> <a name="default_resource_spec_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```python
default_resource_spec_input: SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

---

##### `lifecycle_config_arns_input`<sup>Optional</sup> <a name="lifecycle_config_arns_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```python
lifecycle_config_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lifecycle_config_arns`<sup>Required</sup> <a name="lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```python
lifecycle_config_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerUserProfileUserSettingsJupyterLabAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettings</a>

---


### SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList <a name="SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository">SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository">SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository</a>]]

---


### SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference <a name="SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrlInput">repository_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrl">repository_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository">SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_url_input`<sup>Optional</sup> <a name="repository_url_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrlInput"></a>

```python
repository_url_input: str
```

- *Type:* str

---

##### `repository_url`<sup>Required</sup> <a name="repository_url" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrl"></a>

```python
repository_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository">SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository</a>]

---


### SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">reset_lifecycle_config_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn">reset_sagemaker_image_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionAlias">reset_sagemaker_image_version_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn">reset_sagemaker_image_version_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_lifecycle_config_arn` <a name="reset_lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```python
def reset_lifecycle_config_arn() -> None
```

##### `reset_sagemaker_image_arn` <a name="reset_sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn"></a>

```python
def reset_sagemaker_image_arn() -> None
```

##### `reset_sagemaker_image_version_alias` <a name="reset_sagemaker_image_version_alias" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionAlias"></a>

```python
def reset_sagemaker_image_version_alias() -> None
```

##### `reset_sagemaker_image_version_arn` <a name="reset_sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```python
def reset_sagemaker_image_version_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycle_config_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput">sagemaker_image_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAliasInput">sagemaker_image_version_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput">sagemaker_image_version_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycle_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn">sagemaker_image_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAlias">sagemaker_image_version_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn">sagemaker_image_version_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `lifecycle_config_arn_input`<sup>Optional</sup> <a name="lifecycle_config_arn_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```python
lifecycle_config_arn_input: str
```

- *Type:* str

---

##### `sagemaker_image_arn_input`<sup>Optional</sup> <a name="sagemaker_image_arn_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```python
sagemaker_image_arn_input: str
```

- *Type:* str

---

##### `sagemaker_image_version_alias_input`<sup>Optional</sup> <a name="sagemaker_image_version_alias_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAliasInput"></a>

```python
sagemaker_image_version_alias_input: str
```

- *Type:* str

---

##### `sagemaker_image_version_arn_input`<sup>Optional</sup> <a name="sagemaker_image_version_arn_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```python
sagemaker_image_version_arn_input: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `lifecycle_config_arn`<sup>Required</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```python
lifecycle_config_arn: str
```

- *Type:* str

---

##### `sagemaker_image_arn`<sup>Required</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn"></a>

```python
sagemaker_image_arn: str
```

- *Type:* str

---

##### `sagemaker_image_version_alias`<sup>Required</sup> <a name="sagemaker_image_version_alias" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAlias"></a>

```python
sagemaker_image_version_alias: str
```

- *Type:* str

---

##### `sagemaker_image_version_arn`<sup>Required</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```python
sagemaker_image_version_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---


### SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference <a name="SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.putCodeRepository">put_code_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec">put_default_resource_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resetCodeRepository">reset_code_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resetDefaultResourceSpec">reset_default_resource_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resetLifecycleConfigArns">reset_lifecycle_config_arns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_code_repository` <a name="put_code_repository" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.putCodeRepository"></a>

```python
def put_code_repository(
  value: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.putCodeRepository.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository">SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository</a>]]

---

##### `put_default_resource_spec` <a name="put_default_resource_spec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec"></a>

```python
def put_default_resource_spec(
  instance_type: str = None,
  lifecycle_config_arn: str = None,
  sagemaker_image_arn: str = None,
  sagemaker_image_version_alias: str = None,
  sagemaker_image_version_arn: str = None
) -> None
```

###### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}.

---

###### `lifecycle_config_arn`<sup>Optional</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec.parameter.lifecycleConfigArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}.

---

###### `sagemaker_image_arn`<sup>Optional</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec.parameter.sagemakerImageArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}.

---

###### `sagemaker_image_version_alias`<sup>Optional</sup> <a name="sagemaker_image_version_alias" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec.parameter.sagemakerImageVersionAlias"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias SagemakerUserProfile#sagemaker_image_version_alias}.

---

###### `sagemaker_image_version_arn`<sup>Optional</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec.parameter.sagemakerImageVersionArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}.

---

##### `reset_code_repository` <a name="reset_code_repository" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resetCodeRepository"></a>

```python
def reset_code_repository() -> None
```

##### `reset_default_resource_spec` <a name="reset_default_resource_spec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```python
def reset_default_resource_spec() -> None
```

##### `reset_lifecycle_config_arns` <a name="reset_lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```python
def reset_lifecycle_config_arns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.codeRepository">code_repository</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList">SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpec">default_resource_spec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.codeRepositoryInput">code_repository_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository">SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpecInput">default_resource_spec_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArnsInput">lifecycle_config_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArns">lifecycle_config_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings">SagemakerUserProfileUserSettingsJupyterServerAppSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_repository`<sup>Required</sup> <a name="code_repository" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.codeRepository"></a>

```python
code_repository: SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList">SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList</a>

---

##### `default_resource_spec`<sup>Required</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpec"></a>

```python
default_resource_spec: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `code_repository_input`<sup>Optional</sup> <a name="code_repository_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.codeRepositoryInput"></a>

```python
code_repository_input: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository">SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository</a>]]

---

##### `default_resource_spec_input`<sup>Optional</sup> <a name="default_resource_spec_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```python
default_resource_spec_input: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---

##### `lifecycle_config_arns_input`<sup>Optional</sup> <a name="lifecycle_config_arns_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```python
lifecycle_config_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lifecycle_config_arns`<sup>Required</sup> <a name="lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```python
lifecycle_config_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerUserProfileUserSettingsJupyterServerAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings">SagemakerUserProfileUserSettingsJupyterServerAppSettings</a>

---


### SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage</a>]]

---


### SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.resetImageVersionNumber">reset_image_version_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_image_version_number` <a name="reset_image_version_number" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.resetImageVersionNumber"></a>

```python
def reset_image_version_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigNameInput">app_image_config_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageNameInput">image_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumberInput">image_version_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigName">app_image_config_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumber">image_version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_image_config_name_input`<sup>Optional</sup> <a name="app_image_config_name_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigNameInput"></a>

```python
app_image_config_name_input: str
```

- *Type:* str

---

##### `image_name_input`<sup>Optional</sup> <a name="image_name_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageNameInput"></a>

```python
image_name_input: str
```

- *Type:* str

---

##### `image_version_number_input`<sup>Optional</sup> <a name="image_version_number_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumberInput"></a>

```python
image_version_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `app_image_config_name`<sup>Required</sup> <a name="app_image_config_name" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigName"></a>

```python
app_image_config_name: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `image_version_number`<sup>Required</sup> <a name="image_version_number" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumber"></a>

```python
image_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage</a>]

---


### SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">reset_lifecycle_config_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn">reset_sagemaker_image_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionAlias">reset_sagemaker_image_version_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn">reset_sagemaker_image_version_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_lifecycle_config_arn` <a name="reset_lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```python
def reset_lifecycle_config_arn() -> None
```

##### `reset_sagemaker_image_arn` <a name="reset_sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn"></a>

```python
def reset_sagemaker_image_arn() -> None
```

##### `reset_sagemaker_image_version_alias` <a name="reset_sagemaker_image_version_alias" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionAlias"></a>

```python
def reset_sagemaker_image_version_alias() -> None
```

##### `reset_sagemaker_image_version_arn` <a name="reset_sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```python
def reset_sagemaker_image_version_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycle_config_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput">sagemaker_image_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAliasInput">sagemaker_image_version_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput">sagemaker_image_version_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycle_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn">sagemaker_image_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAlias">sagemaker_image_version_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn">sagemaker_image_version_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `lifecycle_config_arn_input`<sup>Optional</sup> <a name="lifecycle_config_arn_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```python
lifecycle_config_arn_input: str
```

- *Type:* str

---

##### `sagemaker_image_arn_input`<sup>Optional</sup> <a name="sagemaker_image_arn_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```python
sagemaker_image_arn_input: str
```

- *Type:* str

---

##### `sagemaker_image_version_alias_input`<sup>Optional</sup> <a name="sagemaker_image_version_alias_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAliasInput"></a>

```python
sagemaker_image_version_alias_input: str
```

- *Type:* str

---

##### `sagemaker_image_version_arn_input`<sup>Optional</sup> <a name="sagemaker_image_version_arn_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```python
sagemaker_image_version_arn_input: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `lifecycle_config_arn`<sup>Required</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```python
lifecycle_config_arn: str
```

- *Type:* str

---

##### `sagemaker_image_arn`<sup>Required</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn"></a>

```python
sagemaker_image_arn: str
```

- *Type:* str

---

##### `sagemaker_image_version_alias`<sup>Required</sup> <a name="sagemaker_image_version_alias" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAlias"></a>

```python
sagemaker_image_version_alias: str
```

- *Type:* str

---

##### `sagemaker_image_version_arn`<sup>Required</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```python
sagemaker_image_version_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---


### SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putCustomImage">put_custom_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec">put_default_resource_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resetCustomImage">reset_custom_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resetDefaultResourceSpec">reset_default_resource_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resetLifecycleConfigArns">reset_lifecycle_config_arns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_image` <a name="put_custom_image" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putCustomImage"></a>

```python
def put_custom_image(
  value: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putCustomImage.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage</a>]]

---

##### `put_default_resource_spec` <a name="put_default_resource_spec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec"></a>

```python
def put_default_resource_spec(
  instance_type: str = None,
  lifecycle_config_arn: str = None,
  sagemaker_image_arn: str = None,
  sagemaker_image_version_alias: str = None,
  sagemaker_image_version_arn: str = None
) -> None
```

###### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}.

---

###### `lifecycle_config_arn`<sup>Optional</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec.parameter.lifecycleConfigArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}.

---

###### `sagemaker_image_arn`<sup>Optional</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec.parameter.sagemakerImageArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}.

---

###### `sagemaker_image_version_alias`<sup>Optional</sup> <a name="sagemaker_image_version_alias" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec.parameter.sagemakerImageVersionAlias"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias SagemakerUserProfile#sagemaker_image_version_alias}.

---

###### `sagemaker_image_version_arn`<sup>Optional</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec.parameter.sagemakerImageVersionArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}.

---

##### `reset_custom_image` <a name="reset_custom_image" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resetCustomImage"></a>

```python
def reset_custom_image() -> None
```

##### `reset_default_resource_spec` <a name="reset_default_resource_spec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```python
def reset_default_resource_spec() -> None
```

##### `reset_lifecycle_config_arns` <a name="reset_lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```python
def reset_lifecycle_config_arns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.customImage">custom_image</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpec">default_resource_spec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.customImageInput">custom_image_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpecInput">default_resource_spec_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArnsInput">lifecycle_config_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArns">lifecycle_config_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings">SagemakerUserProfileUserSettingsKernelGatewayAppSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_image`<sup>Required</sup> <a name="custom_image" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.customImage"></a>

```python
custom_image: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList</a>

---

##### `default_resource_spec`<sup>Required</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpec"></a>

```python
default_resource_spec: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `custom_image_input`<sup>Optional</sup> <a name="custom_image_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.customImageInput"></a>

```python
custom_image_input: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage</a>]]

---

##### `default_resource_spec_input`<sup>Optional</sup> <a name="default_resource_spec_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```python
default_resource_spec_input: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---

##### `lifecycle_config_arns_input`<sup>Optional</sup> <a name="lifecycle_config_arns_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```python
lifecycle_config_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lifecycle_config_arns`<sup>Required</sup> <a name="lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```python
lifecycle_config_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerUserProfileUserSettingsKernelGatewayAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings">SagemakerUserProfileUserSettingsKernelGatewayAppSettings</a>

---


### SagemakerUserProfileUserSettingsOutputReference <a name="SagemakerUserProfileUserSettingsOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCanvasAppSettings">put_canvas_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCodeEditorAppSettings">put_code_editor_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCustomFileSystemConfig">put_custom_file_system_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCustomPosixUserConfig">put_custom_posix_user_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterLabAppSettings">put_jupyter_lab_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterServerAppSettings">put_jupyter_server_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putKernelGatewayAppSettings">put_kernel_gateway_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putRSessionAppSettings">put_r_session_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putRStudioServerProAppSettings">put_r_studio_server_pro_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putSharingSettings">put_sharing_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putSpaceStorageSettings">put_space_storage_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putTensorBoardAppSettings">put_tensor_board_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetCanvasAppSettings">reset_canvas_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetCodeEditorAppSettings">reset_code_editor_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetCustomFileSystemConfig">reset_custom_file_system_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetCustomPosixUserConfig">reset_custom_posix_user_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetDefaultLandingUri">reset_default_landing_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetJupyterLabAppSettings">reset_jupyter_lab_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetJupyterServerAppSettings">reset_jupyter_server_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetKernelGatewayAppSettings">reset_kernel_gateway_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetRSessionAppSettings">reset_r_session_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetRStudioServerProAppSettings">reset_r_studio_server_pro_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetSharingSettings">reset_sharing_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetSpaceStorageSettings">reset_space_storage_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetStudioWebPortal">reset_studio_web_portal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetTensorBoardAppSettings">reset_tensor_board_app_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_canvas_app_settings` <a name="put_canvas_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCanvasAppSettings"></a>

```python
def put_canvas_app_settings(
  direct_deploy_settings: SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings = None,
  identity_provider_oauth_settings: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings]] = None,
  kendra_settings: SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings = None,
  model_register_settings: SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings = None,
  time_series_forecasting_settings: SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings = None,
  workspace_settings: SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings = None
) -> None
```

###### `direct_deploy_settings`<sup>Optional</sup> <a name="direct_deploy_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCanvasAppSettings.parameter.directDeploySettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings">SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings</a>

direct_deploy_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#direct_deploy_settings SagemakerUserProfile#direct_deploy_settings}

---

###### `identity_provider_oauth_settings`<sup>Optional</sup> <a name="identity_provider_oauth_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCanvasAppSettings.parameter.identityProviderOauthSettings"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings</a>]]

identity_provider_oauth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#identity_provider_oauth_settings SagemakerUserProfile#identity_provider_oauth_settings}

---

###### `kendra_settings`<sup>Optional</sup> <a name="kendra_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCanvasAppSettings.parameter.kendraSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings</a>

kendra_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#kendra_settings SagemakerUserProfile#kendra_settings}

---

###### `model_register_settings`<sup>Optional</sup> <a name="model_register_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCanvasAppSettings.parameter.modelRegisterSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings</a>

model_register_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#model_register_settings SagemakerUserProfile#model_register_settings}

---

###### `time_series_forecasting_settings`<sup>Optional</sup> <a name="time_series_forecasting_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCanvasAppSettings.parameter.timeSeriesForecastingSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings</a>

time_series_forecasting_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#time_series_forecasting_settings SagemakerUserProfile#time_series_forecasting_settings}

---

###### `workspace_settings`<sup>Optional</sup> <a name="workspace_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCanvasAppSettings.parameter.workspaceSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings</a>

workspace_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#workspace_settings SagemakerUserProfile#workspace_settings}

---

##### `put_code_editor_app_settings` <a name="put_code_editor_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCodeEditorAppSettings"></a>

```python
def put_code_editor_app_settings(
  default_resource_spec: SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec = None,
  lifecycle_config_arns: typing.List[str] = None
) -> None
```

###### `default_resource_spec`<sup>Optional</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCodeEditorAppSettings.parameter.defaultResourceSpec"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}

---

###### `lifecycle_config_arns`<sup>Optional</sup> <a name="lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCodeEditorAppSettings.parameter.lifecycleConfigArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}.

---

##### `put_custom_file_system_config` <a name="put_custom_file_system_config" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCustomFileSystemConfig"></a>

```python
def put_custom_file_system_config(
  value: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsCustomFileSystemConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCustomFileSystemConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfig</a>]]

---

##### `put_custom_posix_user_config` <a name="put_custom_posix_user_config" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCustomPosixUserConfig"></a>

```python
def put_custom_posix_user_config(
  gid: typing.Union[int, float],
  uid: typing.Union[int, float]
) -> None
```

###### `gid`<sup>Required</sup> <a name="gid" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCustomPosixUserConfig.parameter.gid"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#gid SagemakerUserProfile#gid}.

---

###### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCustomPosixUserConfig.parameter.uid"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#uid SagemakerUserProfile#uid}.

---

##### `put_jupyter_lab_app_settings` <a name="put_jupyter_lab_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterLabAppSettings"></a>

```python
def put_jupyter_lab_app_settings(
  code_repository: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository]] = None,
  custom_image: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage]] = None,
  default_resource_spec: SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec = None,
  lifecycle_config_arns: typing.List[str] = None
) -> None
```

###### `code_repository`<sup>Optional</sup> <a name="code_repository" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterLabAppSettings.parameter.codeRepository"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository</a>]]

code_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#code_repository SagemakerUserProfile#code_repository}

---

###### `custom_image`<sup>Optional</sup> <a name="custom_image" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterLabAppSettings.parameter.customImage"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage</a>]]

custom_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#custom_image SagemakerUserProfile#custom_image}

---

###### `default_resource_spec`<sup>Optional</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterLabAppSettings.parameter.defaultResourceSpec"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}

---

###### `lifecycle_config_arns`<sup>Optional</sup> <a name="lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterLabAppSettings.parameter.lifecycleConfigArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}.

---

##### `put_jupyter_server_app_settings` <a name="put_jupyter_server_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterServerAppSettings"></a>

```python
def put_jupyter_server_app_settings(
  code_repository: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository]] = None,
  default_resource_spec: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec = None,
  lifecycle_config_arns: typing.List[str] = None
) -> None
```

###### `code_repository`<sup>Optional</sup> <a name="code_repository" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterServerAppSettings.parameter.codeRepository"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository">SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository</a>]]

code_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#code_repository SagemakerUserProfile#code_repository}

---

###### `default_resource_spec`<sup>Optional</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterServerAppSettings.parameter.defaultResourceSpec"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}

---

###### `lifecycle_config_arns`<sup>Optional</sup> <a name="lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterServerAppSettings.parameter.lifecycleConfigArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}.

---

##### `put_kernel_gateway_app_settings` <a name="put_kernel_gateway_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putKernelGatewayAppSettings"></a>

```python
def put_kernel_gateway_app_settings(
  custom_image: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage]] = None,
  default_resource_spec: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec = None,
  lifecycle_config_arns: typing.List[str] = None
) -> None
```

###### `custom_image`<sup>Optional</sup> <a name="custom_image" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putKernelGatewayAppSettings.parameter.customImage"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage</a>]]

custom_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#custom_image SagemakerUserProfile#custom_image}

---

###### `default_resource_spec`<sup>Optional</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putKernelGatewayAppSettings.parameter.defaultResourceSpec"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}

---

###### `lifecycle_config_arns`<sup>Optional</sup> <a name="lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putKernelGatewayAppSettings.parameter.lifecycleConfigArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}.

---

##### `put_r_session_app_settings` <a name="put_r_session_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putRSessionAppSettings"></a>

```python
def put_r_session_app_settings(
  custom_image: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage]] = None,
  default_resource_spec: SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec = None
) -> None
```

###### `custom_image`<sup>Optional</sup> <a name="custom_image" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putRSessionAppSettings.parameter.customImage"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage">SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage</a>]]

custom_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#custom_image SagemakerUserProfile#custom_image}

---

###### `default_resource_spec`<sup>Optional</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putRSessionAppSettings.parameter.defaultResourceSpec"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}

---

##### `put_r_studio_server_pro_app_settings` <a name="put_r_studio_server_pro_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putRStudioServerProAppSettings"></a>

```python
def put_r_studio_server_pro_app_settings(
  access_status: str = None,
  user_group: str = None
) -> None
```

###### `access_status`<sup>Optional</sup> <a name="access_status" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putRStudioServerProAppSettings.parameter.accessStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#access_status SagemakerUserProfile#access_status}.

---

###### `user_group`<sup>Optional</sup> <a name="user_group" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putRStudioServerProAppSettings.parameter.userGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#user_group SagemakerUserProfile#user_group}.

---

##### `put_sharing_settings` <a name="put_sharing_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putSharingSettings"></a>

```python
def put_sharing_settings(
  notebook_output_option: str = None,
  s3_kms_key_id: str = None,
  s3_output_path: str = None
) -> None
```

###### `notebook_output_option`<sup>Optional</sup> <a name="notebook_output_option" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putSharingSettings.parameter.notebookOutputOption"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#notebook_output_option SagemakerUserProfile#notebook_output_option}.

---

###### `s3_kms_key_id`<sup>Optional</sup> <a name="s3_kms_key_id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putSharingSettings.parameter.s3KmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#s3_kms_key_id SagemakerUserProfile#s3_kms_key_id}.

---

###### `s3_output_path`<sup>Optional</sup> <a name="s3_output_path" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putSharingSettings.parameter.s3OutputPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#s3_output_path SagemakerUserProfile#s3_output_path}.

---

##### `put_space_storage_settings` <a name="put_space_storage_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putSpaceStorageSettings"></a>

```python
def put_space_storage_settings(
  default_ebs_storage_settings: SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings = None
) -> None
```

###### `default_ebs_storage_settings`<sup>Optional</sup> <a name="default_ebs_storage_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putSpaceStorageSettings.parameter.defaultEbsStorageSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings</a>

default_ebs_storage_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#default_ebs_storage_settings SagemakerUserProfile#default_ebs_storage_settings}

---

##### `put_tensor_board_app_settings` <a name="put_tensor_board_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putTensorBoardAppSettings"></a>

```python
def put_tensor_board_app_settings(
  default_resource_spec: SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec = None
) -> None
```

###### `default_resource_spec`<sup>Optional</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putTensorBoardAppSettings.parameter.defaultResourceSpec"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}

---

##### `reset_canvas_app_settings` <a name="reset_canvas_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetCanvasAppSettings"></a>

```python
def reset_canvas_app_settings() -> None
```

##### `reset_code_editor_app_settings` <a name="reset_code_editor_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetCodeEditorAppSettings"></a>

```python
def reset_code_editor_app_settings() -> None
```

##### `reset_custom_file_system_config` <a name="reset_custom_file_system_config" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetCustomFileSystemConfig"></a>

```python
def reset_custom_file_system_config() -> None
```

##### `reset_custom_posix_user_config` <a name="reset_custom_posix_user_config" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetCustomPosixUserConfig"></a>

```python
def reset_custom_posix_user_config() -> None
```

##### `reset_default_landing_uri` <a name="reset_default_landing_uri" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetDefaultLandingUri"></a>

```python
def reset_default_landing_uri() -> None
```

##### `reset_jupyter_lab_app_settings` <a name="reset_jupyter_lab_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetJupyterLabAppSettings"></a>

```python
def reset_jupyter_lab_app_settings() -> None
```

##### `reset_jupyter_server_app_settings` <a name="reset_jupyter_server_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetJupyterServerAppSettings"></a>

```python
def reset_jupyter_server_app_settings() -> None
```

##### `reset_kernel_gateway_app_settings` <a name="reset_kernel_gateway_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetKernelGatewayAppSettings"></a>

```python
def reset_kernel_gateway_app_settings() -> None
```

##### `reset_r_session_app_settings` <a name="reset_r_session_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetRSessionAppSettings"></a>

```python
def reset_r_session_app_settings() -> None
```

##### `reset_r_studio_server_pro_app_settings` <a name="reset_r_studio_server_pro_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetRStudioServerProAppSettings"></a>

```python
def reset_r_studio_server_pro_app_settings() -> None
```

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```

##### `reset_sharing_settings` <a name="reset_sharing_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetSharingSettings"></a>

```python
def reset_sharing_settings() -> None
```

##### `reset_space_storage_settings` <a name="reset_space_storage_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetSpaceStorageSettings"></a>

```python
def reset_space_storage_settings() -> None
```

##### `reset_studio_web_portal` <a name="reset_studio_web_portal" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetStudioWebPortal"></a>

```python
def reset_studio_web_portal() -> None
```

##### `reset_tensor_board_app_settings` <a name="reset_tensor_board_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetTensorBoardAppSettings"></a>

```python
def reset_tensor_board_app_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.canvasAppSettings">canvas_app_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference">SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.codeEditorAppSettings">code_editor_app_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference">SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customFileSystemConfig">custom_file_system_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigList">SagemakerUserProfileUserSettingsCustomFileSystemConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customPosixUserConfig">custom_posix_user_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference">SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterLabAppSettings">jupyter_lab_app_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterServerAppSettings">jupyter_server_app_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference">SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.kernelGatewayAppSettings">kernel_gateway_app_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.rSessionAppSettings">r_session_app_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference">SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.rStudioServerProAppSettings">r_studio_server_pro_app_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference">SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.sharingSettings">sharing_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference">SagemakerUserProfileUserSettingsSharingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.spaceStorageSettings">space_storage_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference">SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.tensorBoardAppSettings">tensor_board_app_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference">SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.canvasAppSettingsInput">canvas_app_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings">SagemakerUserProfileUserSettingsCanvasAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.codeEditorAppSettingsInput">code_editor_app_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customFileSystemConfigInput">custom_file_system_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customPosixUserConfigInput">custom_posix_user_config_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig">SagemakerUserProfileUserSettingsCustomPosixUserConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.defaultLandingUriInput">default_landing_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.executionRoleInput">execution_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterLabAppSettingsInput">jupyter_lab_app_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterServerAppSettingsInput">jupyter_server_app_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings">SagemakerUserProfileUserSettingsJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.kernelGatewayAppSettingsInput">kernel_gateway_app_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings">SagemakerUserProfileUserSettingsKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.rSessionAppSettingsInput">r_session_app_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettings">SagemakerUserProfileUserSettingsRSessionAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.rStudioServerProAppSettingsInput">r_studio_server_pro_app_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings">SagemakerUserProfileUserSettingsRStudioServerProAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.sharingSettingsInput">sharing_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings">SagemakerUserProfileUserSettingsSharingSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.spaceStorageSettingsInput">space_storage_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.studioWebPortalInput">studio_web_portal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.tensorBoardAppSettingsInput">tensor_board_app_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettings">SagemakerUserProfileUserSettingsTensorBoardAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.defaultLandingUri">default_landing_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.executionRole">execution_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.studioWebPortal">studio_web_portal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `canvas_app_settings`<sup>Required</sup> <a name="canvas_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.canvasAppSettings"></a>

```python
canvas_app_settings: SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference">SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference</a>

---

##### `code_editor_app_settings`<sup>Required</sup> <a name="code_editor_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.codeEditorAppSettings"></a>

```python
code_editor_app_settings: SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference">SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference</a>

---

##### `custom_file_system_config`<sup>Required</sup> <a name="custom_file_system_config" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customFileSystemConfig"></a>

```python
custom_file_system_config: SagemakerUserProfileUserSettingsCustomFileSystemConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigList">SagemakerUserProfileUserSettingsCustomFileSystemConfigList</a>

---

##### `custom_posix_user_config`<sup>Required</sup> <a name="custom_posix_user_config" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customPosixUserConfig"></a>

```python
custom_posix_user_config: SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference">SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference</a>

---

##### `jupyter_lab_app_settings`<sup>Required</sup> <a name="jupyter_lab_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterLabAppSettings"></a>

```python
jupyter_lab_app_settings: SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference</a>

---

##### `jupyter_server_app_settings`<sup>Required</sup> <a name="jupyter_server_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterServerAppSettings"></a>

```python
jupyter_server_app_settings: SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference">SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference</a>

---

##### `kernel_gateway_app_settings`<sup>Required</sup> <a name="kernel_gateway_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.kernelGatewayAppSettings"></a>

```python
kernel_gateway_app_settings: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference</a>

---

##### `r_session_app_settings`<sup>Required</sup> <a name="r_session_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.rSessionAppSettings"></a>

```python
r_session_app_settings: SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference">SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference</a>

---

##### `r_studio_server_pro_app_settings`<sup>Required</sup> <a name="r_studio_server_pro_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.rStudioServerProAppSettings"></a>

```python
r_studio_server_pro_app_settings: SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference">SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference</a>

---

##### `sharing_settings`<sup>Required</sup> <a name="sharing_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.sharingSettings"></a>

```python
sharing_settings: SagemakerUserProfileUserSettingsSharingSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference">SagemakerUserProfileUserSettingsSharingSettingsOutputReference</a>

---

##### `space_storage_settings`<sup>Required</sup> <a name="space_storage_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.spaceStorageSettings"></a>

```python
space_storage_settings: SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference">SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference</a>

---

##### `tensor_board_app_settings`<sup>Required</sup> <a name="tensor_board_app_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.tensorBoardAppSettings"></a>

```python
tensor_board_app_settings: SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference">SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference</a>

---

##### `canvas_app_settings_input`<sup>Optional</sup> <a name="canvas_app_settings_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.canvasAppSettingsInput"></a>

```python
canvas_app_settings_input: SagemakerUserProfileUserSettingsCanvasAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings">SagemakerUserProfileUserSettingsCanvasAppSettings</a>

---

##### `code_editor_app_settings_input`<sup>Optional</sup> <a name="code_editor_app_settings_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.codeEditorAppSettingsInput"></a>

```python
code_editor_app_settings_input: SagemakerUserProfileUserSettingsCodeEditorAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettings</a>

---

##### `custom_file_system_config_input`<sup>Optional</sup> <a name="custom_file_system_config_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customFileSystemConfigInput"></a>

```python
custom_file_system_config_input: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsCustomFileSystemConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfig</a>]]

---

##### `custom_posix_user_config_input`<sup>Optional</sup> <a name="custom_posix_user_config_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customPosixUserConfigInput"></a>

```python
custom_posix_user_config_input: SagemakerUserProfileUserSettingsCustomPosixUserConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig">SagemakerUserProfileUserSettingsCustomPosixUserConfig</a>

---

##### `default_landing_uri_input`<sup>Optional</sup> <a name="default_landing_uri_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.defaultLandingUriInput"></a>

```python
default_landing_uri_input: str
```

- *Type:* str

---

##### `execution_role_input`<sup>Optional</sup> <a name="execution_role_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.executionRoleInput"></a>

```python
execution_role_input: str
```

- *Type:* str

---

##### `jupyter_lab_app_settings_input`<sup>Optional</sup> <a name="jupyter_lab_app_settings_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterLabAppSettingsInput"></a>

```python
jupyter_lab_app_settings_input: SagemakerUserProfileUserSettingsJupyterLabAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettings</a>

---

##### `jupyter_server_app_settings_input`<sup>Optional</sup> <a name="jupyter_server_app_settings_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterServerAppSettingsInput"></a>

```python
jupyter_server_app_settings_input: SagemakerUserProfileUserSettingsJupyterServerAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings">SagemakerUserProfileUserSettingsJupyterServerAppSettings</a>

---

##### `kernel_gateway_app_settings_input`<sup>Optional</sup> <a name="kernel_gateway_app_settings_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.kernelGatewayAppSettingsInput"></a>

```python
kernel_gateway_app_settings_input: SagemakerUserProfileUserSettingsKernelGatewayAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings">SagemakerUserProfileUserSettingsKernelGatewayAppSettings</a>

---

##### `r_session_app_settings_input`<sup>Optional</sup> <a name="r_session_app_settings_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.rSessionAppSettingsInput"></a>

```python
r_session_app_settings_input: SagemakerUserProfileUserSettingsRSessionAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettings">SagemakerUserProfileUserSettingsRSessionAppSettings</a>

---

##### `r_studio_server_pro_app_settings_input`<sup>Optional</sup> <a name="r_studio_server_pro_app_settings_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.rStudioServerProAppSettingsInput"></a>

```python
r_studio_server_pro_app_settings_input: SagemakerUserProfileUserSettingsRStudioServerProAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings">SagemakerUserProfileUserSettingsRStudioServerProAppSettings</a>

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sharing_settings_input`<sup>Optional</sup> <a name="sharing_settings_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.sharingSettingsInput"></a>

```python
sharing_settings_input: SagemakerUserProfileUserSettingsSharingSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings">SagemakerUserProfileUserSettingsSharingSettings</a>

---

##### `space_storage_settings_input`<sup>Optional</sup> <a name="space_storage_settings_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.spaceStorageSettingsInput"></a>

```python
space_storage_settings_input: SagemakerUserProfileUserSettingsSpaceStorageSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettings</a>

---

##### `studio_web_portal_input`<sup>Optional</sup> <a name="studio_web_portal_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.studioWebPortalInput"></a>

```python
studio_web_portal_input: str
```

- *Type:* str

---

##### `tensor_board_app_settings_input`<sup>Optional</sup> <a name="tensor_board_app_settings_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.tensorBoardAppSettingsInput"></a>

```python
tensor_board_app_settings_input: SagemakerUserProfileUserSettingsTensorBoardAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettings">SagemakerUserProfileUserSettingsTensorBoardAppSettings</a>

---

##### `default_landing_uri`<sup>Required</sup> <a name="default_landing_uri" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.defaultLandingUri"></a>

```python
default_landing_uri: str
```

- *Type:* str

---

##### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `studio_web_portal`<sup>Required</sup> <a name="studio_web_portal" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.studioWebPortal"></a>

```python
studio_web_portal: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerUserProfileUserSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a>

---


### SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList <a name="SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage">SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage">SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage</a>]]

---


### SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference <a name="SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.resetImageVersionNumber">reset_image_version_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_image_version_number` <a name="reset_image_version_number" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.resetImageVersionNumber"></a>

```python
def reset_image_version_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.appImageConfigNameInput">app_image_config_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageNameInput">image_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageVersionNumberInput">image_version_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.appImageConfigName">app_image_config_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageVersionNumber">image_version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage">SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_image_config_name_input`<sup>Optional</sup> <a name="app_image_config_name_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.appImageConfigNameInput"></a>

```python
app_image_config_name_input: str
```

- *Type:* str

---

##### `image_name_input`<sup>Optional</sup> <a name="image_name_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageNameInput"></a>

```python
image_name_input: str
```

- *Type:* str

---

##### `image_version_number_input`<sup>Optional</sup> <a name="image_version_number_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageVersionNumberInput"></a>

```python
image_version_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `app_image_config_name`<sup>Required</sup> <a name="app_image_config_name" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.appImageConfigName"></a>

```python
app_image_config_name: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `image_version_number`<sup>Required</sup> <a name="image_version_number" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageVersionNumber"></a>

```python
image_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage">SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage</a>]

---


### SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">reset_lifecycle_config_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn">reset_sagemaker_image_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionAlias">reset_sagemaker_image_version_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn">reset_sagemaker_image_version_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_lifecycle_config_arn` <a name="reset_lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```python
def reset_lifecycle_config_arn() -> None
```

##### `reset_sagemaker_image_arn` <a name="reset_sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn"></a>

```python
def reset_sagemaker_image_arn() -> None
```

##### `reset_sagemaker_image_version_alias` <a name="reset_sagemaker_image_version_alias" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionAlias"></a>

```python
def reset_sagemaker_image_version_alias() -> None
```

##### `reset_sagemaker_image_version_arn` <a name="reset_sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```python
def reset_sagemaker_image_version_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycle_config_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput">sagemaker_image_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAliasInput">sagemaker_image_version_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput">sagemaker_image_version_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycle_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn">sagemaker_image_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAlias">sagemaker_image_version_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn">sagemaker_image_version_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `lifecycle_config_arn_input`<sup>Optional</sup> <a name="lifecycle_config_arn_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```python
lifecycle_config_arn_input: str
```

- *Type:* str

---

##### `sagemaker_image_arn_input`<sup>Optional</sup> <a name="sagemaker_image_arn_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```python
sagemaker_image_arn_input: str
```

- *Type:* str

---

##### `sagemaker_image_version_alias_input`<sup>Optional</sup> <a name="sagemaker_image_version_alias_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAliasInput"></a>

```python
sagemaker_image_version_alias_input: str
```

- *Type:* str

---

##### `sagemaker_image_version_arn_input`<sup>Optional</sup> <a name="sagemaker_image_version_arn_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```python
sagemaker_image_version_arn_input: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `lifecycle_config_arn`<sup>Required</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```python
lifecycle_config_arn: str
```

- *Type:* str

---

##### `sagemaker_image_arn`<sup>Required</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn"></a>

```python
sagemaker_image_arn: str
```

- *Type:* str

---

##### `sagemaker_image_version_alias`<sup>Required</sup> <a name="sagemaker_image_version_alias" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAlias"></a>

```python
sagemaker_image_version_alias: str
```

- *Type:* str

---

##### `sagemaker_image_version_arn`<sup>Required</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```python
sagemaker_image_version_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec</a>

---


### SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference <a name="SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.putCustomImage">put_custom_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.putDefaultResourceSpec">put_default_resource_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.resetCustomImage">reset_custom_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.resetDefaultResourceSpec">reset_default_resource_spec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_image` <a name="put_custom_image" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.putCustomImage"></a>

```python
def put_custom_image(
  value: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.putCustomImage.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage">SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage</a>]]

---

##### `put_default_resource_spec` <a name="put_default_resource_spec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.putDefaultResourceSpec"></a>

```python
def put_default_resource_spec(
  instance_type: str = None,
  lifecycle_config_arn: str = None,
  sagemaker_image_arn: str = None,
  sagemaker_image_version_alias: str = None,
  sagemaker_image_version_arn: str = None
) -> None
```

###### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.putDefaultResourceSpec.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}.

---

###### `lifecycle_config_arn`<sup>Optional</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.putDefaultResourceSpec.parameter.lifecycleConfigArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}.

---

###### `sagemaker_image_arn`<sup>Optional</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.putDefaultResourceSpec.parameter.sagemakerImageArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}.

---

###### `sagemaker_image_version_alias`<sup>Optional</sup> <a name="sagemaker_image_version_alias" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.putDefaultResourceSpec.parameter.sagemakerImageVersionAlias"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias SagemakerUserProfile#sagemaker_image_version_alias}.

---

###### `sagemaker_image_version_arn`<sup>Optional</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.putDefaultResourceSpec.parameter.sagemakerImageVersionArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}.

---

##### `reset_custom_image` <a name="reset_custom_image" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.resetCustomImage"></a>

```python
def reset_custom_image() -> None
```

##### `reset_default_resource_spec` <a name="reset_default_resource_spec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```python
def reset_default_resource_spec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.property.customImage">custom_image</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList">SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.property.defaultResourceSpec">default_resource_spec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.property.customImageInput">custom_image_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage">SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.property.defaultResourceSpecInput">default_resource_spec_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettings">SagemakerUserProfileUserSettingsRSessionAppSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_image`<sup>Required</sup> <a name="custom_image" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.property.customImage"></a>

```python
custom_image: SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList">SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList</a>

---

##### `default_resource_spec`<sup>Required</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.property.defaultResourceSpec"></a>

```python
default_resource_spec: SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `custom_image_input`<sup>Optional</sup> <a name="custom_image_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.property.customImageInput"></a>

```python
custom_image_input: typing.Union[IResolvable, typing.List[SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage">SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage</a>]]

---

##### `default_resource_spec_input`<sup>Optional</sup> <a name="default_resource_spec_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```python
default_resource_spec_input: SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerUserProfileUserSettingsRSessionAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettings">SagemakerUserProfileUserSettingsRSessionAppSettings</a>

---


### SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference <a name="SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.resetAccessStatus">reset_access_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.resetUserGroup">reset_user_group</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_status` <a name="reset_access_status" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.resetAccessStatus"></a>

```python
def reset_access_status() -> None
```

##### `reset_user_group` <a name="reset_user_group" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.resetUserGroup"></a>

```python
def reset_user_group() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.accessStatusInput">access_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.userGroupInput">user_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.accessStatus">access_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.userGroup">user_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings">SagemakerUserProfileUserSettingsRStudioServerProAppSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_status_input`<sup>Optional</sup> <a name="access_status_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.accessStatusInput"></a>

```python
access_status_input: str
```

- *Type:* str

---

##### `user_group_input`<sup>Optional</sup> <a name="user_group_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.userGroupInput"></a>

```python
user_group_input: str
```

- *Type:* str

---

##### `access_status`<sup>Required</sup> <a name="access_status" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.accessStatus"></a>

```python
access_status: str
```

- *Type:* str

---

##### `user_group`<sup>Required</sup> <a name="user_group" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.userGroup"></a>

```python
user_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerUserProfileUserSettingsRStudioServerProAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings">SagemakerUserProfileUserSettingsRStudioServerProAppSettings</a>

---


### SagemakerUserProfileUserSettingsSharingSettingsOutputReference <a name="SagemakerUserProfileUserSettingsSharingSettingsOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resetNotebookOutputOption">reset_notebook_output_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resetS3KmsKeyId">reset_s3_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resetS3OutputPath">reset_s3_output_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_notebook_output_option` <a name="reset_notebook_output_option" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resetNotebookOutputOption"></a>

```python
def reset_notebook_output_option() -> None
```

##### `reset_s3_kms_key_id` <a name="reset_s3_kms_key_id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resetS3KmsKeyId"></a>

```python
def reset_s3_kms_key_id() -> None
```

##### `reset_s3_output_path` <a name="reset_s3_output_path" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resetS3OutputPath"></a>

```python
def reset_s3_output_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.notebookOutputOptionInput">notebook_output_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3KmsKeyIdInput">s3_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3OutputPathInput">s3_output_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.notebookOutputOption">notebook_output_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3KmsKeyId">s3_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3OutputPath">s3_output_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings">SagemakerUserProfileUserSettingsSharingSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `notebook_output_option_input`<sup>Optional</sup> <a name="notebook_output_option_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.notebookOutputOptionInput"></a>

```python
notebook_output_option_input: str
```

- *Type:* str

---

##### `s3_kms_key_id_input`<sup>Optional</sup> <a name="s3_kms_key_id_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3KmsKeyIdInput"></a>

```python
s3_kms_key_id_input: str
```

- *Type:* str

---

##### `s3_output_path_input`<sup>Optional</sup> <a name="s3_output_path_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3OutputPathInput"></a>

```python
s3_output_path_input: str
```

- *Type:* str

---

##### `notebook_output_option`<sup>Required</sup> <a name="notebook_output_option" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.notebookOutputOption"></a>

```python
notebook_output_option: str
```

- *Type:* str

---

##### `s3_kms_key_id`<sup>Required</sup> <a name="s3_kms_key_id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3KmsKeyId"></a>

```python
s3_kms_key_id: str
```

- *Type:* str

---

##### `s3_output_path`<sup>Required</sup> <a name="s3_output_path" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3OutputPath"></a>

```python
s3_output_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerUserProfileUserSettingsSharingSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings">SagemakerUserProfileUserSettingsSharingSettings</a>

---


### SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference <a name="SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.defaultEbsVolumeSizeInGbInput">default_ebs_volume_size_in_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.maximumEbsVolumeSizeInGbInput">maximum_ebs_volume_size_in_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.defaultEbsVolumeSizeInGb">default_ebs_volume_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.maximumEbsVolumeSizeInGb">maximum_ebs_volume_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_ebs_volume_size_in_gb_input`<sup>Optional</sup> <a name="default_ebs_volume_size_in_gb_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.defaultEbsVolumeSizeInGbInput"></a>

```python
default_ebs_volume_size_in_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_ebs_volume_size_in_gb_input`<sup>Optional</sup> <a name="maximum_ebs_volume_size_in_gb_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.maximumEbsVolumeSizeInGbInput"></a>

```python
maximum_ebs_volume_size_in_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_ebs_volume_size_in_gb`<sup>Required</sup> <a name="default_ebs_volume_size_in_gb" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.defaultEbsVolumeSizeInGb"></a>

```python
default_ebs_volume_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_ebs_volume_size_in_gb`<sup>Required</sup> <a name="maximum_ebs_volume_size_in_gb" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.maximumEbsVolumeSizeInGb"></a>

```python
maximum_ebs_volume_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings</a>

---


### SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference <a name="SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.putDefaultEbsStorageSettings">put_default_ebs_storage_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.resetDefaultEbsStorageSettings">reset_default_ebs_storage_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_default_ebs_storage_settings` <a name="put_default_ebs_storage_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.putDefaultEbsStorageSettings"></a>

```python
def put_default_ebs_storage_settings(
  default_ebs_volume_size_in_gb: typing.Union[int, float],
  maximum_ebs_volume_size_in_gb: typing.Union[int, float]
) -> None
```

###### `default_ebs_volume_size_in_gb`<sup>Required</sup> <a name="default_ebs_volume_size_in_gb" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.putDefaultEbsStorageSettings.parameter.defaultEbsVolumeSizeInGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#default_ebs_volume_size_in_gb SagemakerUserProfile#default_ebs_volume_size_in_gb}.

---

###### `maximum_ebs_volume_size_in_gb`<sup>Required</sup> <a name="maximum_ebs_volume_size_in_gb" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.putDefaultEbsStorageSettings.parameter.maximumEbsVolumeSizeInGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#maximum_ebs_volume_size_in_gb SagemakerUserProfile#maximum_ebs_volume_size_in_gb}.

---

##### `reset_default_ebs_storage_settings` <a name="reset_default_ebs_storage_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.resetDefaultEbsStorageSettings"></a>

```python
def reset_default_ebs_storage_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.defaultEbsStorageSettings">default_ebs_storage_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.defaultEbsStorageSettingsInput">default_ebs_storage_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_ebs_storage_settings`<sup>Required</sup> <a name="default_ebs_storage_settings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.defaultEbsStorageSettings"></a>

```python
default_ebs_storage_settings: SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference</a>

---

##### `default_ebs_storage_settings_input`<sup>Optional</sup> <a name="default_ebs_storage_settings_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.defaultEbsStorageSettingsInput"></a>

```python
default_ebs_storage_settings_input: SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerUserProfileUserSettingsSpaceStorageSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettings</a>

---


### SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">reset_lifecycle_config_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn">reset_sagemaker_image_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionAlias">reset_sagemaker_image_version_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn">reset_sagemaker_image_version_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_lifecycle_config_arn` <a name="reset_lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```python
def reset_lifecycle_config_arn() -> None
```

##### `reset_sagemaker_image_arn` <a name="reset_sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn"></a>

```python
def reset_sagemaker_image_arn() -> None
```

##### `reset_sagemaker_image_version_alias` <a name="reset_sagemaker_image_version_alias" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionAlias"></a>

```python
def reset_sagemaker_image_version_alias() -> None
```

##### `reset_sagemaker_image_version_arn` <a name="reset_sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```python
def reset_sagemaker_image_version_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycle_config_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput">sagemaker_image_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAliasInput">sagemaker_image_version_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput">sagemaker_image_version_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycle_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn">sagemaker_image_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAlias">sagemaker_image_version_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn">sagemaker_image_version_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `lifecycle_config_arn_input`<sup>Optional</sup> <a name="lifecycle_config_arn_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```python
lifecycle_config_arn_input: str
```

- *Type:* str

---

##### `sagemaker_image_arn_input`<sup>Optional</sup> <a name="sagemaker_image_arn_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```python
sagemaker_image_arn_input: str
```

- *Type:* str

---

##### `sagemaker_image_version_alias_input`<sup>Optional</sup> <a name="sagemaker_image_version_alias_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAliasInput"></a>

```python
sagemaker_image_version_alias_input: str
```

- *Type:* str

---

##### `sagemaker_image_version_arn_input`<sup>Optional</sup> <a name="sagemaker_image_version_arn_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```python
sagemaker_image_version_arn_input: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `lifecycle_config_arn`<sup>Required</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```python
lifecycle_config_arn: str
```

- *Type:* str

---

##### `sagemaker_image_arn`<sup>Required</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn"></a>

```python
sagemaker_image_arn: str
```

- *Type:* str

---

##### `sagemaker_image_version_alias`<sup>Required</sup> <a name="sagemaker_image_version_alias" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAlias"></a>

```python
sagemaker_image_version_alias: str
```

- *Type:* str

---

##### `sagemaker_image_version_arn`<sup>Required</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```python
sagemaker_image_version_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec</a>

---


### SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference <a name="SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_user_profile

sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.putDefaultResourceSpec">put_default_resource_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.resetDefaultResourceSpec">reset_default_resource_spec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_default_resource_spec` <a name="put_default_resource_spec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.putDefaultResourceSpec"></a>

```python
def put_default_resource_spec(
  instance_type: str = None,
  lifecycle_config_arn: str = None,
  sagemaker_image_arn: str = None,
  sagemaker_image_version_alias: str = None,
  sagemaker_image_version_arn: str = None
) -> None
```

###### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.putDefaultResourceSpec.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}.

---

###### `lifecycle_config_arn`<sup>Optional</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.putDefaultResourceSpec.parameter.lifecycleConfigArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}.

---

###### `sagemaker_image_arn`<sup>Optional</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.putDefaultResourceSpec.parameter.sagemakerImageArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}.

---

###### `sagemaker_image_version_alias`<sup>Optional</sup> <a name="sagemaker_image_version_alias" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.putDefaultResourceSpec.parameter.sagemakerImageVersionAlias"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias SagemakerUserProfile#sagemaker_image_version_alias}.

---

###### `sagemaker_image_version_arn`<sup>Optional</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.putDefaultResourceSpec.parameter.sagemakerImageVersionArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}.

---

##### `reset_default_resource_spec` <a name="reset_default_resource_spec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```python
def reset_default_resource_spec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.property.defaultResourceSpec">default_resource_spec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.property.defaultResourceSpecInput">default_resource_spec_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettings">SagemakerUserProfileUserSettingsTensorBoardAppSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_resource_spec`<sup>Required</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.property.defaultResourceSpec"></a>

```python
default_resource_spec: SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `default_resource_spec_input`<sup>Optional</sup> <a name="default_resource_spec_input" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```python
default_resource_spec_input: SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerUserProfileUserSettingsTensorBoardAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettings">SagemakerUserProfileUserSettingsTensorBoardAppSettings</a>

---



