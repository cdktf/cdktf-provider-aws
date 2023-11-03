# `aws_ssmincidents_response_plan`

Refer to the Terraform Registory for docs: [`aws_ssmincidents_response_plan`](https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan).

# `ssmincidentsResponsePlan` Submodule <a name="`ssmincidentsResponsePlan` Submodule" id="@cdktf/provider-aws.ssmincidentsResponsePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmincidentsResponsePlan <a name="SsmincidentsResponsePlan" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan aws_ssmincidents_response_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlan(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  incident_template: SsmincidentsResponsePlanIncidentTemplate,
  name: str,
  action: SsmincidentsResponsePlanAction = None,
  chat_channel: typing.List[str] = None,
  display_name: str = None,
  engagements: typing.List[str] = None,
  id: str = None,
  integration: SsmincidentsResponsePlanIntegration = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.incidentTemplate">incident_template</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a></code> | incident_template block. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.action">action</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction">SsmincidentsResponsePlanAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.chatChannel">chat_channel</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#chat_channel SsmincidentsResponsePlan#chat_channel}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#display_name SsmincidentsResponsePlan#display_name}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.engagements">engagements</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#engagements SsmincidentsResponsePlan#engagements}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#id SsmincidentsResponsePlan#id}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.integration">integration</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration">SsmincidentsResponsePlanIntegration</a></code> | integration block. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#tags SsmincidentsResponsePlan#tags}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#tags_all SsmincidentsResponsePlan#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `incident_template`<sup>Required</sup> <a name="incident_template" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.incidentTemplate"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a>

incident_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#incident_template SsmincidentsResponsePlan#incident_template}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.action"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction">SsmincidentsResponsePlanAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#action SsmincidentsResponsePlan#action}

---

##### `chat_channel`<sup>Optional</sup> <a name="chat_channel" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.chatChannel"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#chat_channel SsmincidentsResponsePlan#chat_channel}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#display_name SsmincidentsResponsePlan#display_name}.

---

##### `engagements`<sup>Optional</sup> <a name="engagements" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.engagements"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#engagements SsmincidentsResponsePlan#engagements}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#id SsmincidentsResponsePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration`<sup>Optional</sup> <a name="integration" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.integration"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration">SsmincidentsResponsePlanIntegration</a>

integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#integration SsmincidentsResponsePlan#integration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#tags SsmincidentsResponsePlan#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#tags_all SsmincidentsResponsePlan#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIncidentTemplate">put_incident_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIntegration">put_integration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetChatChannel">reset_chat_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetEngagements">reset_engagements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetIntegration">reset_integration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_action` <a name="put_action" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putAction"></a>

```python
def put_action(
  ssm_automation: typing.Union[IResolvable, typing.List[SsmincidentsResponsePlanActionSsmAutomation]] = None
) -> None
```

###### `ssm_automation`<sup>Optional</sup> <a name="ssm_automation" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putAction.parameter.ssmAutomation"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation">SsmincidentsResponsePlanActionSsmAutomation</a>]]

ssm_automation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#ssm_automation SsmincidentsResponsePlan#ssm_automation}

---

##### `put_incident_template` <a name="put_incident_template" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIncidentTemplate"></a>

```python
def put_incident_template(
  impact: typing.Union[int, float],
  title: str,
  dedupe_string: str = None,
  incident_tags: typing.Mapping[str] = None,
  notification_target: typing.Union[IResolvable, typing.List[SsmincidentsResponsePlanIncidentTemplateNotificationTarget]] = None,
  summary: str = None
) -> None
```

###### `impact`<sup>Required</sup> <a name="impact" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIncidentTemplate.parameter.impact"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#impact SsmincidentsResponsePlan#impact}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIncidentTemplate.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#title SsmincidentsResponsePlan#title}.

---

###### `dedupe_string`<sup>Optional</sup> <a name="dedupe_string" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIncidentTemplate.parameter.dedupeString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#dedupe_string SsmincidentsResponsePlan#dedupe_string}.

---

###### `incident_tags`<sup>Optional</sup> <a name="incident_tags" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIncidentTemplate.parameter.incidentTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#incident_tags SsmincidentsResponsePlan#incident_tags}.

---

###### `notification_target`<sup>Optional</sup> <a name="notification_target" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIncidentTemplate.parameter.notificationTarget"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget">SsmincidentsResponsePlanIncidentTemplateNotificationTarget</a>]]

notification_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#notification_target SsmincidentsResponsePlan#notification_target}

---

###### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIncidentTemplate.parameter.summary"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#summary SsmincidentsResponsePlan#summary}.

---

##### `put_integration` <a name="put_integration" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIntegration"></a>

```python
def put_integration(
  pagerduty: typing.Union[IResolvable, typing.List[SsmincidentsResponsePlanIntegrationPagerduty]] = None
) -> None
```

###### `pagerduty`<sup>Optional</sup> <a name="pagerduty" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIntegration.parameter.pagerduty"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty">SsmincidentsResponsePlanIntegrationPagerduty</a>]]

pagerduty block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#pagerduty SsmincidentsResponsePlan#pagerduty}

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_chat_channel` <a name="reset_chat_channel" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetChatChannel"></a>

```python
def reset_chat_channel() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_engagements` <a name="reset_engagements" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetEngagements"></a>

```python
def reset_engagements() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_integration` <a name="reset_integration" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetIntegration"></a>

```python
def reset_integration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SsmincidentsResponsePlan resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlan.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlan.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlan.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlan.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SsmincidentsResponsePlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SsmincidentsResponsePlan to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SsmincidentsResponsePlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SsmincidentsResponsePlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference">SsmincidentsResponsePlanActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.incidentTemplate">incident_template</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference">SsmincidentsResponsePlanIncidentTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.integration">integration</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference">SsmincidentsResponsePlanIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.actionInput">action_input</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction">SsmincidentsResponsePlanAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.chatChannelInput">chat_channel_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.engagementsInput">engagements_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.incidentTemplateInput">incident_template_input</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.integrationInput">integration_input</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration">SsmincidentsResponsePlanIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.chatChannel">chat_channel</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.engagements">engagements</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.action"></a>

```python
action: SsmincidentsResponsePlanActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference">SsmincidentsResponsePlanActionOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `incident_template`<sup>Required</sup> <a name="incident_template" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.incidentTemplate"></a>

```python
incident_template: SsmincidentsResponsePlanIncidentTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference">SsmincidentsResponsePlanIncidentTemplateOutputReference</a>

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.integration"></a>

```python
integration: SsmincidentsResponsePlanIntegrationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference">SsmincidentsResponsePlanIntegrationOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.actionInput"></a>

```python
action_input: SsmincidentsResponsePlanAction
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction">SsmincidentsResponsePlanAction</a>

---

##### `chat_channel_input`<sup>Optional</sup> <a name="chat_channel_input" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.chatChannelInput"></a>

```python
chat_channel_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `engagements_input`<sup>Optional</sup> <a name="engagements_input" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.engagementsInput"></a>

```python
engagements_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `incident_template_input`<sup>Optional</sup> <a name="incident_template_input" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.incidentTemplateInput"></a>

```python
incident_template_input: SsmincidentsResponsePlanIncidentTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a>

---

##### `integration_input`<sup>Optional</sup> <a name="integration_input" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.integrationInput"></a>

```python
integration_input: SsmincidentsResponsePlanIntegration
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration">SsmincidentsResponsePlanIntegration</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `chat_channel`<sup>Required</sup> <a name="chat_channel" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.chatChannel"></a>

```python
chat_channel: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `engagements`<sup>Required</sup> <a name="engagements" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.engagements"></a>

```python
engagements: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SsmincidentsResponsePlanAction <a name="SsmincidentsResponsePlanAction" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanAction(
  ssm_automation: typing.Union[IResolvable, typing.List[SsmincidentsResponsePlanActionSsmAutomation]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction.property.ssmAutomation">ssm_automation</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation">SsmincidentsResponsePlanActionSsmAutomation</a>]]</code> | ssm_automation block. |

---

##### `ssm_automation`<sup>Optional</sup> <a name="ssm_automation" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction.property.ssmAutomation"></a>

```python
ssm_automation: typing.Union[IResolvable, typing.List[SsmincidentsResponsePlanActionSsmAutomation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation">SsmincidentsResponsePlanActionSsmAutomation</a>]]

ssm_automation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#ssm_automation SsmincidentsResponsePlan#ssm_automation}

---

### SsmincidentsResponsePlanActionSsmAutomation <a name="SsmincidentsResponsePlanActionSsmAutomation" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation(
  document_name: str,
  role_arn: str,
  document_version: str = None,
  dynamic_parameters: typing.Mapping[str] = None,
  parameter: typing.Union[IResolvable, typing.List[SsmincidentsResponsePlanActionSsmAutomationParameter]] = None,
  target_account: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.documentName">document_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#document_name SsmincidentsResponsePlan#document_name}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#role_arn SsmincidentsResponsePlan#role_arn}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.documentVersion">document_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#document_version SsmincidentsResponsePlan#document_version}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.dynamicParameters">dynamic_parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#dynamic_parameters SsmincidentsResponsePlan#dynamic_parameters}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.parameter">parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter">SsmincidentsResponsePlanActionSsmAutomationParameter</a>]]</code> | parameter block. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.targetAccount">target_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#target_account SsmincidentsResponsePlan#target_account}. |

---

##### `document_name`<sup>Required</sup> <a name="document_name" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.documentName"></a>

```python
document_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#document_name SsmincidentsResponsePlan#document_name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#role_arn SsmincidentsResponsePlan#role_arn}.

---

##### `document_version`<sup>Optional</sup> <a name="document_version" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.documentVersion"></a>

```python
document_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#document_version SsmincidentsResponsePlan#document_version}.

---

##### `dynamic_parameters`<sup>Optional</sup> <a name="dynamic_parameters" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.dynamicParameters"></a>

```python
dynamic_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#dynamic_parameters SsmincidentsResponsePlan#dynamic_parameters}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.parameter"></a>

```python
parameter: typing.Union[IResolvable, typing.List[SsmincidentsResponsePlanActionSsmAutomationParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter">SsmincidentsResponsePlanActionSsmAutomationParameter</a>]]

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#parameter SsmincidentsResponsePlan#parameter}

---

##### `target_account`<sup>Optional</sup> <a name="target_account" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.targetAccount"></a>

```python
target_account: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#target_account SsmincidentsResponsePlan#target_account}.

---

### SsmincidentsResponsePlanActionSsmAutomationParameter <a name="SsmincidentsResponsePlanActionSsmAutomationParameter" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#values SsmincidentsResponsePlan#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#values SsmincidentsResponsePlan#values}.

---

### SsmincidentsResponsePlanConfig <a name="SsmincidentsResponsePlanConfig" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  incident_template: SsmincidentsResponsePlanIncidentTemplate,
  name: str,
  action: SsmincidentsResponsePlanAction = None,
  chat_channel: typing.List[str] = None,
  display_name: str = None,
  engagements: typing.List[str] = None,
  id: str = None,
  integration: SsmincidentsResponsePlanIntegration = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.incidentTemplate">incident_template</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a></code> | incident_template block. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction">SsmincidentsResponsePlanAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.chatChannel">chat_channel</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#chat_channel SsmincidentsResponsePlan#chat_channel}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#display_name SsmincidentsResponsePlan#display_name}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.engagements">engagements</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#engagements SsmincidentsResponsePlan#engagements}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#id SsmincidentsResponsePlan#id}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.integration">integration</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration">SsmincidentsResponsePlanIntegration</a></code> | integration block. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#tags SsmincidentsResponsePlan#tags}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#tags_all SsmincidentsResponsePlan#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `incident_template`<sup>Required</sup> <a name="incident_template" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.incidentTemplate"></a>

```python
incident_template: SsmincidentsResponsePlanIncidentTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a>

incident_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#incident_template SsmincidentsResponsePlan#incident_template}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.action"></a>

```python
action: SsmincidentsResponsePlanAction
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction">SsmincidentsResponsePlanAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#action SsmincidentsResponsePlan#action}

---

##### `chat_channel`<sup>Optional</sup> <a name="chat_channel" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.chatChannel"></a>

```python
chat_channel: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#chat_channel SsmincidentsResponsePlan#chat_channel}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#display_name SsmincidentsResponsePlan#display_name}.

---

##### `engagements`<sup>Optional</sup> <a name="engagements" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.engagements"></a>

```python
engagements: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#engagements SsmincidentsResponsePlan#engagements}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#id SsmincidentsResponsePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration`<sup>Optional</sup> <a name="integration" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.integration"></a>

```python
integration: SsmincidentsResponsePlanIntegration
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration">SsmincidentsResponsePlanIntegration</a>

integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#integration SsmincidentsResponsePlan#integration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#tags SsmincidentsResponsePlan#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#tags_all SsmincidentsResponsePlan#tags_all}.

---

### SsmincidentsResponsePlanIncidentTemplate <a name="SsmincidentsResponsePlanIncidentTemplate" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate(
  impact: typing.Union[int, float],
  title: str,
  dedupe_string: str = None,
  incident_tags: typing.Mapping[str] = None,
  notification_target: typing.Union[IResolvable, typing.List[SsmincidentsResponsePlanIncidentTemplateNotificationTarget]] = None,
  summary: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.impact">impact</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#impact SsmincidentsResponsePlan#impact}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#title SsmincidentsResponsePlan#title}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.dedupeString">dedupe_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#dedupe_string SsmincidentsResponsePlan#dedupe_string}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.incidentTags">incident_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#incident_tags SsmincidentsResponsePlan#incident_tags}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.notificationTarget">notification_target</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget">SsmincidentsResponsePlanIncidentTemplateNotificationTarget</a>]]</code> | notification_target block. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.summary">summary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#summary SsmincidentsResponsePlan#summary}. |

---

##### `impact`<sup>Required</sup> <a name="impact" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.impact"></a>

```python
impact: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#impact SsmincidentsResponsePlan#impact}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#title SsmincidentsResponsePlan#title}.

---

##### `dedupe_string`<sup>Optional</sup> <a name="dedupe_string" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.dedupeString"></a>

```python
dedupe_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#dedupe_string SsmincidentsResponsePlan#dedupe_string}.

---

##### `incident_tags`<sup>Optional</sup> <a name="incident_tags" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.incidentTags"></a>

```python
incident_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#incident_tags SsmincidentsResponsePlan#incident_tags}.

---

##### `notification_target`<sup>Optional</sup> <a name="notification_target" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.notificationTarget"></a>

```python
notification_target: typing.Union[IResolvable, typing.List[SsmincidentsResponsePlanIncidentTemplateNotificationTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget">SsmincidentsResponsePlanIncidentTemplateNotificationTarget</a>]]

notification_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#notification_target SsmincidentsResponsePlan#notification_target}

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.summary"></a>

```python
summary: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#summary SsmincidentsResponsePlan#summary}.

---

### SsmincidentsResponsePlanIncidentTemplateNotificationTarget <a name="SsmincidentsResponsePlanIncidentTemplateNotificationTarget" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget(
  sns_topic_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#sns_topic_arn SsmincidentsResponsePlan#sns_topic_arn}. |

---

##### `sns_topic_arn`<sup>Required</sup> <a name="sns_topic_arn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#sns_topic_arn SsmincidentsResponsePlan#sns_topic_arn}.

---

### SsmincidentsResponsePlanIntegration <a name="SsmincidentsResponsePlanIntegration" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration(
  pagerduty: typing.Union[IResolvable, typing.List[SsmincidentsResponsePlanIntegrationPagerduty]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration.property.pagerduty">pagerduty</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty">SsmincidentsResponsePlanIntegrationPagerduty</a>]]</code> | pagerduty block. |

---

##### `pagerduty`<sup>Optional</sup> <a name="pagerduty" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration.property.pagerduty"></a>

```python
pagerduty: typing.Union[IResolvable, typing.List[SsmincidentsResponsePlanIntegrationPagerduty]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty">SsmincidentsResponsePlanIntegrationPagerduty</a>]]

pagerduty block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#pagerduty SsmincidentsResponsePlan#pagerduty}

---

### SsmincidentsResponsePlanIntegrationPagerduty <a name="SsmincidentsResponsePlanIntegrationPagerduty" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty(
  name: str,
  secret_id: str,
  service_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty.property.secretId">secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#secret_id SsmincidentsResponsePlan#secret_id}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty.property.serviceId">service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#service_id SsmincidentsResponsePlan#service_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}.

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#secret_id SsmincidentsResponsePlan#secret_id}.

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/ssmincidents_response_plan#service_id SsmincidentsResponsePlan#service_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmincidentsResponsePlanActionOutputReference <a name="SsmincidentsResponsePlanActionOutputReference" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.putSsmAutomation">put_ssm_automation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.resetSsmAutomation">reset_ssm_automation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ssm_automation` <a name="put_ssm_automation" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.putSsmAutomation"></a>

```python
def put_ssm_automation(
  value: typing.Union[IResolvable, typing.List[SsmincidentsResponsePlanActionSsmAutomation]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.putSsmAutomation.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation">SsmincidentsResponsePlanActionSsmAutomation</a>]]

---

##### `reset_ssm_automation` <a name="reset_ssm_automation" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.resetSsmAutomation"></a>

```python
def reset_ssm_automation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.property.ssmAutomation">ssm_automation</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList">SsmincidentsResponsePlanActionSsmAutomationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.property.ssmAutomationInput">ssm_automation_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation">SsmincidentsResponsePlanActionSsmAutomation</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction">SsmincidentsResponsePlanAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ssm_automation`<sup>Required</sup> <a name="ssm_automation" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.property.ssmAutomation"></a>

```python
ssm_automation: SsmincidentsResponsePlanActionSsmAutomationList
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList">SsmincidentsResponsePlanActionSsmAutomationList</a>

---

##### `ssm_automation_input`<sup>Optional</sup> <a name="ssm_automation_input" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.property.ssmAutomationInput"></a>

```python
ssm_automation_input: typing.Union[IResolvable, typing.List[SsmincidentsResponsePlanActionSsmAutomation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation">SsmincidentsResponsePlanActionSsmAutomation</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.property.internalValue"></a>

```python
internal_value: SsmincidentsResponsePlanAction
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction">SsmincidentsResponsePlanAction</a>

---


### SsmincidentsResponsePlanActionSsmAutomationList <a name="SsmincidentsResponsePlanActionSsmAutomationList" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmincidentsResponsePlanActionSsmAutomationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation">SsmincidentsResponsePlanActionSsmAutomation</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SsmincidentsResponsePlanActionSsmAutomation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation">SsmincidentsResponsePlanActionSsmAutomation</a>]]

---


### SsmincidentsResponsePlanActionSsmAutomationOutputReference <a name="SsmincidentsResponsePlanActionSsmAutomationOutputReference" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.putParameter">put_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resetDocumentVersion">reset_document_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resetDynamicParameters">reset_dynamic_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resetParameter">reset_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resetTargetAccount">reset_target_account</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameter` <a name="put_parameter" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.putParameter"></a>

```python
def put_parameter(
  value: typing.Union[IResolvable, typing.List[SsmincidentsResponsePlanActionSsmAutomationParameter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.putParameter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter">SsmincidentsResponsePlanActionSsmAutomationParameter</a>]]

---

##### `reset_document_version` <a name="reset_document_version" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resetDocumentVersion"></a>

```python
def reset_document_version() -> None
```

##### `reset_dynamic_parameters` <a name="reset_dynamic_parameters" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resetDynamicParameters"></a>

```python
def reset_dynamic_parameters() -> None
```

##### `reset_parameter` <a name="reset_parameter" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resetParameter"></a>

```python
def reset_parameter() -> None
```

##### `reset_target_account` <a name="reset_target_account" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resetTargetAccount"></a>

```python
def reset_target_account() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList">SsmincidentsResponsePlanActionSsmAutomationParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentNameInput">document_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentVersionInput">document_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.dynamicParametersInput">dynamic_parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.parameterInput">parameter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter">SsmincidentsResponsePlanActionSsmAutomationParameter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.targetAccountInput">target_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentName">document_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentVersion">document_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.dynamicParameters">dynamic_parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.targetAccount">target_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation">SsmincidentsResponsePlanActionSsmAutomation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.parameter"></a>

```python
parameter: SsmincidentsResponsePlanActionSsmAutomationParameterList
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList">SsmincidentsResponsePlanActionSsmAutomationParameterList</a>

---

##### `document_name_input`<sup>Optional</sup> <a name="document_name_input" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentNameInput"></a>

```python
document_name_input: str
```

- *Type:* str

---

##### `document_version_input`<sup>Optional</sup> <a name="document_version_input" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentVersionInput"></a>

```python
document_version_input: str
```

- *Type:* str

---

##### `dynamic_parameters_input`<sup>Optional</sup> <a name="dynamic_parameters_input" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.dynamicParametersInput"></a>

```python
dynamic_parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `parameter_input`<sup>Optional</sup> <a name="parameter_input" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.parameterInput"></a>

```python
parameter_input: typing.Union[IResolvable, typing.List[SsmincidentsResponsePlanActionSsmAutomationParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter">SsmincidentsResponsePlanActionSsmAutomationParameter</a>]]

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `target_account_input`<sup>Optional</sup> <a name="target_account_input" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.targetAccountInput"></a>

```python
target_account_input: str
```

- *Type:* str

---

##### `document_name`<sup>Required</sup> <a name="document_name" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentName"></a>

```python
document_name: str
```

- *Type:* str

---

##### `document_version`<sup>Required</sup> <a name="document_version" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentVersion"></a>

```python
document_version: str
```

- *Type:* str

---

##### `dynamic_parameters`<sup>Required</sup> <a name="dynamic_parameters" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.dynamicParameters"></a>

```python
dynamic_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `target_account`<sup>Required</sup> <a name="target_account" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.targetAccount"></a>

```python
target_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SsmincidentsResponsePlanActionSsmAutomation]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation">SsmincidentsResponsePlanActionSsmAutomation</a>]

---


### SsmincidentsResponsePlanActionSsmAutomationParameterList <a name="SsmincidentsResponsePlanActionSsmAutomationParameterList" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter">SsmincidentsResponsePlanActionSsmAutomationParameter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SsmincidentsResponsePlanActionSsmAutomationParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter">SsmincidentsResponsePlanActionSsmAutomationParameter</a>]]

---


### SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference <a name="SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter">SsmincidentsResponsePlanActionSsmAutomationParameter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SsmincidentsResponsePlanActionSsmAutomationParameter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter">SsmincidentsResponsePlanActionSsmAutomationParameter</a>]

---


### SsmincidentsResponsePlanIncidentTemplateNotificationTargetList <a name="SsmincidentsResponsePlanIncidentTemplateNotificationTargetList" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget">SsmincidentsResponsePlanIncidentTemplateNotificationTarget</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SsmincidentsResponsePlanIncidentTemplateNotificationTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget">SsmincidentsResponsePlanIncidentTemplateNotificationTarget</a>]]

---


### SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference <a name="SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.snsTopicArnInput">sns_topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget">SsmincidentsResponsePlanIncidentTemplateNotificationTarget</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sns_topic_arn_input`<sup>Optional</sup> <a name="sns_topic_arn_input" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.snsTopicArnInput"></a>

```python
sns_topic_arn_input: str
```

- *Type:* str

---

##### `sns_topic_arn`<sup>Required</sup> <a name="sns_topic_arn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SsmincidentsResponsePlanIncidentTemplateNotificationTarget]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget">SsmincidentsResponsePlanIncidentTemplateNotificationTarget</a>]

---


### SsmincidentsResponsePlanIncidentTemplateOutputReference <a name="SsmincidentsResponsePlanIncidentTemplateOutputReference" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putNotificationTarget">put_notification_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetDedupeString">reset_dedupe_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetIncidentTags">reset_incident_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetNotificationTarget">reset_notification_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetSummary">reset_summary</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_notification_target` <a name="put_notification_target" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putNotificationTarget"></a>

```python
def put_notification_target(
  value: typing.Union[IResolvable, typing.List[SsmincidentsResponsePlanIncidentTemplateNotificationTarget]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putNotificationTarget.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget">SsmincidentsResponsePlanIncidentTemplateNotificationTarget</a>]]

---

##### `reset_dedupe_string` <a name="reset_dedupe_string" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetDedupeString"></a>

```python
def reset_dedupe_string() -> None
```

##### `reset_incident_tags` <a name="reset_incident_tags" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetIncidentTags"></a>

```python
def reset_incident_tags() -> None
```

##### `reset_notification_target` <a name="reset_notification_target" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetNotificationTarget"></a>

```python
def reset_notification_target() -> None
```

##### `reset_summary` <a name="reset_summary" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetSummary"></a>

```python
def reset_summary() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTarget">notification_target</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList">SsmincidentsResponsePlanIncidentTemplateNotificationTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeStringInput">dedupe_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.impactInput">impact_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTagsInput">incident_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTargetInput">notification_target_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget">SsmincidentsResponsePlanIncidentTemplateNotificationTarget</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.summaryInput">summary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeString">dedupe_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.impact">impact</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTags">incident_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `notification_target`<sup>Required</sup> <a name="notification_target" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTarget"></a>

```python
notification_target: SsmincidentsResponsePlanIncidentTemplateNotificationTargetList
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList">SsmincidentsResponsePlanIncidentTemplateNotificationTargetList</a>

---

##### `dedupe_string_input`<sup>Optional</sup> <a name="dedupe_string_input" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeStringInput"></a>

```python
dedupe_string_input: str
```

- *Type:* str

---

##### `impact_input`<sup>Optional</sup> <a name="impact_input" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.impactInput"></a>

```python
impact_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `incident_tags_input`<sup>Optional</sup> <a name="incident_tags_input" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTagsInput"></a>

```python
incident_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `notification_target_input`<sup>Optional</sup> <a name="notification_target_input" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTargetInput"></a>

```python
notification_target_input: typing.Union[IResolvable, typing.List[SsmincidentsResponsePlanIncidentTemplateNotificationTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget">SsmincidentsResponsePlanIncidentTemplateNotificationTarget</a>]]

---

##### `summary_input`<sup>Optional</sup> <a name="summary_input" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.summaryInput"></a>

```python
summary_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `dedupe_string`<sup>Required</sup> <a name="dedupe_string" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeString"></a>

```python
dedupe_string: str
```

- *Type:* str

---

##### `impact`<sup>Required</sup> <a name="impact" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.impact"></a>

```python
impact: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `incident_tags`<sup>Required</sup> <a name="incident_tags" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTags"></a>

```python
incident_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.internalValue"></a>

```python
internal_value: SsmincidentsResponsePlanIncidentTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a>

---


### SsmincidentsResponsePlanIntegrationOutputReference <a name="SsmincidentsResponsePlanIntegrationOutputReference" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.putPagerduty">put_pagerduty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.resetPagerduty">reset_pagerduty</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_pagerduty` <a name="put_pagerduty" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.putPagerduty"></a>

```python
def put_pagerduty(
  value: typing.Union[IResolvable, typing.List[SsmincidentsResponsePlanIntegrationPagerduty]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.putPagerduty.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty">SsmincidentsResponsePlanIntegrationPagerduty</a>]]

---

##### `reset_pagerduty` <a name="reset_pagerduty" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.resetPagerduty"></a>

```python
def reset_pagerduty() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.property.pagerduty">pagerduty</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList">SsmincidentsResponsePlanIntegrationPagerdutyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.property.pagerdutyInput">pagerduty_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty">SsmincidentsResponsePlanIntegrationPagerduty</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration">SsmincidentsResponsePlanIntegration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pagerduty`<sup>Required</sup> <a name="pagerduty" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.property.pagerduty"></a>

```python
pagerduty: SsmincidentsResponsePlanIntegrationPagerdutyList
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList">SsmincidentsResponsePlanIntegrationPagerdutyList</a>

---

##### `pagerduty_input`<sup>Optional</sup> <a name="pagerduty_input" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.property.pagerdutyInput"></a>

```python
pagerduty_input: typing.Union[IResolvable, typing.List[SsmincidentsResponsePlanIntegrationPagerduty]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty">SsmincidentsResponsePlanIntegrationPagerduty</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.property.internalValue"></a>

```python
internal_value: SsmincidentsResponsePlanIntegration
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration">SsmincidentsResponsePlanIntegration</a>

---


### SsmincidentsResponsePlanIntegrationPagerdutyList <a name="SsmincidentsResponsePlanIntegrationPagerdutyList" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmincidentsResponsePlanIntegrationPagerdutyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty">SsmincidentsResponsePlanIntegrationPagerduty</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SsmincidentsResponsePlanIntegrationPagerduty]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty">SsmincidentsResponsePlanIntegrationPagerduty</a>]]

---


### SsmincidentsResponsePlanIntegrationPagerdutyOutputReference <a name="SsmincidentsResponsePlanIntegrationPagerdutyOutputReference" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.serviceIdInput">service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty">SsmincidentsResponsePlanIntegrationPagerduty</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `service_id_input`<sup>Optional</sup> <a name="service_id_input" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.serviceIdInput"></a>

```python
service_id_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SsmincidentsResponsePlanIntegrationPagerduty]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty">SsmincidentsResponsePlanIntegrationPagerduty</a>]

---



