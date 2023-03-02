# `kendraExperience` Submodule <a name="`kendraExperience` Submodule" id="@cdktf/provider-aws.kendraExperience"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KendraExperience <a name="KendraExperience" id="@cdktf/provider-aws.kendraExperience.KendraExperience"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience aws_kendra_experience}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_experience

kendraExperience.KendraExperience(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  index_id: str,
  name: str,
  role_arn: str,
  configuration: KendraExperienceConfiguration = None,
  description: str = None,
  id: str = None,
  timeouts: KendraExperienceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.indexId">index_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#index_id KendraExperience#index_id}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#name KendraExperience#name}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#role_arn KendraExperience#role_arn}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration">KendraExperienceConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#description KendraExperience#description}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#id KendraExperience#id}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts">KendraExperienceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `index_id`<sup>Required</sup> <a name="index_id" id="@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.indexId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#index_id KendraExperience#index_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#name KendraExperience#name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#role_arn KendraExperience#role_arn}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration">KendraExperienceConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#configuration KendraExperience#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#description KendraExperience#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#id KendraExperience#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts">KendraExperienceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#timeouts KendraExperience#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraExperience.KendraExperience.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.kendraExperience.KendraExperience.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.kendraExperience.KendraExperience.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraExperience.KendraExperience.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.kendraExperience.KendraExperience.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.kendraExperience.KendraExperience.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.kendraExperience.KendraExperience.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.kendraExperience.KendraExperience.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.kendraExperience.KendraExperience.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_configuration` <a name="put_configuration" id="@cdktf/provider-aws.kendraExperience.KendraExperience.putConfiguration"></a>

```python
def put_configuration(
  content_source_configuration: KendraExperienceConfigurationContentSourceConfiguration = None,
  user_identity_configuration: KendraExperienceConfigurationUserIdentityConfiguration = None
) -> None
```

###### `content_source_configuration`<sup>Optional</sup> <a name="content_source_configuration" id="@cdktf/provider-aws.kendraExperience.KendraExperience.putConfiguration.parameter.contentSourceConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration">KendraExperienceConfigurationContentSourceConfiguration</a>

content_source_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#content_source_configuration KendraExperience#content_source_configuration}

---

###### `user_identity_configuration`<sup>Optional</sup> <a name="user_identity_configuration" id="@cdktf/provider-aws.kendraExperience.KendraExperience.putConfiguration.parameter.userIdentityConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration">KendraExperienceConfigurationUserIdentityConfiguration</a>

user_identity_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#user_identity_configuration KendraExperience#user_identity_configuration}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.kendraExperience.KendraExperience.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.kendraExperience.KendraExperience.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#create KendraExperience#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.kendraExperience.KendraExperience.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#delete KendraExperience#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.kendraExperience.KendraExperience.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#update KendraExperience#update}.

---

##### `reset_configuration` <a name="reset_configuration" id="@cdktf/provider-aws.kendraExperience.KendraExperience.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.kendraExperience.KendraExperience.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.kendraExperience.KendraExperience.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.kendraExperience.KendraExperience.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.kendraExperience.KendraExperience.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import kendra_experience

kendraExperience.KendraExperience.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kendraExperience.KendraExperience.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.kendraExperience.KendraExperience.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import kendra_experience

kendraExperience.KendraExperience.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kendraExperience.KendraExperience.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.kendraExperience.KendraExperience.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import kendra_experience

kendraExperience.KendraExperience.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kendraExperience.KendraExperience.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference">KendraExperienceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList">KendraExperienceEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.experienceId">experience_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference">KendraExperienceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.configurationInput">configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration">KendraExperienceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.indexIdInput">index_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts">KendraExperienceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.indexId">index_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.configuration"></a>

```python
configuration: KendraExperienceConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference">KendraExperienceConfigurationOutputReference</a>

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.endpoints"></a>

```python
endpoints: KendraExperienceEndpointsList
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList">KendraExperienceEndpointsList</a>

---

##### `experience_id`<sup>Required</sup> <a name="experience_id" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.experienceId"></a>

```python
experience_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.timeouts"></a>

```python
timeouts: KendraExperienceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference">KendraExperienceTimeoutsOutputReference</a>

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.configurationInput"></a>

```python
configuration_input: KendraExperienceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration">KendraExperienceConfiguration</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `index_id_input`<sup>Optional</sup> <a name="index_id_input" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.indexIdInput"></a>

```python
index_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[KendraExperienceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts">KendraExperienceTimeouts</a>, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `index_id`<sup>Required</sup> <a name="index_id" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.indexId"></a>

```python
index_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KendraExperienceConfig <a name="KendraExperienceConfig" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_experience

kendraExperience.KendraExperienceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  index_id: str,
  name: str,
  role_arn: str,
  configuration: KendraExperienceConfiguration = None,
  description: str = None,
  id: str = None,
  timeouts: KendraExperienceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.indexId">index_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#index_id KendraExperience#index_id}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#name KendraExperience#name}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#role_arn KendraExperience#role_arn}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration">KendraExperienceConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#description KendraExperience#description}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#id KendraExperience#id}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts">KendraExperienceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `index_id`<sup>Required</sup> <a name="index_id" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.indexId"></a>

```python
index_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#index_id KendraExperience#index_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#name KendraExperience#name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#role_arn KendraExperience#role_arn}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.configuration"></a>

```python
configuration: KendraExperienceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration">KendraExperienceConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#configuration KendraExperience#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#description KendraExperience#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#id KendraExperience#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.timeouts"></a>

```python
timeouts: KendraExperienceTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts">KendraExperienceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#timeouts KendraExperience#timeouts}

---

### KendraExperienceConfiguration <a name="KendraExperienceConfiguration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_experience

kendraExperience.KendraExperienceConfiguration(
  content_source_configuration: KendraExperienceConfigurationContentSourceConfiguration = None,
  user_identity_configuration: KendraExperienceConfigurationUserIdentityConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration.property.contentSourceConfiguration">content_source_configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration">KendraExperienceConfigurationContentSourceConfiguration</a></code> | content_source_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration.property.userIdentityConfiguration">user_identity_configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration">KendraExperienceConfigurationUserIdentityConfiguration</a></code> | user_identity_configuration block. |

---

##### `content_source_configuration`<sup>Optional</sup> <a name="content_source_configuration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration.property.contentSourceConfiguration"></a>

```python
content_source_configuration: KendraExperienceConfigurationContentSourceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration">KendraExperienceConfigurationContentSourceConfiguration</a>

content_source_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#content_source_configuration KendraExperience#content_source_configuration}

---

##### `user_identity_configuration`<sup>Optional</sup> <a name="user_identity_configuration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration.property.userIdentityConfiguration"></a>

```python
user_identity_configuration: KendraExperienceConfigurationUserIdentityConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration">KendraExperienceConfigurationUserIdentityConfiguration</a>

user_identity_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#user_identity_configuration KendraExperience#user_identity_configuration}

---

### KendraExperienceConfigurationContentSourceConfiguration <a name="KendraExperienceConfigurationContentSourceConfiguration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_experience

kendraExperience.KendraExperienceConfigurationContentSourceConfiguration(
  data_source_ids: typing.List[str] = None,
  direct_put_content: typing.Union[bool, IResolvable] = None,
  faq_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration.property.dataSourceIds">data_source_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#data_source_ids KendraExperience#data_source_ids}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration.property.directPutContent">direct_put_content</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#direct_put_content KendraExperience#direct_put_content}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration.property.faqIds">faq_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#faq_ids KendraExperience#faq_ids}. |

---

##### `data_source_ids`<sup>Optional</sup> <a name="data_source_ids" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration.property.dataSourceIds"></a>

```python
data_source_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#data_source_ids KendraExperience#data_source_ids}.

---

##### `direct_put_content`<sup>Optional</sup> <a name="direct_put_content" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration.property.directPutContent"></a>

```python
direct_put_content: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#direct_put_content KendraExperience#direct_put_content}.

---

##### `faq_ids`<sup>Optional</sup> <a name="faq_ids" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration.property.faqIds"></a>

```python
faq_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#faq_ids KendraExperience#faq_ids}.

---

### KendraExperienceConfigurationUserIdentityConfiguration <a name="KendraExperienceConfigurationUserIdentityConfiguration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_experience

kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration(
  identity_attribute_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration.property.identityAttributeName">identity_attribute_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#identity_attribute_name KendraExperience#identity_attribute_name}. |

---

##### `identity_attribute_name`<sup>Required</sup> <a name="identity_attribute_name" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration.property.identityAttributeName"></a>

```python
identity_attribute_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#identity_attribute_name KendraExperience#identity_attribute_name}.

---

### KendraExperienceEndpoints <a name="KendraExperienceEndpoints" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpoints.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_experience

kendraExperience.KendraExperienceEndpoints()
```


### KendraExperienceTimeouts <a name="KendraExperienceTimeouts" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_experience

kendraExperience.KendraExperienceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#create KendraExperience#create}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#delete KendraExperience#delete}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#update KendraExperience#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#create KendraExperience#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#delete KendraExperience#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#update KendraExperience#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KendraExperienceConfigurationContentSourceConfigurationOutputReference <a name="KendraExperienceConfigurationContentSourceConfigurationOutputReference" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_experience

kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.resetDataSourceIds">reset_data_source_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.resetDirectPutContent">reset_direct_put_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.resetFaqIds">reset_faq_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_source_ids` <a name="reset_data_source_ids" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.resetDataSourceIds"></a>

```python
def reset_data_source_ids() -> None
```

##### `reset_direct_put_content` <a name="reset_direct_put_content" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.resetDirectPutContent"></a>

```python
def reset_direct_put_content() -> None
```

##### `reset_faq_ids` <a name="reset_faq_ids" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.resetFaqIds"></a>

```python
def reset_faq_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.dataSourceIdsInput">data_source_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.directPutContentInput">direct_put_content_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.faqIdsInput">faq_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.dataSourceIds">data_source_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.directPutContent">direct_put_content</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.faqIds">faq_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration">KendraExperienceConfigurationContentSourceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_source_ids_input`<sup>Optional</sup> <a name="data_source_ids_input" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.dataSourceIdsInput"></a>

```python
data_source_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `direct_put_content_input`<sup>Optional</sup> <a name="direct_put_content_input" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.directPutContentInput"></a>

```python
direct_put_content_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `faq_ids_input`<sup>Optional</sup> <a name="faq_ids_input" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.faqIdsInput"></a>

```python
faq_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_source_ids`<sup>Required</sup> <a name="data_source_ids" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.dataSourceIds"></a>

```python
data_source_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `direct_put_content`<sup>Required</sup> <a name="direct_put_content" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.directPutContent"></a>

```python
direct_put_content: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `faq_ids`<sup>Required</sup> <a name="faq_ids" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.faqIds"></a>

```python
faq_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: KendraExperienceConfigurationContentSourceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration">KendraExperienceConfigurationContentSourceConfiguration</a>

---


### KendraExperienceConfigurationOutputReference <a name="KendraExperienceConfigurationOutputReference" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_experience

kendraExperience.KendraExperienceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.putContentSourceConfiguration">put_content_source_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.putUserIdentityConfiguration">put_user_identity_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.resetContentSourceConfiguration">reset_content_source_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.resetUserIdentityConfiguration">reset_user_identity_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_content_source_configuration` <a name="put_content_source_configuration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.putContentSourceConfiguration"></a>

```python
def put_content_source_configuration(
  data_source_ids: typing.List[str] = None,
  direct_put_content: typing.Union[bool, IResolvable] = None,
  faq_ids: typing.List[str] = None
) -> None
```

###### `data_source_ids`<sup>Optional</sup> <a name="data_source_ids" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.putContentSourceConfiguration.parameter.dataSourceIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#data_source_ids KendraExperience#data_source_ids}.

---

###### `direct_put_content`<sup>Optional</sup> <a name="direct_put_content" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.putContentSourceConfiguration.parameter.directPutContent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#direct_put_content KendraExperience#direct_put_content}.

---

###### `faq_ids`<sup>Optional</sup> <a name="faq_ids" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.putContentSourceConfiguration.parameter.faqIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#faq_ids KendraExperience#faq_ids}.

---

##### `put_user_identity_configuration` <a name="put_user_identity_configuration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.putUserIdentityConfiguration"></a>

```python
def put_user_identity_configuration(
  identity_attribute_name: str
) -> None
```

###### `identity_attribute_name`<sup>Required</sup> <a name="identity_attribute_name" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.putUserIdentityConfiguration.parameter.identityAttributeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#identity_attribute_name KendraExperience#identity_attribute_name}.

---

##### `reset_content_source_configuration` <a name="reset_content_source_configuration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.resetContentSourceConfiguration"></a>

```python
def reset_content_source_configuration() -> None
```

##### `reset_user_identity_configuration` <a name="reset_user_identity_configuration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.resetUserIdentityConfiguration"></a>

```python
def reset_user_identity_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.contentSourceConfiguration">content_source_configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference">KendraExperienceConfigurationContentSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.userIdentityConfiguration">user_identity_configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference">KendraExperienceConfigurationUserIdentityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.contentSourceConfigurationInput">content_source_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration">KendraExperienceConfigurationContentSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.userIdentityConfigurationInput">user_identity_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration">KendraExperienceConfigurationUserIdentityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration">KendraExperienceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_source_configuration`<sup>Required</sup> <a name="content_source_configuration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.contentSourceConfiguration"></a>

```python
content_source_configuration: KendraExperienceConfigurationContentSourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference">KendraExperienceConfigurationContentSourceConfigurationOutputReference</a>

---

##### `user_identity_configuration`<sup>Required</sup> <a name="user_identity_configuration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.userIdentityConfiguration"></a>

```python
user_identity_configuration: KendraExperienceConfigurationUserIdentityConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference">KendraExperienceConfigurationUserIdentityConfigurationOutputReference</a>

---

##### `content_source_configuration_input`<sup>Optional</sup> <a name="content_source_configuration_input" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.contentSourceConfigurationInput"></a>

```python
content_source_configuration_input: KendraExperienceConfigurationContentSourceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration">KendraExperienceConfigurationContentSourceConfiguration</a>

---

##### `user_identity_configuration_input`<sup>Optional</sup> <a name="user_identity_configuration_input" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.userIdentityConfigurationInput"></a>

```python
user_identity_configuration_input: KendraExperienceConfigurationUserIdentityConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration">KendraExperienceConfigurationUserIdentityConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: KendraExperienceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration">KendraExperienceConfiguration</a>

---


### KendraExperienceConfigurationUserIdentityConfigurationOutputReference <a name="KendraExperienceConfigurationUserIdentityConfigurationOutputReference" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_experience

kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.property.identityAttributeNameInput">identity_attribute_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.property.identityAttributeName">identity_attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration">KendraExperienceConfigurationUserIdentityConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_attribute_name_input`<sup>Optional</sup> <a name="identity_attribute_name_input" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.property.identityAttributeNameInput"></a>

```python
identity_attribute_name_input: str
```

- *Type:* str

---

##### `identity_attribute_name`<sup>Required</sup> <a name="identity_attribute_name" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.property.identityAttributeName"></a>

```python
identity_attribute_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: KendraExperienceConfigurationUserIdentityConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration">KendraExperienceConfigurationUserIdentityConfiguration</a>

---


### KendraExperienceEndpointsList <a name="KendraExperienceEndpointsList" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_experience

kendraExperience.KendraExperienceEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KendraExperienceEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### KendraExperienceEndpointsOutputReference <a name="KendraExperienceEndpointsOutputReference" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_experience

kendraExperience.KendraExperienceEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpoints">KendraExperienceEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: KendraExperienceEndpoints
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpoints">KendraExperienceEndpoints</a>

---


### KendraExperienceTimeoutsOutputReference <a name="KendraExperienceTimeoutsOutputReference" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_experience

kendraExperience.KendraExperienceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts">KendraExperienceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[KendraExperienceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts">KendraExperienceTimeouts</a>, cdktf.IResolvable]

---



