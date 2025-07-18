# `rolesanywhereTrustAnchor` Submodule <a name="`rolesanywhereTrustAnchor` Submodule" id="@cdktf/provider-aws.rolesanywhereTrustAnchor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RolesanywhereTrustAnchor <a name="RolesanywhereTrustAnchor" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor aws_rolesanywhere_trust_anchor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rolesanywhere_trust_anchor

rolesanywhereTrustAnchor.RolesanywhereTrustAnchor(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  source: RolesanywhereTrustAnchorSource,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  notification_settings: typing.Union[IResolvable, typing.List[RolesanywhereTrustAnchorNotificationSettings]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#name RolesanywhereTrustAnchor#name}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource">RolesanywhereTrustAnchorSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#enabled RolesanywhereTrustAnchor#enabled}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#id RolesanywhereTrustAnchor#id}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.notificationSettings">notification_settings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings">RolesanywhereTrustAnchorNotificationSettings</a>]]</code> | notification_settings block. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#tags RolesanywhereTrustAnchor#tags}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#tags_all RolesanywhereTrustAnchor#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#name RolesanywhereTrustAnchor#name}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource">RolesanywhereTrustAnchorSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#source RolesanywhereTrustAnchor#source}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#enabled RolesanywhereTrustAnchor#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#id RolesanywhereTrustAnchor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notification_settings`<sup>Optional</sup> <a name="notification_settings" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.notificationSettings"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings">RolesanywhereTrustAnchorNotificationSettings</a>]]

notification_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#notification_settings RolesanywhereTrustAnchor#notification_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#tags RolesanywhereTrustAnchor#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#tags_all RolesanywhereTrustAnchor#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.putNotificationSettings">put_notification_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.resetNotificationSettings">reset_notification_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_notification_settings` <a name="put_notification_settings" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.putNotificationSettings"></a>

```python
def put_notification_settings(
  value: typing.Union[IResolvable, typing.List[RolesanywhereTrustAnchorNotificationSettings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.putNotificationSettings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings">RolesanywhereTrustAnchorNotificationSettings</a>]]

---

##### `put_source` <a name="put_source" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.putSource"></a>

```python
def put_source(
  source_data: RolesanywhereTrustAnchorSourceSourceData,
  source_type: str
) -> None
```

###### `source_data`<sup>Required</sup> <a name="source_data" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.putSource.parameter.sourceData"></a>

- *Type:* <a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData">RolesanywhereTrustAnchorSourceSourceData</a>

source_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#source_data RolesanywhereTrustAnchor#source_data}

---

###### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.putSource.parameter.sourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#source_type RolesanywhereTrustAnchor#source_type}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_notification_settings` <a name="reset_notification_settings" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.resetNotificationSettings"></a>

```python
def reset_notification_settings() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RolesanywhereTrustAnchor resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import rolesanywhere_trust_anchor

rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import rolesanywhere_trust_anchor

rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import rolesanywhere_trust_anchor

rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import rolesanywhere_trust_anchor

rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RolesanywhereTrustAnchor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RolesanywhereTrustAnchor to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RolesanywhereTrustAnchor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RolesanywhereTrustAnchor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.notificationSettings">notification_settings</a></code> | <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList">RolesanywhereTrustAnchorNotificationSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.source">source</a></code> | <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference">RolesanywhereTrustAnchorSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.notificationSettingsInput">notification_settings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings">RolesanywhereTrustAnchorNotificationSettings</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.sourceInput">source_input</a></code> | <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource">RolesanywhereTrustAnchorSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `notification_settings`<sup>Required</sup> <a name="notification_settings" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.notificationSettings"></a>

```python
notification_settings: RolesanywhereTrustAnchorNotificationSettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList">RolesanywhereTrustAnchorNotificationSettingsList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.source"></a>

```python
source: RolesanywhereTrustAnchorSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference">RolesanywhereTrustAnchorSourceOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notification_settings_input`<sup>Optional</sup> <a name="notification_settings_input" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.notificationSettingsInput"></a>

```python
notification_settings_input: typing.Union[IResolvable, typing.List[RolesanywhereTrustAnchorNotificationSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings">RolesanywhereTrustAnchorNotificationSettings</a>]]

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.sourceInput"></a>

```python
source_input: RolesanywhereTrustAnchorSource
```

- *Type:* <a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource">RolesanywhereTrustAnchorSource</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RolesanywhereTrustAnchorConfig <a name="RolesanywhereTrustAnchorConfig" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rolesanywhere_trust_anchor

rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  source: RolesanywhereTrustAnchorSource,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  notification_settings: typing.Union[IResolvable, typing.List[RolesanywhereTrustAnchorNotificationSettings]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#name RolesanywhereTrustAnchor#name}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource">RolesanywhereTrustAnchorSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#enabled RolesanywhereTrustAnchor#enabled}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#id RolesanywhereTrustAnchor#id}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.notificationSettings">notification_settings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings">RolesanywhereTrustAnchorNotificationSettings</a>]]</code> | notification_settings block. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#tags RolesanywhereTrustAnchor#tags}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#tags_all RolesanywhereTrustAnchor#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#name RolesanywhereTrustAnchor#name}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.source"></a>

```python
source: RolesanywhereTrustAnchorSource
```

- *Type:* <a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource">RolesanywhereTrustAnchorSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#source RolesanywhereTrustAnchor#source}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#enabled RolesanywhereTrustAnchor#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#id RolesanywhereTrustAnchor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notification_settings`<sup>Optional</sup> <a name="notification_settings" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.notificationSettings"></a>

```python
notification_settings: typing.Union[IResolvable, typing.List[RolesanywhereTrustAnchorNotificationSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings">RolesanywhereTrustAnchorNotificationSettings</a>]]

notification_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#notification_settings RolesanywhereTrustAnchor#notification_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#tags RolesanywhereTrustAnchor#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#tags_all RolesanywhereTrustAnchor#tags_all}.

---

### RolesanywhereTrustAnchorNotificationSettings <a name="RolesanywhereTrustAnchorNotificationSettings" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rolesanywhere_trust_anchor

rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings(
  channel: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  event: str = None,
  threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings.property.channel">channel</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#channel RolesanywhereTrustAnchor#channel}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#enabled RolesanywhereTrustAnchor#enabled}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings.property.event">event</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#event RolesanywhereTrustAnchor#event}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#threshold RolesanywhereTrustAnchor#threshold}. |

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings.property.channel"></a>

```python
channel: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#channel RolesanywhereTrustAnchor#channel}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#enabled RolesanywhereTrustAnchor#enabled}.

---

##### `event`<sup>Optional</sup> <a name="event" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings.property.event"></a>

```python
event: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#event RolesanywhereTrustAnchor#event}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#threshold RolesanywhereTrustAnchor#threshold}.

---

### RolesanywhereTrustAnchorSource <a name="RolesanywhereTrustAnchorSource" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rolesanywhere_trust_anchor

rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource(
  source_data: RolesanywhereTrustAnchorSourceSourceData,
  source_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource.property.sourceData">source_data</a></code> | <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData">RolesanywhereTrustAnchorSourceSourceData</a></code> | source_data block. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource.property.sourceType">source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#source_type RolesanywhereTrustAnchor#source_type}. |

---

##### `source_data`<sup>Required</sup> <a name="source_data" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource.property.sourceData"></a>

```python
source_data: RolesanywhereTrustAnchorSourceSourceData
```

- *Type:* <a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData">RolesanywhereTrustAnchorSourceSourceData</a>

source_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#source_data RolesanywhereTrustAnchor#source_data}

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#source_type RolesanywhereTrustAnchor#source_type}.

---

### RolesanywhereTrustAnchorSourceSourceData <a name="RolesanywhereTrustAnchorSourceSourceData" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rolesanywhere_trust_anchor

rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData(
  acm_pca_arn: str = None,
  x509_certificate_data: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData.property.acmPcaArn">acm_pca_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#acm_pca_arn RolesanywhereTrustAnchor#acm_pca_arn}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData.property.x509CertificateData">x509_certificate_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#x509_certificate_data RolesanywhereTrustAnchor#x509_certificate_data}. |

---

##### `acm_pca_arn`<sup>Optional</sup> <a name="acm_pca_arn" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData.property.acmPcaArn"></a>

```python
acm_pca_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#acm_pca_arn RolesanywhereTrustAnchor#acm_pca_arn}.

---

##### `x509_certificate_data`<sup>Optional</sup> <a name="x509_certificate_data" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData.property.x509CertificateData"></a>

```python
x509_certificate_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#x509_certificate_data RolesanywhereTrustAnchor#x509_certificate_data}.

---

## Classes <a name="Classes" id="Classes"></a>

### RolesanywhereTrustAnchorNotificationSettingsList <a name="RolesanywhereTrustAnchorNotificationSettingsList" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rolesanywhere_trust_anchor

rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RolesanywhereTrustAnchorNotificationSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings">RolesanywhereTrustAnchorNotificationSettings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RolesanywhereTrustAnchorNotificationSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings">RolesanywhereTrustAnchorNotificationSettings</a>]]

---


### RolesanywhereTrustAnchorNotificationSettingsOutputReference <a name="RolesanywhereTrustAnchorNotificationSettingsOutputReference" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rolesanywhere_trust_anchor

rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resetChannel">reset_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resetEvent">reset_event</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resetThreshold">reset_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_channel` <a name="reset_channel" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resetChannel"></a>

```python
def reset_channel() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_event` <a name="reset_event" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resetEvent"></a>

```python
def reset_event() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resetThreshold"></a>

```python
def reset_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.configuredBy">configured_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.channelInput">channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.eventInput">event_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.event">event</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings">RolesanywhereTrustAnchorNotificationSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configured_by`<sup>Required</sup> <a name="configured_by" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.configuredBy"></a>

```python
configured_by: str
```

- *Type:* str

---

##### `channel_input`<sup>Optional</sup> <a name="channel_input" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.channelInput"></a>

```python
channel_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `event_input`<sup>Optional</sup> <a name="event_input" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.eventInput"></a>

```python
event_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.event"></a>

```python
event: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RolesanywhereTrustAnchorNotificationSettings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings">RolesanywhereTrustAnchorNotificationSettings</a>]

---


### RolesanywhereTrustAnchorSourceOutputReference <a name="RolesanywhereTrustAnchorSourceOutputReference" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rolesanywhere_trust_anchor

rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.putSourceData">put_source_data</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_source_data` <a name="put_source_data" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.putSourceData"></a>

```python
def put_source_data(
  acm_pca_arn: str = None,
  x509_certificate_data: str = None
) -> None
```

###### `acm_pca_arn`<sup>Optional</sup> <a name="acm_pca_arn" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.putSourceData.parameter.acmPcaArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#acm_pca_arn RolesanywhereTrustAnchor#acm_pca_arn}.

---

###### `x509_certificate_data`<sup>Optional</sup> <a name="x509_certificate_data" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.putSourceData.parameter.x509CertificateData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rolesanywhere_trust_anchor#x509_certificate_data RolesanywhereTrustAnchor#x509_certificate_data}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.sourceData">source_data</a></code> | <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference">RolesanywhereTrustAnchorSourceSourceDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.sourceDataInput">source_data_input</a></code> | <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData">RolesanywhereTrustAnchorSourceSourceData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.sourceTypeInput">source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource">RolesanywhereTrustAnchorSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_data`<sup>Required</sup> <a name="source_data" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.sourceData"></a>

```python
source_data: RolesanywhereTrustAnchorSourceSourceDataOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference">RolesanywhereTrustAnchorSourceSourceDataOutputReference</a>

---

##### `source_data_input`<sup>Optional</sup> <a name="source_data_input" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.sourceDataInput"></a>

```python
source_data_input: RolesanywhereTrustAnchorSourceSourceData
```

- *Type:* <a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData">RolesanywhereTrustAnchorSourceSourceData</a>

---

##### `source_type_input`<sup>Optional</sup> <a name="source_type_input" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.sourceTypeInput"></a>

```python
source_type_input: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.internalValue"></a>

```python
internal_value: RolesanywhereTrustAnchorSource
```

- *Type:* <a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource">RolesanywhereTrustAnchorSource</a>

---


### RolesanywhereTrustAnchorSourceSourceDataOutputReference <a name="RolesanywhereTrustAnchorSourceSourceDataOutputReference" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rolesanywhere_trust_anchor

rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.resetAcmPcaArn">reset_acm_pca_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.resetX509CertificateData">reset_x509_certificate_data</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_acm_pca_arn` <a name="reset_acm_pca_arn" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.resetAcmPcaArn"></a>

```python
def reset_acm_pca_arn() -> None
```

##### `reset_x509_certificate_data` <a name="reset_x509_certificate_data" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.resetX509CertificateData"></a>

```python
def reset_x509_certificate_data() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.acmPcaArnInput">acm_pca_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.x509CertificateDataInput">x509_certificate_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.acmPcaArn">acm_pca_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.x509CertificateData">x509_certificate_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData">RolesanywhereTrustAnchorSourceSourceData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `acm_pca_arn_input`<sup>Optional</sup> <a name="acm_pca_arn_input" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.acmPcaArnInput"></a>

```python
acm_pca_arn_input: str
```

- *Type:* str

---

##### `x509_certificate_data_input`<sup>Optional</sup> <a name="x509_certificate_data_input" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.x509CertificateDataInput"></a>

```python
x509_certificate_data_input: str
```

- *Type:* str

---

##### `acm_pca_arn`<sup>Required</sup> <a name="acm_pca_arn" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.acmPcaArn"></a>

```python
acm_pca_arn: str
```

- *Type:* str

---

##### `x509_certificate_data`<sup>Required</sup> <a name="x509_certificate_data" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.x509CertificateData"></a>

```python
x509_certificate_data: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.internalValue"></a>

```python
internal_value: RolesanywhereTrustAnchorSourceSourceData
```

- *Type:* <a href="#@cdktf/provider-aws.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData">RolesanywhereTrustAnchorSourceSourceData</a>

---



