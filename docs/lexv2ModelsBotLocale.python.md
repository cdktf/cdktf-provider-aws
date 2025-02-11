# `lexv2ModelsBotLocale` Submodule <a name="`lexv2ModelsBotLocale` Submodule" id="@cdktf/provider-aws.lexv2ModelsBotLocale"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Lexv2ModelsBotLocale <a name="Lexv2ModelsBotLocale" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale aws_lexv2models_bot_locale}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot_locale

lexv2ModelsBotLocale.Lexv2ModelsBotLocale(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bot_id: str,
  bot_version: str,
  locale_id: str,
  n_lu_intent_confidence_threshold: typing.Union[int, float],
  description: str = None,
  name: str = None,
  timeouts: Lexv2ModelsBotLocaleTimeouts = None,
  voice_settings: typing.Union[IResolvable, typing.List[Lexv2ModelsBotLocaleVoiceSettings]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.botId">bot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#bot_id Lexv2ModelsBotLocale#bot_id}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.botVersion">bot_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#bot_version Lexv2ModelsBotLocale#bot_version}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.localeId">locale_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#locale_id Lexv2ModelsBotLocale#locale_id}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.nLuIntentConfidenceThreshold">n_lu_intent_confidence_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#n_lu_intent_confidence_threshold Lexv2ModelsBotLocale#n_lu_intent_confidence_threshold}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#description Lexv2ModelsBotLocale#description}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#name Lexv2ModelsBotLocale#name}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts">Lexv2ModelsBotLocaleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.voiceSettings">voice_settings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings">Lexv2ModelsBotLocaleVoiceSettings</a>]]</code> | voice_settings block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bot_id`<sup>Required</sup> <a name="bot_id" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.botId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#bot_id Lexv2ModelsBotLocale#bot_id}.

---

##### `bot_version`<sup>Required</sup> <a name="bot_version" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.botVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#bot_version Lexv2ModelsBotLocale#bot_version}.

---

##### `locale_id`<sup>Required</sup> <a name="locale_id" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.localeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#locale_id Lexv2ModelsBotLocale#locale_id}.

---

##### `n_lu_intent_confidence_threshold`<sup>Required</sup> <a name="n_lu_intent_confidence_threshold" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.nLuIntentConfidenceThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#n_lu_intent_confidence_threshold Lexv2ModelsBotLocale#n_lu_intent_confidence_threshold}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#description Lexv2ModelsBotLocale#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#name Lexv2ModelsBotLocale#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts">Lexv2ModelsBotLocaleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#timeouts Lexv2ModelsBotLocale#timeouts}

---

##### `voice_settings`<sup>Optional</sup> <a name="voice_settings" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.voiceSettings"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings">Lexv2ModelsBotLocaleVoiceSettings</a>]]

voice_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#voice_settings Lexv2ModelsBotLocale#voice_settings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.putVoiceSettings">put_voice_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetVoiceSettings">reset_voice_settings</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#create Lexv2ModelsBotLocale#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#delete Lexv2ModelsBotLocale#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#update Lexv2ModelsBotLocale#update}

---

##### `put_voice_settings` <a name="put_voice_settings" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.putVoiceSettings"></a>

```python
def put_voice_settings(
  value: typing.Union[IResolvable, typing.List[Lexv2ModelsBotLocaleVoiceSettings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.putVoiceSettings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings">Lexv2ModelsBotLocaleVoiceSettings</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_voice_settings` <a name="reset_voice_settings" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetVoiceSettings"></a>

```python
def reset_voice_settings() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Lexv2ModelsBotLocale resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot_locale

lexv2ModelsBotLocale.Lexv2ModelsBotLocale.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot_locale

lexv2ModelsBotLocale.Lexv2ModelsBotLocale.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot_locale

lexv2ModelsBotLocale.Lexv2ModelsBotLocale.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot_locale

lexv2ModelsBotLocale.Lexv2ModelsBotLocale.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Lexv2ModelsBotLocale resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Lexv2ModelsBotLocale to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Lexv2ModelsBotLocale that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Lexv2ModelsBotLocale to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference">Lexv2ModelsBotLocaleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.voiceSettings">voice_settings</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList">Lexv2ModelsBotLocaleVoiceSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botIdInput">bot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botVersionInput">bot_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.localeIdInput">locale_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.nLuIntentConfidenceThresholdInput">n_lu_intent_confidence_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts">Lexv2ModelsBotLocaleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.voiceSettingsInput">voice_settings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings">Lexv2ModelsBotLocaleVoiceSettings</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botId">bot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botVersion">bot_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.localeId">locale_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.nLuIntentConfidenceThreshold">n_lu_intent_confidence_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.timeouts"></a>

```python
timeouts: Lexv2ModelsBotLocaleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference">Lexv2ModelsBotLocaleTimeoutsOutputReference</a>

---

##### `voice_settings`<sup>Required</sup> <a name="voice_settings" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.voiceSettings"></a>

```python
voice_settings: Lexv2ModelsBotLocaleVoiceSettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList">Lexv2ModelsBotLocaleVoiceSettingsList</a>

---

##### `bot_id_input`<sup>Optional</sup> <a name="bot_id_input" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botIdInput"></a>

```python
bot_id_input: str
```

- *Type:* str

---

##### `bot_version_input`<sup>Optional</sup> <a name="bot_version_input" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botVersionInput"></a>

```python
bot_version_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `locale_id_input`<sup>Optional</sup> <a name="locale_id_input" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.localeIdInput"></a>

```python
locale_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `n_lu_intent_confidence_threshold_input`<sup>Optional</sup> <a name="n_lu_intent_confidence_threshold_input" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.nLuIntentConfidenceThresholdInput"></a>

```python
n_lu_intent_confidence_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, Lexv2ModelsBotLocaleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts">Lexv2ModelsBotLocaleTimeouts</a>]

---

##### `voice_settings_input`<sup>Optional</sup> <a name="voice_settings_input" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.voiceSettingsInput"></a>

```python
voice_settings_input: typing.Union[IResolvable, typing.List[Lexv2ModelsBotLocaleVoiceSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings">Lexv2ModelsBotLocaleVoiceSettings</a>]]

---

##### `bot_id`<sup>Required</sup> <a name="bot_id" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botId"></a>

```python
bot_id: str
```

- *Type:* str

---

##### `bot_version`<sup>Required</sup> <a name="bot_version" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botVersion"></a>

```python
bot_version: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `locale_id`<sup>Required</sup> <a name="locale_id" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.localeId"></a>

```python
locale_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `n_lu_intent_confidence_threshold`<sup>Required</sup> <a name="n_lu_intent_confidence_threshold" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.nLuIntentConfidenceThreshold"></a>

```python
n_lu_intent_confidence_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Lexv2ModelsBotLocaleConfig <a name="Lexv2ModelsBotLocaleConfig" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot_locale

lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bot_id: str,
  bot_version: str,
  locale_id: str,
  n_lu_intent_confidence_threshold: typing.Union[int, float],
  description: str = None,
  name: str = None,
  timeouts: Lexv2ModelsBotLocaleTimeouts = None,
  voice_settings: typing.Union[IResolvable, typing.List[Lexv2ModelsBotLocaleVoiceSettings]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.botId">bot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#bot_id Lexv2ModelsBotLocale#bot_id}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.botVersion">bot_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#bot_version Lexv2ModelsBotLocale#bot_version}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.localeId">locale_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#locale_id Lexv2ModelsBotLocale#locale_id}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.nLuIntentConfidenceThreshold">n_lu_intent_confidence_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#n_lu_intent_confidence_threshold Lexv2ModelsBotLocale#n_lu_intent_confidence_threshold}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#description Lexv2ModelsBotLocale#description}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#name Lexv2ModelsBotLocale#name}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts">Lexv2ModelsBotLocaleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.voiceSettings">voice_settings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings">Lexv2ModelsBotLocaleVoiceSettings</a>]]</code> | voice_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bot_id`<sup>Required</sup> <a name="bot_id" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.botId"></a>

```python
bot_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#bot_id Lexv2ModelsBotLocale#bot_id}.

---

##### `bot_version`<sup>Required</sup> <a name="bot_version" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.botVersion"></a>

```python
bot_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#bot_version Lexv2ModelsBotLocale#bot_version}.

---

##### `locale_id`<sup>Required</sup> <a name="locale_id" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.localeId"></a>

```python
locale_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#locale_id Lexv2ModelsBotLocale#locale_id}.

---

##### `n_lu_intent_confidence_threshold`<sup>Required</sup> <a name="n_lu_intent_confidence_threshold" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.nLuIntentConfidenceThreshold"></a>

```python
n_lu_intent_confidence_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#n_lu_intent_confidence_threshold Lexv2ModelsBotLocale#n_lu_intent_confidence_threshold}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#description Lexv2ModelsBotLocale#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#name Lexv2ModelsBotLocale#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.timeouts"></a>

```python
timeouts: Lexv2ModelsBotLocaleTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts">Lexv2ModelsBotLocaleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#timeouts Lexv2ModelsBotLocale#timeouts}

---

##### `voice_settings`<sup>Optional</sup> <a name="voice_settings" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.voiceSettings"></a>

```python
voice_settings: typing.Union[IResolvable, typing.List[Lexv2ModelsBotLocaleVoiceSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings">Lexv2ModelsBotLocaleVoiceSettings</a>]]

voice_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#voice_settings Lexv2ModelsBotLocale#voice_settings}

---

### Lexv2ModelsBotLocaleTimeouts <a name="Lexv2ModelsBotLocaleTimeouts" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot_locale

lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#create Lexv2ModelsBotLocale#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#delete Lexv2ModelsBotLocale#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#update Lexv2ModelsBotLocale#update}

---

### Lexv2ModelsBotLocaleVoiceSettings <a name="Lexv2ModelsBotLocaleVoiceSettings" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot_locale

lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings(
  voice_id: str,
  engine: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings.property.voiceId">voice_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#voice_id Lexv2ModelsBotLocale#voice_id}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings.property.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#engine Lexv2ModelsBotLocale#engine}. |

---

##### `voice_id`<sup>Required</sup> <a name="voice_id" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings.property.voiceId"></a>

```python
voice_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#voice_id Lexv2ModelsBotLocale#voice_id}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings.property.engine"></a>

```python
engine: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/lexv2models_bot_locale#engine Lexv2ModelsBotLocale#engine}.

---

## Classes <a name="Classes" id="Classes"></a>

### Lexv2ModelsBotLocaleTimeoutsOutputReference <a name="Lexv2ModelsBotLocaleTimeoutsOutputReference" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot_locale

lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts">Lexv2ModelsBotLocaleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Lexv2ModelsBotLocaleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts">Lexv2ModelsBotLocaleTimeouts</a>]

---


### Lexv2ModelsBotLocaleVoiceSettingsList <a name="Lexv2ModelsBotLocaleVoiceSettingsList" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot_locale

lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Lexv2ModelsBotLocaleVoiceSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings">Lexv2ModelsBotLocaleVoiceSettings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Lexv2ModelsBotLocaleVoiceSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings">Lexv2ModelsBotLocaleVoiceSettings</a>]]

---


### Lexv2ModelsBotLocaleVoiceSettingsOutputReference <a name="Lexv2ModelsBotLocaleVoiceSettingsOutputReference" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot_locale

lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.resetEngine">reset_engine</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_engine` <a name="reset_engine" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.resetEngine"></a>

```python
def reset_engine() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.voiceIdInput">voice_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.voiceId">voice_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings">Lexv2ModelsBotLocaleVoiceSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `voice_id_input`<sup>Optional</sup> <a name="voice_id_input" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.voiceIdInput"></a>

```python
voice_id_input: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `voice_id`<sup>Required</sup> <a name="voice_id" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.voiceId"></a>

```python
voice_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Lexv2ModelsBotLocaleVoiceSettings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings">Lexv2ModelsBotLocaleVoiceSettings</a>]

---



