# `wafv2RuleGroup` Submodule <a name="`wafv2RuleGroup` Submodule" id="@cdktf/provider-aws.wafv2RuleGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Wafv2RuleGroup <a name="Wafv2RuleGroup" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group aws_wafv2_rule_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  capacity: typing.Union[int, float],
  scope: str,
  visibility_config: Wafv2RuleGroupVisibilityConfig,
  custom_response_body: typing.Union[IResolvable, typing.List[Wafv2RuleGroupCustomResponseBody]] = None,
  description: str = None,
  id: str = None,
  name: str = None,
  name_prefix: str = None,
  rule: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRule]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#capacity Wafv2RuleGroup#capacity}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#scope Wafv2RuleGroup#scope}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.visibilityConfig">visibility_config</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig">Wafv2RuleGroupVisibilityConfig</a></code> | visibility_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.customResponseBody">custom_response_body</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody">Wafv2RuleGroupCustomResponseBody</a>]]</code> | custom_response_body block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#description Wafv2RuleGroup#description}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#id Wafv2RuleGroup#id}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name_prefix Wafv2RuleGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule">Wafv2RuleGroupRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#tags Wafv2RuleGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#tags_all Wafv2RuleGroup#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.capacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#capacity Wafv2RuleGroup#capacity}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#scope Wafv2RuleGroup#scope}.

---

##### `visibility_config`<sup>Required</sup> <a name="visibility_config" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.visibilityConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig">Wafv2RuleGroupVisibilityConfig</a>

visibility_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#visibility_config Wafv2RuleGroup#visibility_config}

---

##### `custom_response_body`<sup>Optional</sup> <a name="custom_response_body" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.customResponseBody"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody">Wafv2RuleGroupCustomResponseBody</a>]]

custom_response_body block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#custom_response_body Wafv2RuleGroup#custom_response_body}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#description Wafv2RuleGroup#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#id Wafv2RuleGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.namePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name_prefix Wafv2RuleGroup#name_prefix}.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.rule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule">Wafv2RuleGroupRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#rule Wafv2RuleGroup#rule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#tags Wafv2RuleGroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#tags_all Wafv2RuleGroup#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putCustomResponseBody">put_custom_response_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putVisibilityConfig">put_visibility_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetCustomResponseBody">reset_custom_response_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetRule">reset_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_response_body` <a name="put_custom_response_body" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putCustomResponseBody"></a>

```python
def put_custom_response_body(
  value: typing.Union[IResolvable, typing.List[Wafv2RuleGroupCustomResponseBody]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putCustomResponseBody.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody">Wafv2RuleGroupCustomResponseBody</a>]]

---

##### `put_rule` <a name="put_rule" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putRule"></a>

```python
def put_rule(
  value: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule">Wafv2RuleGroupRule</a>]]

---

##### `put_visibility_config` <a name="put_visibility_config" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putVisibilityConfig"></a>

```python
def put_visibility_config(
  cloudwatch_metrics_enabled: typing.Union[bool, IResolvable],
  metric_name: str,
  sampled_requests_enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `cloudwatch_metrics_enabled`<sup>Required</sup> <a name="cloudwatch_metrics_enabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putVisibilityConfig.parameter.cloudwatchMetricsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#cloudwatch_metrics_enabled Wafv2RuleGroup#cloudwatch_metrics_enabled}.

---

###### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putVisibilityConfig.parameter.metricName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#metric_name Wafv2RuleGroup#metric_name}.

---

###### `sampled_requests_enabled`<sup>Required</sup> <a name="sampled_requests_enabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putVisibilityConfig.parameter.sampledRequestsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#sampled_requests_enabled Wafv2RuleGroup#sampled_requests_enabled}.

---

##### `reset_custom_response_body` <a name="reset_custom_response_body" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetCustomResponseBody"></a>

```python
def reset_custom_response_body() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_rule` <a name="reset_rule" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetRule"></a>

```python
def reset_rule() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Wafv2RuleGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Wafv2RuleGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Wafv2RuleGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Wafv2RuleGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Wafv2RuleGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.customResponseBody">custom_response_body</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList">Wafv2RuleGroupCustomResponseBodyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.lockToken">lock_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList">Wafv2RuleGroupRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.visibilityConfig">visibility_config</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference">Wafv2RuleGroupVisibilityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.capacityInput">capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.customResponseBodyInput">custom_response_body_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody">Wafv2RuleGroupCustomResponseBody</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.ruleInput">rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule">Wafv2RuleGroupRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.visibilityConfigInput">visibility_config_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig">Wafv2RuleGroupVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `custom_response_body`<sup>Required</sup> <a name="custom_response_body" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.customResponseBody"></a>

```python
custom_response_body: Wafv2RuleGroupCustomResponseBodyList
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList">Wafv2RuleGroupCustomResponseBodyList</a>

---

##### `lock_token`<sup>Required</sup> <a name="lock_token" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.lockToken"></a>

```python
lock_token: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.rule"></a>

```python
rule: Wafv2RuleGroupRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList">Wafv2RuleGroupRuleList</a>

---

##### `visibility_config`<sup>Required</sup> <a name="visibility_config" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.visibilityConfig"></a>

```python
visibility_config: Wafv2RuleGroupVisibilityConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference">Wafv2RuleGroupVisibilityConfigOutputReference</a>

---

##### `capacity_input`<sup>Optional</sup> <a name="capacity_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.capacityInput"></a>

```python
capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_response_body_input`<sup>Optional</sup> <a name="custom_response_body_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.customResponseBodyInput"></a>

```python
custom_response_body_input: typing.Union[IResolvable, typing.List[Wafv2RuleGroupCustomResponseBody]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody">Wafv2RuleGroupCustomResponseBody</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.ruleInput"></a>

```python
rule_input: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule">Wafv2RuleGroupRule</a>]]

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `visibility_config_input`<sup>Optional</sup> <a name="visibility_config_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.visibilityConfigInput"></a>

```python
visibility_config_input: Wafv2RuleGroupVisibilityConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig">Wafv2RuleGroupVisibilityConfig</a>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Wafv2RuleGroupConfig <a name="Wafv2RuleGroupConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  capacity: typing.Union[int, float],
  scope: str,
  visibility_config: Wafv2RuleGroupVisibilityConfig,
  custom_response_body: typing.Union[IResolvable, typing.List[Wafv2RuleGroupCustomResponseBody]] = None,
  description: str = None,
  id: str = None,
  name: str = None,
  name_prefix: str = None,
  rule: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRule]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#capacity Wafv2RuleGroup#capacity}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#scope Wafv2RuleGroup#scope}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.visibilityConfig">visibility_config</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig">Wafv2RuleGroupVisibilityConfig</a></code> | visibility_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.customResponseBody">custom_response_body</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody">Wafv2RuleGroupCustomResponseBody</a>]]</code> | custom_response_body block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#description Wafv2RuleGroup#description}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#id Wafv2RuleGroup#id}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name_prefix Wafv2RuleGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule">Wafv2RuleGroupRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#tags Wafv2RuleGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#tags_all Wafv2RuleGroup#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#capacity Wafv2RuleGroup#capacity}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#scope Wafv2RuleGroup#scope}.

---

##### `visibility_config`<sup>Required</sup> <a name="visibility_config" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.visibilityConfig"></a>

```python
visibility_config: Wafv2RuleGroupVisibilityConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig">Wafv2RuleGroupVisibilityConfig</a>

visibility_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#visibility_config Wafv2RuleGroup#visibility_config}

---

##### `custom_response_body`<sup>Optional</sup> <a name="custom_response_body" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.customResponseBody"></a>

```python
custom_response_body: typing.Union[IResolvable, typing.List[Wafv2RuleGroupCustomResponseBody]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody">Wafv2RuleGroupCustomResponseBody</a>]]

custom_response_body block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#custom_response_body Wafv2RuleGroup#custom_response_body}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#description Wafv2RuleGroup#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#id Wafv2RuleGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name_prefix Wafv2RuleGroup#name_prefix}.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.rule"></a>

```python
rule: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule">Wafv2RuleGroupRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#rule Wafv2RuleGroup#rule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#tags Wafv2RuleGroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#tags_all Wafv2RuleGroup#tags_all}.

---

### Wafv2RuleGroupCustomResponseBody <a name="Wafv2RuleGroupCustomResponseBody" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody(
  content: str,
  content_type: str,
  key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#content Wafv2RuleGroup#content}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#content_type Wafv2RuleGroup#content_type}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#key Wafv2RuleGroup#key}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#content Wafv2RuleGroup#content}.

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#content_type Wafv2RuleGroup#content_type}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#key Wafv2RuleGroup#key}.

---

### Wafv2RuleGroupRule <a name="Wafv2RuleGroupRule" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRule(
  action: Wafv2RuleGroupRuleAction,
  name: str,
  priority: typing.Union[int, float],
  visibility_config: Wafv2RuleGroupRuleVisibilityConfig,
  captcha_config: Wafv2RuleGroupRuleCaptchaConfig = None,
  rule_label: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleRuleLabel]] = None,
  statement: typing.Any = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction">Wafv2RuleGroupRuleAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#priority Wafv2RuleGroup#priority}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.visibilityConfig">visibility_config</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig">Wafv2RuleGroupRuleVisibilityConfig</a></code> | visibility_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.captchaConfig">captcha_config</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig">Wafv2RuleGroupRuleCaptchaConfig</a></code> | captcha_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.ruleLabel">rule_label</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel">Wafv2RuleGroupRuleRuleLabel</a>]]</code> | rule_label block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.statement">statement</a></code> | <code>typing.Any</code> | statement block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.action"></a>

```python
action: Wafv2RuleGroupRuleAction
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction">Wafv2RuleGroupRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#action Wafv2RuleGroup#action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#priority Wafv2RuleGroup#priority}.

---

##### `visibility_config`<sup>Required</sup> <a name="visibility_config" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.visibilityConfig"></a>

```python
visibility_config: Wafv2RuleGroupRuleVisibilityConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig">Wafv2RuleGroupRuleVisibilityConfig</a>

visibility_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#visibility_config Wafv2RuleGroup#visibility_config}

---

##### `captcha_config`<sup>Optional</sup> <a name="captcha_config" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.captchaConfig"></a>

```python
captcha_config: Wafv2RuleGroupRuleCaptchaConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig">Wafv2RuleGroupRuleCaptchaConfig</a>

captcha_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#captcha_config Wafv2RuleGroup#captcha_config}

---

##### `rule_label`<sup>Optional</sup> <a name="rule_label" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.ruleLabel"></a>

```python
rule_label: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleRuleLabel]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel">Wafv2RuleGroupRuleRuleLabel</a>]]

rule_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#rule_label Wafv2RuleGroup#rule_label}

---

##### `statement`<sup>Optional</sup> <a name="statement" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.statement"></a>

```python
statement: typing.Any
```

- *Type:* typing.Any

statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#statement Wafv2RuleGroup#statement}

---

### Wafv2RuleGroupRuleAction <a name="Wafv2RuleGroupRuleAction" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleAction(
  allow: Wafv2RuleGroupRuleActionAllow = None,
  block: Wafv2RuleGroupRuleActionBlock = None,
  captcha: Wafv2RuleGroupRuleActionCaptcha = None,
  challenge: Wafv2RuleGroupRuleActionChallenge = None,
  count: Wafv2RuleGroupRuleActionCount = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow">Wafv2RuleGroupRuleActionAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.block">block</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock">Wafv2RuleGroupRuleActionBlock</a></code> | block block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.captcha">captcha</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha">Wafv2RuleGroupRuleActionCaptcha</a></code> | captcha block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.challenge">challenge</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge">Wafv2RuleGroupRuleActionChallenge</a></code> | challenge block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.count">count</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount">Wafv2RuleGroupRuleActionCount</a></code> | count block. |

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.allow"></a>

```python
allow: Wafv2RuleGroupRuleActionAllow
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow">Wafv2RuleGroupRuleActionAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#allow Wafv2RuleGroup#allow}

---

##### `block`<sup>Optional</sup> <a name="block" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.block"></a>

```python
block: Wafv2RuleGroupRuleActionBlock
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock">Wafv2RuleGroupRuleActionBlock</a>

block block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#block Wafv2RuleGroup#block}

---

##### `captcha`<sup>Optional</sup> <a name="captcha" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.captcha"></a>

```python
captcha: Wafv2RuleGroupRuleActionCaptcha
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha">Wafv2RuleGroupRuleActionCaptcha</a>

captcha block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#captcha Wafv2RuleGroup#captcha}

---

##### `challenge`<sup>Optional</sup> <a name="challenge" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.challenge"></a>

```python
challenge: Wafv2RuleGroupRuleActionChallenge
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge">Wafv2RuleGroupRuleActionChallenge</a>

challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#challenge Wafv2RuleGroup#challenge}

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.count"></a>

```python
count: Wafv2RuleGroupRuleActionCount
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount">Wafv2RuleGroupRuleActionCount</a>

count block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#count Wafv2RuleGroup#count}

---

### Wafv2RuleGroupRuleActionAllow <a name="Wafv2RuleGroupRuleActionAllow" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow(
  custom_request_handling: Wafv2RuleGroupRuleActionAllowCustomRequestHandling = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow.property.customRequestHandling">custom_request_handling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling">Wafv2RuleGroupRuleActionAllowCustomRequestHandling</a></code> | custom_request_handling block. |

---

##### `custom_request_handling`<sup>Optional</sup> <a name="custom_request_handling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow.property.customRequestHandling"></a>

```python
custom_request_handling: Wafv2RuleGroupRuleActionAllowCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling">Wafv2RuleGroupRuleActionAllowCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#custom_request_handling Wafv2RuleGroup#custom_request_handling}

---

### Wafv2RuleGroupRuleActionAllowCustomRequestHandling <a name="Wafv2RuleGroupRuleActionAllowCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling(
  insert_header: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling.property.insertHeader">insert_header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader</a>]]</code> | insert_header block. |

---

##### `insert_header`<sup>Required</sup> <a name="insert_header" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling.property.insertHeader"></a>

```python
insert_header: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader</a>]]

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#insert_header Wafv2RuleGroup#insert_header}

---

### Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader <a name="Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}.

---

### Wafv2RuleGroupRuleActionBlock <a name="Wafv2RuleGroupRuleActionBlock" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock(
  custom_response: Wafv2RuleGroupRuleActionBlockCustomResponse = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock.property.customResponse">custom_response</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse">Wafv2RuleGroupRuleActionBlockCustomResponse</a></code> | custom_response block. |

---

##### `custom_response`<sup>Optional</sup> <a name="custom_response" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock.property.customResponse"></a>

```python
custom_response: Wafv2RuleGroupRuleActionBlockCustomResponse
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse">Wafv2RuleGroupRuleActionBlockCustomResponse</a>

custom_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#custom_response Wafv2RuleGroup#custom_response}

---

### Wafv2RuleGroupRuleActionBlockCustomResponse <a name="Wafv2RuleGroupRuleActionBlockCustomResponse" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse(
  response_code: typing.Union[int, float],
  custom_response_body_key: str = None,
  response_header: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse.property.responseCode">response_code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#response_code Wafv2RuleGroup#response_code}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse.property.customResponseBodyKey">custom_response_body_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#custom_response_body_key Wafv2RuleGroup#custom_response_body_key}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse.property.responseHeader">response_header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader">Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader</a>]]</code> | response_header block. |

---

##### `response_code`<sup>Required</sup> <a name="response_code" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse.property.responseCode"></a>

```python
response_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#response_code Wafv2RuleGroup#response_code}.

---

##### `custom_response_body_key`<sup>Optional</sup> <a name="custom_response_body_key" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse.property.customResponseBodyKey"></a>

```python
custom_response_body_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#custom_response_body_key Wafv2RuleGroup#custom_response_body_key}.

---

##### `response_header`<sup>Optional</sup> <a name="response_header" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse.property.responseHeader"></a>

```python
response_header: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader">Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader</a>]]

response_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#response_header Wafv2RuleGroup#response_header}

---

### Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader <a name="Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}.

---

### Wafv2RuleGroupRuleActionCaptcha <a name="Wafv2RuleGroupRuleActionCaptcha" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha(
  custom_request_handling: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha.property.customRequestHandling">custom_request_handling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling</a></code> | custom_request_handling block. |

---

##### `custom_request_handling`<sup>Optional</sup> <a name="custom_request_handling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha.property.customRequestHandling"></a>

```python
custom_request_handling: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#custom_request_handling Wafv2RuleGroup#custom_request_handling}

---

### Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling <a name="Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling(
  insert_header: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling.property.insertHeader">insert_header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader</a>]]</code> | insert_header block. |

---

##### `insert_header`<sup>Required</sup> <a name="insert_header" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling.property.insertHeader"></a>

```python
insert_header: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader</a>]]

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#insert_header Wafv2RuleGroup#insert_header}

---

### Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader <a name="Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}.

---

### Wafv2RuleGroupRuleActionChallenge <a name="Wafv2RuleGroupRuleActionChallenge" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge(
  custom_request_handling: Wafv2RuleGroupRuleActionChallengeCustomRequestHandling = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge.property.customRequestHandling">custom_request_handling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling">Wafv2RuleGroupRuleActionChallengeCustomRequestHandling</a></code> | custom_request_handling block. |

---

##### `custom_request_handling`<sup>Optional</sup> <a name="custom_request_handling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge.property.customRequestHandling"></a>

```python
custom_request_handling: Wafv2RuleGroupRuleActionChallengeCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling">Wafv2RuleGroupRuleActionChallengeCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#custom_request_handling Wafv2RuleGroup#custom_request_handling}

---

### Wafv2RuleGroupRuleActionChallengeCustomRequestHandling <a name="Wafv2RuleGroupRuleActionChallengeCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling(
  insert_header: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling.property.insertHeader">insert_header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader</a>]]</code> | insert_header block. |

---

##### `insert_header`<sup>Required</sup> <a name="insert_header" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling.property.insertHeader"></a>

```python
insert_header: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader</a>]]

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#insert_header Wafv2RuleGroup#insert_header}

---

### Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader <a name="Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}.

---

### Wafv2RuleGroupRuleActionCount <a name="Wafv2RuleGroupRuleActionCount" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionCount(
  custom_request_handling: Wafv2RuleGroupRuleActionCountCustomRequestHandling = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount.property.customRequestHandling">custom_request_handling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling">Wafv2RuleGroupRuleActionCountCustomRequestHandling</a></code> | custom_request_handling block. |

---

##### `custom_request_handling`<sup>Optional</sup> <a name="custom_request_handling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount.property.customRequestHandling"></a>

```python
custom_request_handling: Wafv2RuleGroupRuleActionCountCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling">Wafv2RuleGroupRuleActionCountCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#custom_request_handling Wafv2RuleGroup#custom_request_handling}

---

### Wafv2RuleGroupRuleActionCountCustomRequestHandling <a name="Wafv2RuleGroupRuleActionCountCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling(
  insert_header: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling.property.insertHeader">insert_header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader</a>]]</code> | insert_header block. |

---

##### `insert_header`<sup>Required</sup> <a name="insert_header" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling.property.insertHeader"></a>

```python
insert_header: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader</a>]]

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#insert_header Wafv2RuleGroup#insert_header}

---

### Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader <a name="Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}.

---

### Wafv2RuleGroupRuleCaptchaConfig <a name="Wafv2RuleGroupRuleCaptchaConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig(
  immunity_time_property: Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig.property.immunityTimeProperty">immunity_time_property</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty">Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty</a></code> | immunity_time_property block. |

---

##### `immunity_time_property`<sup>Optional</sup> <a name="immunity_time_property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig.property.immunityTimeProperty"></a>

```python
immunity_time_property: Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty">Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty</a>

immunity_time_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#immunity_time_property Wafv2RuleGroup#immunity_time_property}

---

### Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty <a name="Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty(
  immunity_time: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty.property.immunityTime">immunity_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#immunity_time Wafv2RuleGroup#immunity_time}. |

---

##### `immunity_time`<sup>Optional</sup> <a name="immunity_time" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty.property.immunityTime"></a>

```python
immunity_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#immunity_time Wafv2RuleGroup#immunity_time}.

---

### Wafv2RuleGroupRuleRuleLabel <a name="Wafv2RuleGroupRuleRuleLabel" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

### Wafv2RuleGroupRuleVisibilityConfig <a name="Wafv2RuleGroupRuleVisibilityConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig(
  cloudwatch_metrics_enabled: typing.Union[bool, IResolvable],
  metric_name: str,
  sampled_requests_enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig.property.cloudwatchMetricsEnabled">cloudwatch_metrics_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#cloudwatch_metrics_enabled Wafv2RuleGroup#cloudwatch_metrics_enabled}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#metric_name Wafv2RuleGroup#metric_name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig.property.sampledRequestsEnabled">sampled_requests_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#sampled_requests_enabled Wafv2RuleGroup#sampled_requests_enabled}. |

---

##### `cloudwatch_metrics_enabled`<sup>Required</sup> <a name="cloudwatch_metrics_enabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig.property.cloudwatchMetricsEnabled"></a>

```python
cloudwatch_metrics_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#cloudwatch_metrics_enabled Wafv2RuleGroup#cloudwatch_metrics_enabled}.

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#metric_name Wafv2RuleGroup#metric_name}.

---

##### `sampled_requests_enabled`<sup>Required</sup> <a name="sampled_requests_enabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig.property.sampledRequestsEnabled"></a>

```python
sampled_requests_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#sampled_requests_enabled Wafv2RuleGroup#sampled_requests_enabled}.

---

### Wafv2RuleGroupVisibilityConfig <a name="Wafv2RuleGroupVisibilityConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig(
  cloudwatch_metrics_enabled: typing.Union[bool, IResolvable],
  metric_name: str,
  sampled_requests_enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig.property.cloudwatchMetricsEnabled">cloudwatch_metrics_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#cloudwatch_metrics_enabled Wafv2RuleGroup#cloudwatch_metrics_enabled}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#metric_name Wafv2RuleGroup#metric_name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig.property.sampledRequestsEnabled">sampled_requests_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#sampled_requests_enabled Wafv2RuleGroup#sampled_requests_enabled}. |

---

##### `cloudwatch_metrics_enabled`<sup>Required</sup> <a name="cloudwatch_metrics_enabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig.property.cloudwatchMetricsEnabled"></a>

```python
cloudwatch_metrics_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#cloudwatch_metrics_enabled Wafv2RuleGroup#cloudwatch_metrics_enabled}.

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#metric_name Wafv2RuleGroup#metric_name}.

---

##### `sampled_requests_enabled`<sup>Required</sup> <a name="sampled_requests_enabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig.property.sampledRequestsEnabled"></a>

```python
sampled_requests_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#sampled_requests_enabled Wafv2RuleGroup#sampled_requests_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### Wafv2RuleGroupCustomResponseBodyList <a name="Wafv2RuleGroupCustomResponseBodyList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Wafv2RuleGroupCustomResponseBodyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody">Wafv2RuleGroupCustomResponseBody</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Wafv2RuleGroupCustomResponseBody]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody">Wafv2RuleGroupCustomResponseBody</a>]]

---


### Wafv2RuleGroupCustomResponseBodyOutputReference <a name="Wafv2RuleGroupCustomResponseBodyOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody">Wafv2RuleGroupCustomResponseBody</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Wafv2RuleGroupCustomResponseBody]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody">Wafv2RuleGroupCustomResponseBody</a>]

---


### Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList <a name="Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader</a>]]

---


### Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference <a name="Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader</a>]

---


### Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference <a name="Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.putInsertHeader">put_insert_header</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_insert_header` <a name="put_insert_header" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.putInsertHeader"></a>

```python
def put_insert_header(
  value: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.putInsertHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.insertHeader">insert_header</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.insertHeaderInput">insert_header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling">Wafv2RuleGroupRuleActionAllowCustomRequestHandling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `insert_header`<sup>Required</sup> <a name="insert_header" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.insertHeader"></a>

```python
insert_header: Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList</a>

---

##### `insert_header_input`<sup>Optional</sup> <a name="insert_header_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.insertHeaderInput"></a>

```python
insert_header_input: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2RuleGroupRuleActionAllowCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling">Wafv2RuleGroupRuleActionAllowCustomRequestHandling</a>

---


### Wafv2RuleGroupRuleActionAllowOutputReference <a name="Wafv2RuleGroupRuleActionAllowOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.putCustomRequestHandling">put_custom_request_handling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.resetCustomRequestHandling">reset_custom_request_handling</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_request_handling` <a name="put_custom_request_handling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.putCustomRequestHandling"></a>

```python
def put_custom_request_handling(
  insert_header: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader]]
) -> None
```

###### `insert_header`<sup>Required</sup> <a name="insert_header" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.putCustomRequestHandling.parameter.insertHeader"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader</a>]]

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#insert_header Wafv2RuleGroup#insert_header}

---

##### `reset_custom_request_handling` <a name="reset_custom_request_handling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.resetCustomRequestHandling"></a>

```python
def reset_custom_request_handling() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.customRequestHandling">custom_request_handling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.customRequestHandlingInput">custom_request_handling_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling">Wafv2RuleGroupRuleActionAllowCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow">Wafv2RuleGroupRuleActionAllow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_request_handling`<sup>Required</sup> <a name="custom_request_handling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.customRequestHandling"></a>

```python
custom_request_handling: Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference</a>

---

##### `custom_request_handling_input`<sup>Optional</sup> <a name="custom_request_handling_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.customRequestHandlingInput"></a>

```python
custom_request_handling_input: Wafv2RuleGroupRuleActionAllowCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling">Wafv2RuleGroupRuleActionAllowCustomRequestHandling</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2RuleGroupRuleActionAllow
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow">Wafv2RuleGroupRuleActionAllow</a>

---


### Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference <a name="Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.putResponseHeader">put_response_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.resetCustomResponseBodyKey">reset_custom_response_body_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.resetResponseHeader">reset_response_header</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_response_header` <a name="put_response_header" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.putResponseHeader"></a>

```python
def put_response_header(
  value: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.putResponseHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader">Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader</a>]]

---

##### `reset_custom_response_body_key` <a name="reset_custom_response_body_key" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.resetCustomResponseBodyKey"></a>

```python
def reset_custom_response_body_key() -> None
```

##### `reset_response_header` <a name="reset_response_header" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.resetResponseHeader"></a>

```python
def reset_response_header() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseHeader">response_header</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList">Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.customResponseBodyKeyInput">custom_response_body_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseCodeInput">response_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseHeaderInput">response_header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader">Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.customResponseBodyKey">custom_response_body_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseCode">response_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse">Wafv2RuleGroupRuleActionBlockCustomResponse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `response_header`<sup>Required</sup> <a name="response_header" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseHeader"></a>

```python
response_header: Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList">Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList</a>

---

##### `custom_response_body_key_input`<sup>Optional</sup> <a name="custom_response_body_key_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.customResponseBodyKeyInput"></a>

```python
custom_response_body_key_input: str
```

- *Type:* str

---

##### `response_code_input`<sup>Optional</sup> <a name="response_code_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseCodeInput"></a>

```python
response_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `response_header_input`<sup>Optional</sup> <a name="response_header_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseHeaderInput"></a>

```python
response_header_input: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader">Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader</a>]]

---

##### `custom_response_body_key`<sup>Required</sup> <a name="custom_response_body_key" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.customResponseBodyKey"></a>

```python
custom_response_body_key: str
```

- *Type:* str

---

##### `response_code`<sup>Required</sup> <a name="response_code" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseCode"></a>

```python
response_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2RuleGroupRuleActionBlockCustomResponse
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse">Wafv2RuleGroupRuleActionBlockCustomResponse</a>

---


### Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList <a name="Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader">Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader">Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader</a>]]

---


### Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference <a name="Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader">Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader">Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader</a>]

---


### Wafv2RuleGroupRuleActionBlockOutputReference <a name="Wafv2RuleGroupRuleActionBlockOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.putCustomResponse">put_custom_response</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.resetCustomResponse">reset_custom_response</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_response` <a name="put_custom_response" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.putCustomResponse"></a>

```python
def put_custom_response(
  response_code: typing.Union[int, float],
  custom_response_body_key: str = None,
  response_header: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader]] = None
) -> None
```

###### `response_code`<sup>Required</sup> <a name="response_code" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.putCustomResponse.parameter.responseCode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#response_code Wafv2RuleGroup#response_code}.

---

###### `custom_response_body_key`<sup>Optional</sup> <a name="custom_response_body_key" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.putCustomResponse.parameter.customResponseBodyKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#custom_response_body_key Wafv2RuleGroup#custom_response_body_key}.

---

###### `response_header`<sup>Optional</sup> <a name="response_header" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.putCustomResponse.parameter.responseHeader"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader">Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader</a>]]

response_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#response_header Wafv2RuleGroup#response_header}

---

##### `reset_custom_response` <a name="reset_custom_response" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.resetCustomResponse"></a>

```python
def reset_custom_response() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.customResponse">custom_response</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference">Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.customResponseInput">custom_response_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse">Wafv2RuleGroupRuleActionBlockCustomResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock">Wafv2RuleGroupRuleActionBlock</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_response`<sup>Required</sup> <a name="custom_response" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.customResponse"></a>

```python
custom_response: Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference">Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference</a>

---

##### `custom_response_input`<sup>Optional</sup> <a name="custom_response_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.customResponseInput"></a>

```python
custom_response_input: Wafv2RuleGroupRuleActionBlockCustomResponse
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse">Wafv2RuleGroupRuleActionBlockCustomResponse</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2RuleGroupRuleActionBlock
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock">Wafv2RuleGroupRuleActionBlock</a>

---


### Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList <a name="Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader</a>]]

---


### Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference <a name="Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader</a>]

---


### Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference <a name="Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.putInsertHeader">put_insert_header</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_insert_header` <a name="put_insert_header" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.putInsertHeader"></a>

```python
def put_insert_header(
  value: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.putInsertHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.insertHeader">insert_header</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.insertHeaderInput">insert_header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `insert_header`<sup>Required</sup> <a name="insert_header" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.insertHeader"></a>

```python
insert_header: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList</a>

---

##### `insert_header_input`<sup>Optional</sup> <a name="insert_header_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.insertHeaderInput"></a>

```python
insert_header_input: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling</a>

---


### Wafv2RuleGroupRuleActionCaptchaOutputReference <a name="Wafv2RuleGroupRuleActionCaptchaOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.putCustomRequestHandling">put_custom_request_handling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.resetCustomRequestHandling">reset_custom_request_handling</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_request_handling` <a name="put_custom_request_handling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.putCustomRequestHandling"></a>

```python
def put_custom_request_handling(
  insert_header: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader]]
) -> None
```

###### `insert_header`<sup>Required</sup> <a name="insert_header" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.putCustomRequestHandling.parameter.insertHeader"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader</a>]]

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#insert_header Wafv2RuleGroup#insert_header}

---

##### `reset_custom_request_handling` <a name="reset_custom_request_handling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.resetCustomRequestHandling"></a>

```python
def reset_custom_request_handling() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.customRequestHandling">custom_request_handling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.customRequestHandlingInput">custom_request_handling_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha">Wafv2RuleGroupRuleActionCaptcha</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_request_handling`<sup>Required</sup> <a name="custom_request_handling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.customRequestHandling"></a>

```python
custom_request_handling: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference</a>

---

##### `custom_request_handling_input`<sup>Optional</sup> <a name="custom_request_handling_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.customRequestHandlingInput"></a>

```python
custom_request_handling_input: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2RuleGroupRuleActionCaptcha
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha">Wafv2RuleGroupRuleActionCaptcha</a>

---


### Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList <a name="Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader</a>]]

---


### Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference <a name="Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader</a>]

---


### Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference <a name="Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.putInsertHeader">put_insert_header</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_insert_header` <a name="put_insert_header" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.putInsertHeader"></a>

```python
def put_insert_header(
  value: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.putInsertHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.insertHeader">insert_header</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.insertHeaderInput">insert_header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling">Wafv2RuleGroupRuleActionChallengeCustomRequestHandling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `insert_header`<sup>Required</sup> <a name="insert_header" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.insertHeader"></a>

```python
insert_header: Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList</a>

---

##### `insert_header_input`<sup>Optional</sup> <a name="insert_header_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.insertHeaderInput"></a>

```python
insert_header_input: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2RuleGroupRuleActionChallengeCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling">Wafv2RuleGroupRuleActionChallengeCustomRequestHandling</a>

---


### Wafv2RuleGroupRuleActionChallengeOutputReference <a name="Wafv2RuleGroupRuleActionChallengeOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.putCustomRequestHandling">put_custom_request_handling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.resetCustomRequestHandling">reset_custom_request_handling</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_request_handling` <a name="put_custom_request_handling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.putCustomRequestHandling"></a>

```python
def put_custom_request_handling(
  insert_header: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader]]
) -> None
```

###### `insert_header`<sup>Required</sup> <a name="insert_header" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.putCustomRequestHandling.parameter.insertHeader"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader</a>]]

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#insert_header Wafv2RuleGroup#insert_header}

---

##### `reset_custom_request_handling` <a name="reset_custom_request_handling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.resetCustomRequestHandling"></a>

```python
def reset_custom_request_handling() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.customRequestHandling">custom_request_handling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.customRequestHandlingInput">custom_request_handling_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling">Wafv2RuleGroupRuleActionChallengeCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge">Wafv2RuleGroupRuleActionChallenge</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_request_handling`<sup>Required</sup> <a name="custom_request_handling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.customRequestHandling"></a>

```python
custom_request_handling: Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference</a>

---

##### `custom_request_handling_input`<sup>Optional</sup> <a name="custom_request_handling_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.customRequestHandlingInput"></a>

```python
custom_request_handling_input: Wafv2RuleGroupRuleActionChallengeCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling">Wafv2RuleGroupRuleActionChallengeCustomRequestHandling</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2RuleGroupRuleActionChallenge
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge">Wafv2RuleGroupRuleActionChallenge</a>

---


### Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList <a name="Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader</a>]]

---


### Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference <a name="Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader</a>]

---


### Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference <a name="Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.putInsertHeader">put_insert_header</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_insert_header` <a name="put_insert_header" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.putInsertHeader"></a>

```python
def put_insert_header(
  value: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.putInsertHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.insertHeader">insert_header</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.insertHeaderInput">insert_header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling">Wafv2RuleGroupRuleActionCountCustomRequestHandling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `insert_header`<sup>Required</sup> <a name="insert_header" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.insertHeader"></a>

```python
insert_header: Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList</a>

---

##### `insert_header_input`<sup>Optional</sup> <a name="insert_header_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.insertHeaderInput"></a>

```python
insert_header_input: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2RuleGroupRuleActionCountCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling">Wafv2RuleGroupRuleActionCountCustomRequestHandling</a>

---


### Wafv2RuleGroupRuleActionCountOutputReference <a name="Wafv2RuleGroupRuleActionCountOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.putCustomRequestHandling">put_custom_request_handling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.resetCustomRequestHandling">reset_custom_request_handling</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_request_handling` <a name="put_custom_request_handling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.putCustomRequestHandling"></a>

```python
def put_custom_request_handling(
  insert_header: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader]]
) -> None
```

###### `insert_header`<sup>Required</sup> <a name="insert_header" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.putCustomRequestHandling.parameter.insertHeader"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader</a>]]

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#insert_header Wafv2RuleGroup#insert_header}

---

##### `reset_custom_request_handling` <a name="reset_custom_request_handling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.resetCustomRequestHandling"></a>

```python
def reset_custom_request_handling() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.customRequestHandling">custom_request_handling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.customRequestHandlingInput">custom_request_handling_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling">Wafv2RuleGroupRuleActionCountCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount">Wafv2RuleGroupRuleActionCount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_request_handling`<sup>Required</sup> <a name="custom_request_handling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.customRequestHandling"></a>

```python
custom_request_handling: Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference</a>

---

##### `custom_request_handling_input`<sup>Optional</sup> <a name="custom_request_handling_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.customRequestHandlingInput"></a>

```python
custom_request_handling_input: Wafv2RuleGroupRuleActionCountCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling">Wafv2RuleGroupRuleActionCountCustomRequestHandling</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2RuleGroupRuleActionCount
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount">Wafv2RuleGroupRuleActionCount</a>

---


### Wafv2RuleGroupRuleActionOutputReference <a name="Wafv2RuleGroupRuleActionOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putAllow">put_allow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putBlock">put_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putCaptcha">put_captcha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putChallenge">put_challenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putCount">put_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetAllow">reset_allow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetBlock">reset_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetCaptcha">reset_captcha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetChallenge">reset_challenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetCount">reset_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_allow` <a name="put_allow" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putAllow"></a>

```python
def put_allow(
  custom_request_handling: Wafv2RuleGroupRuleActionAllowCustomRequestHandling = None
) -> None
```

###### `custom_request_handling`<sup>Optional</sup> <a name="custom_request_handling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putAllow.parameter.customRequestHandling"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling">Wafv2RuleGroupRuleActionAllowCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#custom_request_handling Wafv2RuleGroup#custom_request_handling}

---

##### `put_block` <a name="put_block" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putBlock"></a>

```python
def put_block(
  custom_response: Wafv2RuleGroupRuleActionBlockCustomResponse = None
) -> None
```

###### `custom_response`<sup>Optional</sup> <a name="custom_response" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putBlock.parameter.customResponse"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse">Wafv2RuleGroupRuleActionBlockCustomResponse</a>

custom_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#custom_response Wafv2RuleGroup#custom_response}

---

##### `put_captcha` <a name="put_captcha" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putCaptcha"></a>

```python
def put_captcha(
  custom_request_handling: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling = None
) -> None
```

###### `custom_request_handling`<sup>Optional</sup> <a name="custom_request_handling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putCaptcha.parameter.customRequestHandling"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#custom_request_handling Wafv2RuleGroup#custom_request_handling}

---

##### `put_challenge` <a name="put_challenge" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putChallenge"></a>

```python
def put_challenge(
  custom_request_handling: Wafv2RuleGroupRuleActionChallengeCustomRequestHandling = None
) -> None
```

###### `custom_request_handling`<sup>Optional</sup> <a name="custom_request_handling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putChallenge.parameter.customRequestHandling"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling">Wafv2RuleGroupRuleActionChallengeCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#custom_request_handling Wafv2RuleGroup#custom_request_handling}

---

##### `put_count` <a name="put_count" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putCount"></a>

```python
def put_count(
  custom_request_handling: Wafv2RuleGroupRuleActionCountCustomRequestHandling = None
) -> None
```

###### `custom_request_handling`<sup>Optional</sup> <a name="custom_request_handling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putCount.parameter.customRequestHandling"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling">Wafv2RuleGroupRuleActionCountCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#custom_request_handling Wafv2RuleGroup#custom_request_handling}

---

##### `reset_allow` <a name="reset_allow" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetAllow"></a>

```python
def reset_allow() -> None
```

##### `reset_block` <a name="reset_block" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetBlock"></a>

```python
def reset_block() -> None
```

##### `reset_captcha` <a name="reset_captcha" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetCaptcha"></a>

```python
def reset_captcha() -> None
```

##### `reset_challenge` <a name="reset_challenge" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetChallenge"></a>

```python
def reset_challenge() -> None
```

##### `reset_count` <a name="reset_count" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetCount"></a>

```python
def reset_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference">Wafv2RuleGroupRuleActionAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.block">block</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference">Wafv2RuleGroupRuleActionBlockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.captcha">captcha</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference">Wafv2RuleGroupRuleActionCaptchaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.challenge">challenge</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference">Wafv2RuleGroupRuleActionChallengeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.count">count</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference">Wafv2RuleGroupRuleActionCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.allowInput">allow_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow">Wafv2RuleGroupRuleActionAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.blockInput">block_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock">Wafv2RuleGroupRuleActionBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.captchaInput">captcha_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha">Wafv2RuleGroupRuleActionCaptcha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.challengeInput">challenge_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge">Wafv2RuleGroupRuleActionChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.countInput">count_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount">Wafv2RuleGroupRuleActionCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction">Wafv2RuleGroupRuleAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.allow"></a>

```python
allow: Wafv2RuleGroupRuleActionAllowOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference">Wafv2RuleGroupRuleActionAllowOutputReference</a>

---

##### `block`<sup>Required</sup> <a name="block" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.block"></a>

```python
block: Wafv2RuleGroupRuleActionBlockOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference">Wafv2RuleGroupRuleActionBlockOutputReference</a>

---

##### `captcha`<sup>Required</sup> <a name="captcha" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.captcha"></a>

```python
captcha: Wafv2RuleGroupRuleActionCaptchaOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference">Wafv2RuleGroupRuleActionCaptchaOutputReference</a>

---

##### `challenge`<sup>Required</sup> <a name="challenge" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.challenge"></a>

```python
challenge: Wafv2RuleGroupRuleActionChallengeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference">Wafv2RuleGroupRuleActionChallengeOutputReference</a>

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.count"></a>

```python
count: Wafv2RuleGroupRuleActionCountOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference">Wafv2RuleGroupRuleActionCountOutputReference</a>

---

##### `allow_input`<sup>Optional</sup> <a name="allow_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.allowInput"></a>

```python
allow_input: Wafv2RuleGroupRuleActionAllow
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow">Wafv2RuleGroupRuleActionAllow</a>

---

##### `block_input`<sup>Optional</sup> <a name="block_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.blockInput"></a>

```python
block_input: Wafv2RuleGroupRuleActionBlock
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock">Wafv2RuleGroupRuleActionBlock</a>

---

##### `captcha_input`<sup>Optional</sup> <a name="captcha_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.captchaInput"></a>

```python
captcha_input: Wafv2RuleGroupRuleActionCaptcha
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha">Wafv2RuleGroupRuleActionCaptcha</a>

---

##### `challenge_input`<sup>Optional</sup> <a name="challenge_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.challengeInput"></a>

```python
challenge_input: Wafv2RuleGroupRuleActionChallenge
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge">Wafv2RuleGroupRuleActionChallenge</a>

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.countInput"></a>

```python
count_input: Wafv2RuleGroupRuleActionCount
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount">Wafv2RuleGroupRuleActionCount</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2RuleGroupRuleAction
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction">Wafv2RuleGroupRuleAction</a>

---


### Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference <a name="Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.resetImmunityTime">reset_immunity_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_immunity_time` <a name="reset_immunity_time" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.resetImmunityTime"></a>

```python
def reset_immunity_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTimeInput">immunity_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTime">immunity_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty">Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `immunity_time_input`<sup>Optional</sup> <a name="immunity_time_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTimeInput"></a>

```python
immunity_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `immunity_time`<sup>Required</sup> <a name="immunity_time" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTime"></a>

```python
immunity_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty">Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty</a>

---


### Wafv2RuleGroupRuleCaptchaConfigOutputReference <a name="Wafv2RuleGroupRuleCaptchaConfigOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.putImmunityTimeProperty">put_immunity_time_property</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.resetImmunityTimeProperty">reset_immunity_time_property</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_immunity_time_property` <a name="put_immunity_time_property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.putImmunityTimeProperty"></a>

```python
def put_immunity_time_property(
  immunity_time: typing.Union[int, float] = None
) -> None
```

###### `immunity_time`<sup>Optional</sup> <a name="immunity_time" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.putImmunityTimeProperty.parameter.immunityTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#immunity_time Wafv2RuleGroup#immunity_time}.

---

##### `reset_immunity_time_property` <a name="reset_immunity_time_property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.resetImmunityTimeProperty"></a>

```python
def reset_immunity_time_property() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.immunityTimeProperty">immunity_time_property</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference">Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.immunityTimePropertyInput">immunity_time_property_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty">Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig">Wafv2RuleGroupRuleCaptchaConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `immunity_time_property`<sup>Required</sup> <a name="immunity_time_property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.immunityTimeProperty"></a>

```python
immunity_time_property: Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference">Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference</a>

---

##### `immunity_time_property_input`<sup>Optional</sup> <a name="immunity_time_property_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.immunityTimePropertyInput"></a>

```python
immunity_time_property_input: Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty">Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2RuleGroupRuleCaptchaConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig">Wafv2RuleGroupRuleCaptchaConfig</a>

---


### Wafv2RuleGroupRuleList <a name="Wafv2RuleGroupRuleList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Wafv2RuleGroupRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule">Wafv2RuleGroupRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule">Wafv2RuleGroupRule</a>]]

---


### Wafv2RuleGroupRuleOutputReference <a name="Wafv2RuleGroupRuleOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putCaptchaConfig">put_captcha_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putRuleLabel">put_rule_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putVisibilityConfig">put_visibility_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resetCaptchaConfig">reset_captcha_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resetRuleLabel">reset_rule_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resetStatement">reset_statement</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putAction"></a>

```python
def put_action(
  allow: Wafv2RuleGroupRuleActionAllow = None,
  block: Wafv2RuleGroupRuleActionBlock = None,
  captcha: Wafv2RuleGroupRuleActionCaptcha = None,
  challenge: Wafv2RuleGroupRuleActionChallenge = None,
  count: Wafv2RuleGroupRuleActionCount = None
) -> None
```

###### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putAction.parameter.allow"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow">Wafv2RuleGroupRuleActionAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#allow Wafv2RuleGroup#allow}

---

###### `block`<sup>Optional</sup> <a name="block" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putAction.parameter.block"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock">Wafv2RuleGroupRuleActionBlock</a>

block block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#block Wafv2RuleGroup#block}

---

###### `captcha`<sup>Optional</sup> <a name="captcha" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putAction.parameter.captcha"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha">Wafv2RuleGroupRuleActionCaptcha</a>

captcha block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#captcha Wafv2RuleGroup#captcha}

---

###### `challenge`<sup>Optional</sup> <a name="challenge" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putAction.parameter.challenge"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge">Wafv2RuleGroupRuleActionChallenge</a>

challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#challenge Wafv2RuleGroup#challenge}

---

###### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putAction.parameter.count"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount">Wafv2RuleGroupRuleActionCount</a>

count block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#count Wafv2RuleGroup#count}

---

##### `put_captcha_config` <a name="put_captcha_config" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putCaptchaConfig"></a>

```python
def put_captcha_config(
  immunity_time_property: Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty = None
) -> None
```

###### `immunity_time_property`<sup>Optional</sup> <a name="immunity_time_property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putCaptchaConfig.parameter.immunityTimeProperty"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty">Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty</a>

immunity_time_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#immunity_time_property Wafv2RuleGroup#immunity_time_property}

---

##### `put_rule_label` <a name="put_rule_label" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putRuleLabel"></a>

```python
def put_rule_label(
  value: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleRuleLabel]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putRuleLabel.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel">Wafv2RuleGroupRuleRuleLabel</a>]]

---

##### `put_visibility_config` <a name="put_visibility_config" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putVisibilityConfig"></a>

```python
def put_visibility_config(
  cloudwatch_metrics_enabled: typing.Union[bool, IResolvable],
  metric_name: str,
  sampled_requests_enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `cloudwatch_metrics_enabled`<sup>Required</sup> <a name="cloudwatch_metrics_enabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putVisibilityConfig.parameter.cloudwatchMetricsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#cloudwatch_metrics_enabled Wafv2RuleGroup#cloudwatch_metrics_enabled}.

---

###### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putVisibilityConfig.parameter.metricName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#metric_name Wafv2RuleGroup#metric_name}.

---

###### `sampled_requests_enabled`<sup>Required</sup> <a name="sampled_requests_enabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putVisibilityConfig.parameter.sampledRequestsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#sampled_requests_enabled Wafv2RuleGroup#sampled_requests_enabled}.

---

##### `reset_captcha_config` <a name="reset_captcha_config" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resetCaptchaConfig"></a>

```python
def reset_captcha_config() -> None
```

##### `reset_rule_label` <a name="reset_rule_label" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resetRuleLabel"></a>

```python
def reset_rule_label() -> None
```

##### `reset_statement` <a name="reset_statement" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resetStatement"></a>

```python
def reset_statement() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference">Wafv2RuleGroupRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.captchaConfig">captcha_config</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference">Wafv2RuleGroupRuleCaptchaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.ruleLabel">rule_label</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList">Wafv2RuleGroupRuleRuleLabelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.statementInput">statement_input</a></code> | <code>typing.Any</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.visibilityConfig">visibility_config</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference">Wafv2RuleGroupRuleVisibilityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.actionInput">action_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction">Wafv2RuleGroupRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.captchaConfigInput">captcha_config_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig">Wafv2RuleGroupRuleCaptchaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.ruleLabelInput">rule_label_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel">Wafv2RuleGroupRuleRuleLabel</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.visibilityConfigInput">visibility_config_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig">Wafv2RuleGroupRuleVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.statement">statement</a></code> | <code>typing.Any</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule">Wafv2RuleGroupRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.action"></a>

```python
action: Wafv2RuleGroupRuleActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference">Wafv2RuleGroupRuleActionOutputReference</a>

---

##### `captcha_config`<sup>Required</sup> <a name="captcha_config" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.captchaConfig"></a>

```python
captcha_config: Wafv2RuleGroupRuleCaptchaConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference">Wafv2RuleGroupRuleCaptchaConfigOutputReference</a>

---

##### `rule_label`<sup>Required</sup> <a name="rule_label" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.ruleLabel"></a>

```python
rule_label: Wafv2RuleGroupRuleRuleLabelList
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList">Wafv2RuleGroupRuleRuleLabelList</a>

---

##### `statement_input`<sup>Required</sup> <a name="statement_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.statementInput"></a>

```python
statement_input: typing.Any
```

- *Type:* typing.Any

---

##### `visibility_config`<sup>Required</sup> <a name="visibility_config" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.visibilityConfig"></a>

```python
visibility_config: Wafv2RuleGroupRuleVisibilityConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference">Wafv2RuleGroupRuleVisibilityConfigOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.actionInput"></a>

```python
action_input: Wafv2RuleGroupRuleAction
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction">Wafv2RuleGroupRuleAction</a>

---

##### `captcha_config_input`<sup>Optional</sup> <a name="captcha_config_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.captchaConfigInput"></a>

```python
captcha_config_input: Wafv2RuleGroupRuleCaptchaConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig">Wafv2RuleGroupRuleCaptchaConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_label_input`<sup>Optional</sup> <a name="rule_label_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.ruleLabelInput"></a>

```python
rule_label_input: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleRuleLabel]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel">Wafv2RuleGroupRuleRuleLabel</a>]]

---

##### `visibility_config_input`<sup>Optional</sup> <a name="visibility_config_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.visibilityConfigInput"></a>

```python
visibility_config_input: Wafv2RuleGroupRuleVisibilityConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig">Wafv2RuleGroupRuleVisibilityConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.statement"></a>

```python
statement: typing.Any
```

- *Type:* typing.Any

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Wafv2RuleGroupRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule">Wafv2RuleGroupRule</a>]

---


### Wafv2RuleGroupRuleRuleLabelList <a name="Wafv2RuleGroupRuleRuleLabelList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Wafv2RuleGroupRuleRuleLabelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel">Wafv2RuleGroupRuleRuleLabel</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Wafv2RuleGroupRuleRuleLabel]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel">Wafv2RuleGroupRuleRuleLabel</a>]]

---


### Wafv2RuleGroupRuleRuleLabelOutputReference <a name="Wafv2RuleGroupRuleRuleLabelOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel">Wafv2RuleGroupRuleRuleLabel</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Wafv2RuleGroupRuleRuleLabel]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel">Wafv2RuleGroupRuleRuleLabel</a>]

---


### Wafv2RuleGroupRuleVisibilityConfigOutputReference <a name="Wafv2RuleGroupRuleVisibilityConfigOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.cloudwatchMetricsEnabledInput">cloudwatch_metrics_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.sampledRequestsEnabledInput">sampled_requests_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.cloudwatchMetricsEnabled">cloudwatch_metrics_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.sampledRequestsEnabled">sampled_requests_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig">Wafv2RuleGroupRuleVisibilityConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_metrics_enabled_input`<sup>Optional</sup> <a name="cloudwatch_metrics_enabled_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.cloudwatchMetricsEnabledInput"></a>

```python
cloudwatch_metrics_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `sampled_requests_enabled_input`<sup>Optional</sup> <a name="sampled_requests_enabled_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.sampledRequestsEnabledInput"></a>

```python
sampled_requests_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cloudwatch_metrics_enabled`<sup>Required</sup> <a name="cloudwatch_metrics_enabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.cloudwatchMetricsEnabled"></a>

```python
cloudwatch_metrics_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `sampled_requests_enabled`<sup>Required</sup> <a name="sampled_requests_enabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.sampledRequestsEnabled"></a>

```python
sampled_requests_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2RuleGroupRuleVisibilityConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig">Wafv2RuleGroupRuleVisibilityConfig</a>

---


### Wafv2RuleGroupVisibilityConfigOutputReference <a name="Wafv2RuleGroupVisibilityConfigOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_rule_group

wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.cloudwatchMetricsEnabledInput">cloudwatch_metrics_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.sampledRequestsEnabledInput">sampled_requests_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.cloudwatchMetricsEnabled">cloudwatch_metrics_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.sampledRequestsEnabled">sampled_requests_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig">Wafv2RuleGroupVisibilityConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_metrics_enabled_input`<sup>Optional</sup> <a name="cloudwatch_metrics_enabled_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.cloudwatchMetricsEnabledInput"></a>

```python
cloudwatch_metrics_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `sampled_requests_enabled_input`<sup>Optional</sup> <a name="sampled_requests_enabled_input" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.sampledRequestsEnabledInput"></a>

```python
sampled_requests_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cloudwatch_metrics_enabled`<sup>Required</sup> <a name="cloudwatch_metrics_enabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.cloudwatchMetricsEnabled"></a>

```python
cloudwatch_metrics_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `sampled_requests_enabled`<sup>Required</sup> <a name="sampled_requests_enabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.sampledRequestsEnabled"></a>

```python
sampled_requests_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2RuleGroupVisibilityConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig">Wafv2RuleGroupVisibilityConfig</a>

---



