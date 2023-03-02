# `sagemakerApp` Submodule <a name="`sagemakerApp` Submodule" id="@cdktf/provider-aws.sagemakerApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerApp <a name="SagemakerApp" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app aws_sagemaker_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_app

sagemakerApp.SagemakerApp(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_name: str,
  app_type: str,
  domain_id: str,
  id: str = None,
  resource_spec: SagemakerAppResourceSpec = None,
  space_name: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  user_profile_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.appName">app_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#app_name SagemakerApp#app_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.appType">app_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#app_type SagemakerApp#app_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.domainId">domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#domain_id SagemakerApp#domain_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#id SagemakerApp#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.resourceSpec">resource_spec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec">SagemakerAppResourceSpec</a></code> | resource_spec block. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.spaceName">space_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#space_name SagemakerApp#space_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#tags SagemakerApp#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#tags_all SagemakerApp#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.userProfileName">user_profile_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#user_profile_name SagemakerApp#user_profile_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_name`<sup>Required</sup> <a name="app_name" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.appName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#app_name SagemakerApp#app_name}.

---

##### `app_type`<sup>Required</sup> <a name="app_type" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.appType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#app_type SagemakerApp#app_type}.

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.domainId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#domain_id SagemakerApp#domain_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#id SagemakerApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_spec`<sup>Optional</sup> <a name="resource_spec" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.resourceSpec"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec">SagemakerAppResourceSpec</a>

resource_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#resource_spec SagemakerApp#resource_spec}

---

##### `space_name`<sup>Optional</sup> <a name="space_name" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.spaceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#space_name SagemakerApp#space_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#tags SagemakerApp#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#tags_all SagemakerApp#tags_all}.

---

##### `user_profile_name`<sup>Optional</sup> <a name="user_profile_name" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.userProfileName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#user_profile_name SagemakerApp#user_profile_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.putResourceSpec">put_resource_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.resetResourceSpec">reset_resource_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.resetSpaceName">reset_space_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.resetUserProfileName">reset_user_profile_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_resource_spec` <a name="put_resource_spec" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.putResourceSpec"></a>

```python
def put_resource_spec(
  instance_type: str = None,
  lifecycle_config_arn: str = None,
  sagemaker_image_arn: str = None,
  sagemaker_image_version_arn: str = None
) -> None
```

###### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.putResourceSpec.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#instance_type SagemakerApp#instance_type}.

---

###### `lifecycle_config_arn`<sup>Optional</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.putResourceSpec.parameter.lifecycleConfigArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#lifecycle_config_arn SagemakerApp#lifecycle_config_arn}.

---

###### `sagemaker_image_arn`<sup>Optional</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.putResourceSpec.parameter.sagemakerImageArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#sagemaker_image_arn SagemakerApp#sagemaker_image_arn}.

---

###### `sagemaker_image_version_arn`<sup>Optional</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.putResourceSpec.parameter.sagemakerImageVersionArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#sagemaker_image_version_arn SagemakerApp#sagemaker_image_version_arn}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_spec` <a name="reset_resource_spec" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.resetResourceSpec"></a>

```python
def reset_resource_spec() -> None
```

##### `reset_space_name` <a name="reset_space_name" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.resetSpaceName"></a>

```python
def reset_space_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_user_profile_name` <a name="reset_user_profile_name" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.resetUserProfileName"></a>

```python
def reset_user_profile_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_app

sagemakerApp.SagemakerApp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_app

sagemakerApp.SagemakerApp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_app

sagemakerApp.SagemakerApp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.resourceSpec">resource_spec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference">SagemakerAppResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.appNameInput">app_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.appTypeInput">app_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.domainIdInput">domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.resourceSpecInput">resource_spec_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec">SagemakerAppResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.spaceNameInput">space_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.userProfileNameInput">user_profile_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.appName">app_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.appType">app_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.spaceName">space_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.userProfileName">user_profile_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `resource_spec`<sup>Required</sup> <a name="resource_spec" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.resourceSpec"></a>

```python
resource_spec: SagemakerAppResourceSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference">SagemakerAppResourceSpecOutputReference</a>

---

##### `app_name_input`<sup>Optional</sup> <a name="app_name_input" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.appNameInput"></a>

```python
app_name_input: str
```

- *Type:* str

---

##### `app_type_input`<sup>Optional</sup> <a name="app_type_input" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.appTypeInput"></a>

```python
app_type_input: str
```

- *Type:* str

---

##### `domain_id_input`<sup>Optional</sup> <a name="domain_id_input" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.domainIdInput"></a>

```python
domain_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_spec_input`<sup>Optional</sup> <a name="resource_spec_input" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.resourceSpecInput"></a>

```python
resource_spec_input: SagemakerAppResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec">SagemakerAppResourceSpec</a>

---

##### `space_name_input`<sup>Optional</sup> <a name="space_name_input" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.spaceNameInput"></a>

```python
space_name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `user_profile_name_input`<sup>Optional</sup> <a name="user_profile_name_input" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.userProfileNameInput"></a>

```python
user_profile_name_input: str
```

- *Type:* str

---

##### `app_name`<sup>Required</sup> <a name="app_name" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.appName"></a>

```python
app_name: str
```

- *Type:* str

---

##### `app_type`<sup>Required</sup> <a name="app_type" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.appType"></a>

```python
app_type: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `space_name`<sup>Required</sup> <a name="space_name" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.spaceName"></a>

```python
space_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `user_profile_name`<sup>Required</sup> <a name="user_profile_name" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.userProfileName"></a>

```python
user_profile_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerAppConfig <a name="SagemakerAppConfig" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_app

sagemakerApp.SagemakerAppConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_name: str,
  app_type: str,
  domain_id: str,
  id: str = None,
  resource_spec: SagemakerAppResourceSpec = None,
  space_name: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  user_profile_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.appName">app_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#app_name SagemakerApp#app_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.appType">app_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#app_type SagemakerApp#app_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.domainId">domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#domain_id SagemakerApp#domain_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#id SagemakerApp#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.resourceSpec">resource_spec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec">SagemakerAppResourceSpec</a></code> | resource_spec block. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.spaceName">space_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#space_name SagemakerApp#space_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#tags SagemakerApp#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#tags_all SagemakerApp#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.userProfileName">user_profile_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#user_profile_name SagemakerApp#user_profile_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_name`<sup>Required</sup> <a name="app_name" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.appName"></a>

```python
app_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#app_name SagemakerApp#app_name}.

---

##### `app_type`<sup>Required</sup> <a name="app_type" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.appType"></a>

```python
app_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#app_type SagemakerApp#app_type}.

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#domain_id SagemakerApp#domain_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#id SagemakerApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_spec`<sup>Optional</sup> <a name="resource_spec" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.resourceSpec"></a>

```python
resource_spec: SagemakerAppResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec">SagemakerAppResourceSpec</a>

resource_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#resource_spec SagemakerApp#resource_spec}

---

##### `space_name`<sup>Optional</sup> <a name="space_name" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.spaceName"></a>

```python
space_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#space_name SagemakerApp#space_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#tags SagemakerApp#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#tags_all SagemakerApp#tags_all}.

---

##### `user_profile_name`<sup>Optional</sup> <a name="user_profile_name" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.userProfileName"></a>

```python
user_profile_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#user_profile_name SagemakerApp#user_profile_name}.

---

### SagemakerAppResourceSpec <a name="SagemakerAppResourceSpec" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_app

sagemakerApp.SagemakerAppResourceSpec(
  instance_type: str = None,
  lifecycle_config_arn: str = None,
  sagemaker_image_arn: str = None,
  sagemaker_image_version_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#instance_type SagemakerApp#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec.property.lifecycleConfigArn">lifecycle_config_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#lifecycle_config_arn SagemakerApp#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec.property.sagemakerImageArn">sagemaker_image_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#sagemaker_image_arn SagemakerApp#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec.property.sagemakerImageVersionArn">sagemaker_image_version_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#sagemaker_image_version_arn SagemakerApp#sagemaker_image_version_arn}. |

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#instance_type SagemakerApp#instance_type}.

---

##### `lifecycle_config_arn`<sup>Optional</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec.property.lifecycleConfigArn"></a>

```python
lifecycle_config_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#lifecycle_config_arn SagemakerApp#lifecycle_config_arn}.

---

##### `sagemaker_image_arn`<sup>Optional</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec.property.sagemakerImageArn"></a>

```python
sagemaker_image_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#sagemaker_image_arn SagemakerApp#sagemaker_image_arn}.

---

##### `sagemaker_image_version_arn`<sup>Optional</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec.property.sagemakerImageVersionArn"></a>

```python
sagemaker_image_version_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#sagemaker_image_version_arn SagemakerApp#sagemaker_image_version_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerAppResourceSpecOutputReference <a name="SagemakerAppResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_app

sagemakerApp.SagemakerAppResourceSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.resetLifecycleConfigArn">reset_lifecycle_config_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.resetSagemakerImageArn">reset_sagemaker_image_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.resetSagemakerImageVersionArn">reset_sagemaker_image_version_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_lifecycle_config_arn` <a name="reset_lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```python
def reset_lifecycle_config_arn() -> None
```

##### `reset_sagemaker_image_arn` <a name="reset_sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.resetSagemakerImageArn"></a>

```python
def reset_sagemaker_image_arn() -> None
```

##### `reset_sagemaker_image_version_arn` <a name="reset_sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```python
def reset_sagemaker_image_version_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycle_config_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.sagemakerImageArnInput">sagemaker_image_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.sagemakerImageVersionArnInput">sagemaker_image_version_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.lifecycleConfigArn">lifecycle_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.sagemakerImageArn">sagemaker_image_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.sagemakerImageVersionArn">sagemaker_image_version_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec">SagemakerAppResourceSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `lifecycle_config_arn_input`<sup>Optional</sup> <a name="lifecycle_config_arn_input" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```python
lifecycle_config_arn_input: str
```

- *Type:* str

---

##### `sagemaker_image_arn_input`<sup>Optional</sup> <a name="sagemaker_image_arn_input" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```python
sagemaker_image_arn_input: str
```

- *Type:* str

---

##### `sagemaker_image_version_arn_input`<sup>Optional</sup> <a name="sagemaker_image_version_arn_input" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```python
sagemaker_image_version_arn_input: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `lifecycle_config_arn`<sup>Required</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```python
lifecycle_config_arn: str
```

- *Type:* str

---

##### `sagemaker_image_arn`<sup>Required</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.sagemakerImageArn"></a>

```python
sagemaker_image_arn: str
```

- *Type:* str

---

##### `sagemaker_image_version_arn`<sup>Required</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```python
sagemaker_image_version_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerAppResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec">SagemakerAppResourceSpec</a>

---



