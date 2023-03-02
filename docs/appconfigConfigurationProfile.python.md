# `appconfigConfigurationProfile` Submodule <a name="`appconfigConfigurationProfile` Submodule" id="@cdktf/provider-aws.appconfigConfigurationProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigConfigurationProfile <a name="AppconfigConfigurationProfile" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile aws_appconfig_configuration_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_configuration_profile

appconfigConfigurationProfile.AppconfigConfigurationProfile(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_id: str,
  location_uri: str,
  name: str,
  description: str = None,
  id: str = None,
  retrieval_role_arn: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  type: str = None,
  validator: typing.Union[IResolvable, typing.List[AppconfigConfigurationProfileValidator]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#application_id AppconfigConfigurationProfile#application_id}. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.locationUri">location_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#location_uri AppconfigConfigurationProfile#location_uri}. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#name AppconfigConfigurationProfile#name}. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#description AppconfigConfigurationProfile#description}. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#id AppconfigConfigurationProfile#id}. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.retrievalRoleArn">retrieval_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#retrieval_role_arn AppconfigConfigurationProfile#retrieval_role_arn}. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#tags AppconfigConfigurationProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#tags_all AppconfigConfigurationProfile#tags_all}. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#type AppconfigConfigurationProfile#type}. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.validator">validator</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator">AppconfigConfigurationProfileValidator</a>]]</code> | validator block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.applicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#application_id AppconfigConfigurationProfile#application_id}.

---

##### `location_uri`<sup>Required</sup> <a name="location_uri" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.locationUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#location_uri AppconfigConfigurationProfile#location_uri}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#name AppconfigConfigurationProfile#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#description AppconfigConfigurationProfile#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#id AppconfigConfigurationProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retrieval_role_arn`<sup>Optional</sup> <a name="retrieval_role_arn" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.retrievalRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#retrieval_role_arn AppconfigConfigurationProfile#retrieval_role_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#tags AppconfigConfigurationProfile#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#tags_all AppconfigConfigurationProfile#tags_all}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#type AppconfigConfigurationProfile#type}.

---

##### `validator`<sup>Optional</sup> <a name="validator" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.validator"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator">AppconfigConfigurationProfileValidator</a>]]

validator block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#validator AppconfigConfigurationProfile#validator}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.putValidator">put_validator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetRetrievalRoleArn">reset_retrieval_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetValidator">reset_validator</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_validator` <a name="put_validator" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.putValidator"></a>

```python
def put_validator(
  value: typing.Union[IResolvable, typing.List[AppconfigConfigurationProfileValidator]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.putValidator.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator">AppconfigConfigurationProfileValidator</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_retrieval_role_arn` <a name="reset_retrieval_role_arn" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetRetrievalRoleArn"></a>

```python
def reset_retrieval_role_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_validator` <a name="reset_validator" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetValidator"></a>

```python
def reset_validator() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_configuration_profile

appconfigConfigurationProfile.AppconfigConfigurationProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_configuration_profile

appconfigConfigurationProfile.AppconfigConfigurationProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_configuration_profile

appconfigConfigurationProfile.AppconfigConfigurationProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.configurationProfileId">configuration_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.validator">validator</a></code> | <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList">AppconfigConfigurationProfileValidatorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.locationUriInput">location_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.retrievalRoleArnInput">retrieval_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.validatorInput">validator_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator">AppconfigConfigurationProfileValidator</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.locationUri">location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.retrievalRoleArn">retrieval_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `configuration_profile_id`<sup>Required</sup> <a name="configuration_profile_id" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.configurationProfileId"></a>

```python
configuration_profile_id: str
```

- *Type:* str

---

##### `validator`<sup>Required</sup> <a name="validator" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.validator"></a>

```python
validator: AppconfigConfigurationProfileValidatorList
```

- *Type:* <a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList">AppconfigConfigurationProfileValidatorList</a>

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_uri_input`<sup>Optional</sup> <a name="location_uri_input" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.locationUriInput"></a>

```python
location_uri_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `retrieval_role_arn_input`<sup>Optional</sup> <a name="retrieval_role_arn_input" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.retrievalRoleArnInput"></a>

```python
retrieval_role_arn_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `validator_input`<sup>Optional</sup> <a name="validator_input" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.validatorInput"></a>

```python
validator_input: typing.Union[IResolvable, typing.List[AppconfigConfigurationProfileValidator]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator">AppconfigConfigurationProfileValidator</a>]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location_uri`<sup>Required</sup> <a name="location_uri" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.locationUri"></a>

```python
location_uri: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `retrieval_role_arn`<sup>Required</sup> <a name="retrieval_role_arn" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.retrievalRoleArn"></a>

```python
retrieval_role_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigConfigurationProfileConfig <a name="AppconfigConfigurationProfileConfig" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_configuration_profile

appconfigConfigurationProfile.AppconfigConfigurationProfileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_id: str,
  location_uri: str,
  name: str,
  description: str = None,
  id: str = None,
  retrieval_role_arn: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  type: str = None,
  validator: typing.Union[IResolvable, typing.List[AppconfigConfigurationProfileValidator]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#application_id AppconfigConfigurationProfile#application_id}. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.locationUri">location_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#location_uri AppconfigConfigurationProfile#location_uri}. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#name AppconfigConfigurationProfile#name}. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#description AppconfigConfigurationProfile#description}. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#id AppconfigConfigurationProfile#id}. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.retrievalRoleArn">retrieval_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#retrieval_role_arn AppconfigConfigurationProfile#retrieval_role_arn}. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#tags AppconfigConfigurationProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#tags_all AppconfigConfigurationProfile#tags_all}. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#type AppconfigConfigurationProfile#type}. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.validator">validator</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator">AppconfigConfigurationProfileValidator</a>]]</code> | validator block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#application_id AppconfigConfigurationProfile#application_id}.

---

##### `location_uri`<sup>Required</sup> <a name="location_uri" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.locationUri"></a>

```python
location_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#location_uri AppconfigConfigurationProfile#location_uri}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#name AppconfigConfigurationProfile#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#description AppconfigConfigurationProfile#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#id AppconfigConfigurationProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retrieval_role_arn`<sup>Optional</sup> <a name="retrieval_role_arn" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.retrievalRoleArn"></a>

```python
retrieval_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#retrieval_role_arn AppconfigConfigurationProfile#retrieval_role_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#tags AppconfigConfigurationProfile#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#tags_all AppconfigConfigurationProfile#tags_all}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#type AppconfigConfigurationProfile#type}.

---

##### `validator`<sup>Optional</sup> <a name="validator" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.validator"></a>

```python
validator: typing.Union[IResolvable, typing.List[AppconfigConfigurationProfileValidator]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator">AppconfigConfigurationProfileValidator</a>]]

validator block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#validator AppconfigConfigurationProfile#validator}

---

### AppconfigConfigurationProfileValidator <a name="AppconfigConfigurationProfileValidator" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_configuration_profile

appconfigConfigurationProfile.AppconfigConfigurationProfileValidator(
  type: str,
  content: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#type AppconfigConfigurationProfile#type}. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#content AppconfigConfigurationProfile#content}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#type AppconfigConfigurationProfile#type}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile#content AppconfigConfigurationProfile#content}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppconfigConfigurationProfileValidatorList <a name="AppconfigConfigurationProfileValidatorList" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_configuration_profile

appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppconfigConfigurationProfileValidatorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator">AppconfigConfigurationProfileValidator</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppconfigConfigurationProfileValidator]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator">AppconfigConfigurationProfileValidator</a>]]

---


### AppconfigConfigurationProfileValidatorOutputReference <a name="AppconfigConfigurationProfileValidatorOutputReference" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_configuration_profile

appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.resetContent">reset_content</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content` <a name="reset_content" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.resetContent"></a>

```python
def reset_content() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator">AppconfigConfigurationProfileValidator</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AppconfigConfigurationProfileValidator, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator">AppconfigConfigurationProfileValidator</a>, cdktf.IResolvable]

---



