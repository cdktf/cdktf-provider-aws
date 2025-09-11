# `lexv2ModelsBot` Submodule <a name="`lexv2ModelsBot` Submodule" id="@cdktf/provider-aws.lexv2ModelsBot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Lexv2ModelsBot <a name="Lexv2ModelsBot" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot aws_lexv2models_bot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot

lexv2ModelsBot.Lexv2ModelsBot(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idle_session_ttl_in_seconds: typing.Union[int, float],
  name: str,
  role_arn: str,
  data_privacy: typing.Union[IResolvable, typing.List[Lexv2ModelsBotDataPrivacy]] = None,
  description: str = None,
  members: typing.Union[IResolvable, typing.List[Lexv2ModelsBotMembers]] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  test_bot_alias_tags: typing.Mapping[str] = None,
  timeouts: Lexv2ModelsBotTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.idleSessionTtlInSeconds">idle_session_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#idle_session_ttl_in_seconds Lexv2ModelsBot#idle_session_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#name Lexv2ModelsBot#name}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#role_arn Lexv2ModelsBot#role_arn}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.dataPrivacy">data_privacy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy">Lexv2ModelsBotDataPrivacy</a>]]</code> | data_privacy block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#description Lexv2ModelsBot#description}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.members">members</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers">Lexv2ModelsBotMembers</a>]]</code> | members block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#tags Lexv2ModelsBot#tags}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.testBotAliasTags">test_bot_alias_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#test_bot_alias_tags Lexv2ModelsBot#test_bot_alias_tags}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts">Lexv2ModelsBotTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#type Lexv2ModelsBot#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idle_session_ttl_in_seconds`<sup>Required</sup> <a name="idle_session_ttl_in_seconds" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.idleSessionTtlInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#idle_session_ttl_in_seconds Lexv2ModelsBot#idle_session_ttl_in_seconds}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#name Lexv2ModelsBot#name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#role_arn Lexv2ModelsBot#role_arn}.

---

##### `data_privacy`<sup>Optional</sup> <a name="data_privacy" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.dataPrivacy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy">Lexv2ModelsBotDataPrivacy</a>]]

data_privacy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#data_privacy Lexv2ModelsBot#data_privacy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#description Lexv2ModelsBot#description}.

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.members"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers">Lexv2ModelsBotMembers</a>]]

members block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#members Lexv2ModelsBot#members}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#region Lexv2ModelsBot#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#tags Lexv2ModelsBot#tags}.

---

##### `test_bot_alias_tags`<sup>Optional</sup> <a name="test_bot_alias_tags" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.testBotAliasTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#test_bot_alias_tags Lexv2ModelsBot#test_bot_alias_tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts">Lexv2ModelsBotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#timeouts Lexv2ModelsBot#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#type Lexv2ModelsBot#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.putDataPrivacy">put_data_privacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.putMembers">put_members</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetDataPrivacy">reset_data_privacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetMembers">reset_members</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetTestBotAliasTags">reset_test_bot_alias_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data_privacy` <a name="put_data_privacy" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.putDataPrivacy"></a>

```python
def put_data_privacy(
  value: typing.Union[IResolvable, typing.List[Lexv2ModelsBotDataPrivacy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.putDataPrivacy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy">Lexv2ModelsBotDataPrivacy</a>]]

---

##### `put_members` <a name="put_members" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.putMembers"></a>

```python
def put_members(
  value: typing.Union[IResolvable, typing.List[Lexv2ModelsBotMembers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.putMembers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers">Lexv2ModelsBotMembers</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#create Lexv2ModelsBot#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#delete Lexv2ModelsBot#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#update Lexv2ModelsBot#update}

---

##### `reset_data_privacy` <a name="reset_data_privacy" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetDataPrivacy"></a>

```python
def reset_data_privacy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_members` <a name="reset_members" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetMembers"></a>

```python
def reset_members() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_test_bot_alias_tags` <a name="reset_test_bot_alias_tags" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetTestBotAliasTags"></a>

```python
def reset_test_bot_alias_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Lexv2ModelsBot resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot

lexv2ModelsBot.Lexv2ModelsBot.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot

lexv2ModelsBot.Lexv2ModelsBot.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot

lexv2ModelsBot.Lexv2ModelsBot.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot

lexv2ModelsBot.Lexv2ModelsBot.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Lexv2ModelsBot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Lexv2ModelsBot to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Lexv2ModelsBot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Lexv2ModelsBot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.dataPrivacy">data_privacy</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList">Lexv2ModelsBotDataPrivacyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.members">members</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList">Lexv2ModelsBotMembersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference">Lexv2ModelsBotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.dataPrivacyInput">data_privacy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy">Lexv2ModelsBotDataPrivacy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.idleSessionTtlInSecondsInput">idle_session_ttl_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.membersInput">members_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers">Lexv2ModelsBotMembers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.testBotAliasTagsInput">test_bot_alias_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts">Lexv2ModelsBotTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.idleSessionTtlInSeconds">idle_session_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.testBotAliasTags">test_bot_alias_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `data_privacy`<sup>Required</sup> <a name="data_privacy" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.dataPrivacy"></a>

```python
data_privacy: Lexv2ModelsBotDataPrivacyList
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList">Lexv2ModelsBotDataPrivacyList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.members"></a>

```python
members: Lexv2ModelsBotMembersList
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList">Lexv2ModelsBotMembersList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.timeouts"></a>

```python
timeouts: Lexv2ModelsBotTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference">Lexv2ModelsBotTimeoutsOutputReference</a>

---

##### `data_privacy_input`<sup>Optional</sup> <a name="data_privacy_input" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.dataPrivacyInput"></a>

```python
data_privacy_input: typing.Union[IResolvable, typing.List[Lexv2ModelsBotDataPrivacy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy">Lexv2ModelsBotDataPrivacy</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `idle_session_ttl_in_seconds_input`<sup>Optional</sup> <a name="idle_session_ttl_in_seconds_input" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.idleSessionTtlInSecondsInput"></a>

```python
idle_session_ttl_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `members_input`<sup>Optional</sup> <a name="members_input" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.membersInput"></a>

```python
members_input: typing.Union[IResolvable, typing.List[Lexv2ModelsBotMembers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers">Lexv2ModelsBotMembers</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `test_bot_alias_tags_input`<sup>Optional</sup> <a name="test_bot_alias_tags_input" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.testBotAliasTagsInput"></a>

```python
test_bot_alias_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, Lexv2ModelsBotTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts">Lexv2ModelsBotTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `idle_session_ttl_in_seconds`<sup>Required</sup> <a name="idle_session_ttl_in_seconds" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.idleSessionTtlInSeconds"></a>

```python
idle_session_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `test_bot_alias_tags`<sup>Required</sup> <a name="test_bot_alias_tags" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.testBotAliasTags"></a>

```python
test_bot_alias_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Lexv2ModelsBotConfig <a name="Lexv2ModelsBotConfig" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot

lexv2ModelsBot.Lexv2ModelsBotConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idle_session_ttl_in_seconds: typing.Union[int, float],
  name: str,
  role_arn: str,
  data_privacy: typing.Union[IResolvable, typing.List[Lexv2ModelsBotDataPrivacy]] = None,
  description: str = None,
  members: typing.Union[IResolvable, typing.List[Lexv2ModelsBotMembers]] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  test_bot_alias_tags: typing.Mapping[str] = None,
  timeouts: Lexv2ModelsBotTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.idleSessionTtlInSeconds">idle_session_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#idle_session_ttl_in_seconds Lexv2ModelsBot#idle_session_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#name Lexv2ModelsBot#name}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#role_arn Lexv2ModelsBot#role_arn}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.dataPrivacy">data_privacy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy">Lexv2ModelsBotDataPrivacy</a>]]</code> | data_privacy block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#description Lexv2ModelsBot#description}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.members">members</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers">Lexv2ModelsBotMembers</a>]]</code> | members block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#tags Lexv2ModelsBot#tags}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.testBotAliasTags">test_bot_alias_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#test_bot_alias_tags Lexv2ModelsBot#test_bot_alias_tags}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts">Lexv2ModelsBotTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#type Lexv2ModelsBot#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idle_session_ttl_in_seconds`<sup>Required</sup> <a name="idle_session_ttl_in_seconds" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.idleSessionTtlInSeconds"></a>

```python
idle_session_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#idle_session_ttl_in_seconds Lexv2ModelsBot#idle_session_ttl_in_seconds}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#name Lexv2ModelsBot#name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#role_arn Lexv2ModelsBot#role_arn}.

---

##### `data_privacy`<sup>Optional</sup> <a name="data_privacy" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.dataPrivacy"></a>

```python
data_privacy: typing.Union[IResolvable, typing.List[Lexv2ModelsBotDataPrivacy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy">Lexv2ModelsBotDataPrivacy</a>]]

data_privacy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#data_privacy Lexv2ModelsBot#data_privacy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#description Lexv2ModelsBot#description}.

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.members"></a>

```python
members: typing.Union[IResolvable, typing.List[Lexv2ModelsBotMembers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers">Lexv2ModelsBotMembers</a>]]

members block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#members Lexv2ModelsBot#members}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#region Lexv2ModelsBot#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#tags Lexv2ModelsBot#tags}.

---

##### `test_bot_alias_tags`<sup>Optional</sup> <a name="test_bot_alias_tags" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.testBotAliasTags"></a>

```python
test_bot_alias_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#test_bot_alias_tags Lexv2ModelsBot#test_bot_alias_tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.timeouts"></a>

```python
timeouts: Lexv2ModelsBotTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts">Lexv2ModelsBotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#timeouts Lexv2ModelsBot#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#type Lexv2ModelsBot#type}.

---

### Lexv2ModelsBotDataPrivacy <a name="Lexv2ModelsBotDataPrivacy" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot

lexv2ModelsBot.Lexv2ModelsBotDataPrivacy(
  child_directed: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy.property.childDirected">child_directed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#child_directed Lexv2ModelsBot#child_directed}. |

---

##### `child_directed`<sup>Required</sup> <a name="child_directed" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy.property.childDirected"></a>

```python
child_directed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#child_directed Lexv2ModelsBot#child_directed}.

---

### Lexv2ModelsBotMembers <a name="Lexv2ModelsBotMembers" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot

lexv2ModelsBot.Lexv2ModelsBotMembers(
  alias_id: str,
  alias_name: str,
  id: str,
  name: str,
  version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.property.aliasId">alias_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#alias_id Lexv2ModelsBot#alias_id}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.property.aliasName">alias_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#alias_name Lexv2ModelsBot#alias_name}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#id Lexv2ModelsBot#id}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#name Lexv2ModelsBot#name}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#version Lexv2ModelsBot#version}. |

---

##### `alias_id`<sup>Required</sup> <a name="alias_id" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.property.aliasId"></a>

```python
alias_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#alias_id Lexv2ModelsBot#alias_id}.

---

##### `alias_name`<sup>Required</sup> <a name="alias_name" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.property.aliasName"></a>

```python
alias_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#alias_name Lexv2ModelsBot#alias_name}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#id Lexv2ModelsBot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#name Lexv2ModelsBot#name}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#version Lexv2ModelsBot#version}.

---

### Lexv2ModelsBotTimeouts <a name="Lexv2ModelsBotTimeouts" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot

lexv2ModelsBot.Lexv2ModelsBotTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#create Lexv2ModelsBot#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#delete Lexv2ModelsBot#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lexv2models_bot#update Lexv2ModelsBot#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Lexv2ModelsBotDataPrivacyList <a name="Lexv2ModelsBotDataPrivacyList" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot

lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Lexv2ModelsBotDataPrivacyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy">Lexv2ModelsBotDataPrivacy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Lexv2ModelsBotDataPrivacy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy">Lexv2ModelsBotDataPrivacy</a>]]

---


### Lexv2ModelsBotDataPrivacyOutputReference <a name="Lexv2ModelsBotDataPrivacyOutputReference" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot

lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.property.childDirectedInput">child_directed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.property.childDirected">child_directed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy">Lexv2ModelsBotDataPrivacy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `child_directed_input`<sup>Optional</sup> <a name="child_directed_input" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.property.childDirectedInput"></a>

```python
child_directed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `child_directed`<sup>Required</sup> <a name="child_directed" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.property.childDirected"></a>

```python
child_directed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Lexv2ModelsBotDataPrivacy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy">Lexv2ModelsBotDataPrivacy</a>]

---


### Lexv2ModelsBotMembersList <a name="Lexv2ModelsBotMembersList" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot

lexv2ModelsBot.Lexv2ModelsBotMembersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Lexv2ModelsBotMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers">Lexv2ModelsBotMembers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Lexv2ModelsBotMembers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers">Lexv2ModelsBotMembers</a>]]

---


### Lexv2ModelsBotMembersOutputReference <a name="Lexv2ModelsBotMembersOutputReference" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot

lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.aliasIdInput">alias_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.aliasNameInput">alias_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.aliasId">alias_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.aliasName">alias_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers">Lexv2ModelsBotMembers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias_id_input`<sup>Optional</sup> <a name="alias_id_input" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.aliasIdInput"></a>

```python
alias_id_input: str
```

- *Type:* str

---

##### `alias_name_input`<sup>Optional</sup> <a name="alias_name_input" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.aliasNameInput"></a>

```python
alias_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `alias_id`<sup>Required</sup> <a name="alias_id" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.aliasId"></a>

```python
alias_id: str
```

- *Type:* str

---

##### `alias_name`<sup>Required</sup> <a name="alias_name" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.aliasName"></a>

```python
alias_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Lexv2ModelsBotMembers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers">Lexv2ModelsBotMembers</a>]

---


### Lexv2ModelsBotTimeoutsOutputReference <a name="Lexv2ModelsBotTimeoutsOutputReference" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot

lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts">Lexv2ModelsBotTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Lexv2ModelsBotTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts">Lexv2ModelsBotTimeouts</a>]

---



