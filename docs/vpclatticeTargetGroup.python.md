# `vpclatticeTargetGroup` Submodule <a name="`vpclatticeTargetGroup` Submodule" id="@cdktf/provider-aws.vpclatticeTargetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeTargetGroup <a name="VpclatticeTargetGroup" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group aws_vpclattice_target_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpclattice_target_group

vpclatticeTargetGroup.VpclatticeTargetGroup(
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
  type: str,
  config: VpclatticeTargetGroupConfigA = None,
  id: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: VpclatticeTargetGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#name VpclatticeTargetGroup#name}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#type VpclatticeTargetGroup#type}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA">VpclatticeTargetGroupConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#id VpclatticeTargetGroup#id}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#tags VpclatticeTargetGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#tags_all VpclatticeTargetGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts">VpclatticeTargetGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#name VpclatticeTargetGroup#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#type VpclatticeTargetGroup#type}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA">VpclatticeTargetGroupConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#config VpclatticeTargetGroup#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#id VpclatticeTargetGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#region VpclatticeTargetGroup#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#tags VpclatticeTargetGroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#tags_all VpclatticeTargetGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts">VpclatticeTargetGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#timeouts VpclatticeTargetGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_config` <a name="put_config" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putConfig"></a>

```python
def put_config(
  health_check: VpclatticeTargetGroupConfigHealthCheck = None,
  ip_address_type: str = None,
  lambda_event_structure_version: str = None,
  port: typing.Union[int, float] = None,
  protocol: str = None,
  protocol_version: str = None,
  vpc_identifier: str = None
) -> None
```

###### `health_check`<sup>Optional</sup> <a name="health_check" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putConfig.parameter.healthCheck"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck">VpclatticeTargetGroupConfigHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#health_check VpclatticeTargetGroup#health_check}

---

###### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putConfig.parameter.ipAddressType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#ip_address_type VpclatticeTargetGroup#ip_address_type}.

---

###### `lambda_event_structure_version`<sup>Optional</sup> <a name="lambda_event_structure_version" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putConfig.parameter.lambdaEventStructureVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#lambda_event_structure_version VpclatticeTargetGroup#lambda_event_structure_version}.

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putConfig.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#port VpclatticeTargetGroup#port}.

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putConfig.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#protocol VpclatticeTargetGroup#protocol}.

---

###### `protocol_version`<sup>Optional</sup> <a name="protocol_version" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putConfig.parameter.protocolVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#protocol_version VpclatticeTargetGroup#protocol_version}.

---

###### `vpc_identifier`<sup>Optional</sup> <a name="vpc_identifier" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putConfig.parameter.vpcIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#vpc_identifier VpclatticeTargetGroup#vpc_identifier}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#create VpclatticeTargetGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#delete VpclatticeTargetGroup#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#update VpclatticeTargetGroup#update}.

---

##### `reset_config` <a name="reset_config" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VpclatticeTargetGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import vpclattice_target_group

vpclatticeTargetGroup.VpclatticeTargetGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import vpclattice_target_group

vpclatticeTargetGroup.VpclatticeTargetGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import vpclattice_target_group

vpclatticeTargetGroup.VpclatticeTargetGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import vpclattice_target_group

vpclatticeTargetGroup.VpclatticeTargetGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VpclatticeTargetGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VpclatticeTargetGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VpclatticeTargetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpclatticeTargetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference">VpclatticeTargetGroupConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference">VpclatticeTargetGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.configInput">config_input</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA">VpclatticeTargetGroupConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts">VpclatticeTargetGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.config"></a>

```python
config: VpclatticeTargetGroupConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference">VpclatticeTargetGroupConfigAOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.timeouts"></a>

```python
timeouts: VpclatticeTargetGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference">VpclatticeTargetGroupTimeoutsOutputReference</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.configInput"></a>

```python
config_input: VpclatticeTargetGroupConfigA
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA">VpclatticeTargetGroupConfigA</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VpclatticeTargetGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts">VpclatticeTargetGroupTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeTargetGroupConfig <a name="VpclatticeTargetGroupConfig" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpclattice_target_group

vpclatticeTargetGroup.VpclatticeTargetGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  type: str,
  config: VpclatticeTargetGroupConfigA = None,
  id: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: VpclatticeTargetGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#name VpclatticeTargetGroup#name}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#type VpclatticeTargetGroup#type}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA">VpclatticeTargetGroupConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#id VpclatticeTargetGroup#id}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#tags VpclatticeTargetGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#tags_all VpclatticeTargetGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts">VpclatticeTargetGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#name VpclatticeTargetGroup#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#type VpclatticeTargetGroup#type}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.config"></a>

```python
config: VpclatticeTargetGroupConfigA
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA">VpclatticeTargetGroupConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#config VpclatticeTargetGroup#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#id VpclatticeTargetGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#region VpclatticeTargetGroup#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#tags VpclatticeTargetGroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#tags_all VpclatticeTargetGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.timeouts"></a>

```python
timeouts: VpclatticeTargetGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts">VpclatticeTargetGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#timeouts VpclatticeTargetGroup#timeouts}

---

### VpclatticeTargetGroupConfigA <a name="VpclatticeTargetGroupConfigA" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpclattice_target_group

vpclatticeTargetGroup.VpclatticeTargetGroupConfigA(
  health_check: VpclatticeTargetGroupConfigHealthCheck = None,
  ip_address_type: str = None,
  lambda_event_structure_version: str = None,
  port: typing.Union[int, float] = None,
  protocol: str = None,
  protocol_version: str = None,
  vpc_identifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck">VpclatticeTargetGroupConfigHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#ip_address_type VpclatticeTargetGroup#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.lambdaEventStructureVersion">lambda_event_structure_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#lambda_event_structure_version VpclatticeTargetGroup#lambda_event_structure_version}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#port VpclatticeTargetGroup#port}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#protocol VpclatticeTargetGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.protocolVersion">protocol_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#protocol_version VpclatticeTargetGroup#protocol_version}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.vpcIdentifier">vpc_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#vpc_identifier VpclatticeTargetGroup#vpc_identifier}. |

---

##### `health_check`<sup>Optional</sup> <a name="health_check" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.healthCheck"></a>

```python
health_check: VpclatticeTargetGroupConfigHealthCheck
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck">VpclatticeTargetGroupConfigHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#health_check VpclatticeTargetGroup#health_check}

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#ip_address_type VpclatticeTargetGroup#ip_address_type}.

---

##### `lambda_event_structure_version`<sup>Optional</sup> <a name="lambda_event_structure_version" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.lambdaEventStructureVersion"></a>

```python
lambda_event_structure_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#lambda_event_structure_version VpclatticeTargetGroup#lambda_event_structure_version}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#port VpclatticeTargetGroup#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#protocol VpclatticeTargetGroup#protocol}.

---

##### `protocol_version`<sup>Optional</sup> <a name="protocol_version" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.protocolVersion"></a>

```python
protocol_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#protocol_version VpclatticeTargetGroup#protocol_version}.

---

##### `vpc_identifier`<sup>Optional</sup> <a name="vpc_identifier" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.vpcIdentifier"></a>

```python
vpc_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#vpc_identifier VpclatticeTargetGroup#vpc_identifier}.

---

### VpclatticeTargetGroupConfigHealthCheck <a name="VpclatticeTargetGroupConfigHealthCheck" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpclattice_target_group

vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck(
  enabled: typing.Union[bool, IResolvable] = None,
  health_check_interval_seconds: typing.Union[int, float] = None,
  health_check_timeout_seconds: typing.Union[int, float] = None,
  healthy_threshold_count: typing.Union[int, float] = None,
  matcher: VpclatticeTargetGroupConfigHealthCheckMatcher = None,
  path: str = None,
  port: typing.Union[int, float] = None,
  protocol: str = None,
  protocol_version: str = None,
  unhealthy_threshold_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#enabled VpclatticeTargetGroup#enabled}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.healthCheckIntervalSeconds">health_check_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#health_check_interval_seconds VpclatticeTargetGroup#health_check_interval_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.healthCheckTimeoutSeconds">health_check_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#health_check_timeout_seconds VpclatticeTargetGroup#health_check_timeout_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.healthyThresholdCount">healthy_threshold_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#healthy_threshold_count VpclatticeTargetGroup#healthy_threshold_count}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.matcher">matcher</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher">VpclatticeTargetGroupConfigHealthCheckMatcher</a></code> | matcher block. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#path VpclatticeTargetGroup#path}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#port VpclatticeTargetGroup#port}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#protocol VpclatticeTargetGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.protocolVersion">protocol_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#protocol_version VpclatticeTargetGroup#protocol_version}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.unhealthyThresholdCount">unhealthy_threshold_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#unhealthy_threshold_count VpclatticeTargetGroup#unhealthy_threshold_count}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#enabled VpclatticeTargetGroup#enabled}.

---

##### `health_check_interval_seconds`<sup>Optional</sup> <a name="health_check_interval_seconds" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.healthCheckIntervalSeconds"></a>

```python
health_check_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#health_check_interval_seconds VpclatticeTargetGroup#health_check_interval_seconds}.

---

##### `health_check_timeout_seconds`<sup>Optional</sup> <a name="health_check_timeout_seconds" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.healthCheckTimeoutSeconds"></a>

```python
health_check_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#health_check_timeout_seconds VpclatticeTargetGroup#health_check_timeout_seconds}.

---

##### `healthy_threshold_count`<sup>Optional</sup> <a name="healthy_threshold_count" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.healthyThresholdCount"></a>

```python
healthy_threshold_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#healthy_threshold_count VpclatticeTargetGroup#healthy_threshold_count}.

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.matcher"></a>

```python
matcher: VpclatticeTargetGroupConfigHealthCheckMatcher
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher">VpclatticeTargetGroupConfigHealthCheckMatcher</a>

matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#matcher VpclatticeTargetGroup#matcher}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#path VpclatticeTargetGroup#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#port VpclatticeTargetGroup#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#protocol VpclatticeTargetGroup#protocol}.

---

##### `protocol_version`<sup>Optional</sup> <a name="protocol_version" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.protocolVersion"></a>

```python
protocol_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#protocol_version VpclatticeTargetGroup#protocol_version}.

---

##### `unhealthy_threshold_count`<sup>Optional</sup> <a name="unhealthy_threshold_count" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.unhealthyThresholdCount"></a>

```python
unhealthy_threshold_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#unhealthy_threshold_count VpclatticeTargetGroup#unhealthy_threshold_count}.

---

### VpclatticeTargetGroupConfigHealthCheckMatcher <a name="VpclatticeTargetGroupConfigHealthCheckMatcher" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpclattice_target_group

vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher(
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#value VpclatticeTargetGroup#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#value VpclatticeTargetGroup#value}.

---

### VpclatticeTargetGroupTimeouts <a name="VpclatticeTargetGroupTimeouts" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpclattice_target_group

vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#create VpclatticeTargetGroup#create}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#delete VpclatticeTargetGroup#delete}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#update VpclatticeTargetGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#create VpclatticeTargetGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#delete VpclatticeTargetGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#update VpclatticeTargetGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeTargetGroupConfigAOutputReference <a name="VpclatticeTargetGroupConfigAOutputReference" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpclattice_target_group

vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.putHealthCheck">put_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetHealthCheck">reset_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetLambdaEventStructureVersion">reset_lambda_event_structure_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetProtocolVersion">reset_protocol_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetVpcIdentifier">reset_vpc_identifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_health_check` <a name="put_health_check" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.putHealthCheck"></a>

```python
def put_health_check(
  enabled: typing.Union[bool, IResolvable] = None,
  health_check_interval_seconds: typing.Union[int, float] = None,
  health_check_timeout_seconds: typing.Union[int, float] = None,
  healthy_threshold_count: typing.Union[int, float] = None,
  matcher: VpclatticeTargetGroupConfigHealthCheckMatcher = None,
  path: str = None,
  port: typing.Union[int, float] = None,
  protocol: str = None,
  protocol_version: str = None,
  unhealthy_threshold_count: typing.Union[int, float] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.putHealthCheck.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#enabled VpclatticeTargetGroup#enabled}.

---

###### `health_check_interval_seconds`<sup>Optional</sup> <a name="health_check_interval_seconds" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.putHealthCheck.parameter.healthCheckIntervalSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#health_check_interval_seconds VpclatticeTargetGroup#health_check_interval_seconds}.

---

###### `health_check_timeout_seconds`<sup>Optional</sup> <a name="health_check_timeout_seconds" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.putHealthCheck.parameter.healthCheckTimeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#health_check_timeout_seconds VpclatticeTargetGroup#health_check_timeout_seconds}.

---

###### `healthy_threshold_count`<sup>Optional</sup> <a name="healthy_threshold_count" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.putHealthCheck.parameter.healthyThresholdCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#healthy_threshold_count VpclatticeTargetGroup#healthy_threshold_count}.

---

###### `matcher`<sup>Optional</sup> <a name="matcher" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.putHealthCheck.parameter.matcher"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher">VpclatticeTargetGroupConfigHealthCheckMatcher</a>

matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#matcher VpclatticeTargetGroup#matcher}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.putHealthCheck.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#path VpclatticeTargetGroup#path}.

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.putHealthCheck.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#port VpclatticeTargetGroup#port}.

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.putHealthCheck.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#protocol VpclatticeTargetGroup#protocol}.

---

###### `protocol_version`<sup>Optional</sup> <a name="protocol_version" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.putHealthCheck.parameter.protocolVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#protocol_version VpclatticeTargetGroup#protocol_version}.

---

###### `unhealthy_threshold_count`<sup>Optional</sup> <a name="unhealthy_threshold_count" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.putHealthCheck.parameter.unhealthyThresholdCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#unhealthy_threshold_count VpclatticeTargetGroup#unhealthy_threshold_count}.

---

##### `reset_health_check` <a name="reset_health_check" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetHealthCheck"></a>

```python
def reset_health_check() -> None
```

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```

##### `reset_lambda_event_structure_version` <a name="reset_lambda_event_structure_version" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetLambdaEventStructureVersion"></a>

```python
def reset_lambda_event_structure_version() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_protocol_version` <a name="reset_protocol_version" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetProtocolVersion"></a>

```python
def reset_protocol_version() -> None
```

##### `reset_vpc_identifier` <a name="reset_vpc_identifier" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetVpcIdentifier"></a>

```python
def reset_vpc_identifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference">VpclatticeTargetGroupConfigHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.healthCheckInput">health_check_input</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck">VpclatticeTargetGroupConfigHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.lambdaEventStructureVersionInput">lambda_event_structure_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocolVersionInput">protocol_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.vpcIdentifierInput">vpc_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.lambdaEventStructureVersion">lambda_event_structure_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocolVersion">protocol_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.vpcIdentifier">vpc_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA">VpclatticeTargetGroupConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.healthCheck"></a>

```python
health_check: VpclatticeTargetGroupConfigHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference">VpclatticeTargetGroupConfigHealthCheckOutputReference</a>

---

##### `health_check_input`<sup>Optional</sup> <a name="health_check_input" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.healthCheckInput"></a>

```python
health_check_input: VpclatticeTargetGroupConfigHealthCheck
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck">VpclatticeTargetGroupConfigHealthCheck</a>

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `lambda_event_structure_version_input`<sup>Optional</sup> <a name="lambda_event_structure_version_input" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.lambdaEventStructureVersionInput"></a>

```python
lambda_event_structure_version_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `protocol_version_input`<sup>Optional</sup> <a name="protocol_version_input" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocolVersionInput"></a>

```python
protocol_version_input: str
```

- *Type:* str

---

##### `vpc_identifier_input`<sup>Optional</sup> <a name="vpc_identifier_input" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.vpcIdentifierInput"></a>

```python
vpc_identifier_input: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `lambda_event_structure_version`<sup>Required</sup> <a name="lambda_event_structure_version" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.lambdaEventStructureVersion"></a>

```python
lambda_event_structure_version: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `protocol_version`<sup>Required</sup> <a name="protocol_version" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocolVersion"></a>

```python
protocol_version: str
```

- *Type:* str

---

##### `vpc_identifier`<sup>Required</sup> <a name="vpc_identifier" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.vpcIdentifier"></a>

```python
vpc_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.internalValue"></a>

```python
internal_value: VpclatticeTargetGroupConfigA
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA">VpclatticeTargetGroupConfigA</a>

---


### VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference <a name="VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpclattice_target_group

vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher">VpclatticeTargetGroupConfigHealthCheckMatcher</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.internalValue"></a>

```python
internal_value: VpclatticeTargetGroupConfigHealthCheckMatcher
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher">VpclatticeTargetGroupConfigHealthCheckMatcher</a>

---


### VpclatticeTargetGroupConfigHealthCheckOutputReference <a name="VpclatticeTargetGroupConfigHealthCheckOutputReference" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpclattice_target_group

vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.putMatcher">put_matcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetHealthCheckIntervalSeconds">reset_health_check_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetHealthCheckTimeoutSeconds">reset_health_check_timeout_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetHealthyThresholdCount">reset_healthy_threshold_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetMatcher">reset_matcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetProtocolVersion">reset_protocol_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetUnhealthyThresholdCount">reset_unhealthy_threshold_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_matcher` <a name="put_matcher" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.putMatcher"></a>

```python
def put_matcher(
  value: str = None
) -> None
```

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.putMatcher.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/vpclattice_target_group#value VpclatticeTargetGroup#value}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_health_check_interval_seconds` <a name="reset_health_check_interval_seconds" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetHealthCheckIntervalSeconds"></a>

```python
def reset_health_check_interval_seconds() -> None
```

##### `reset_health_check_timeout_seconds` <a name="reset_health_check_timeout_seconds" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetHealthCheckTimeoutSeconds"></a>

```python
def reset_health_check_timeout_seconds() -> None
```

##### `reset_healthy_threshold_count` <a name="reset_healthy_threshold_count" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetHealthyThresholdCount"></a>

```python
def reset_healthy_threshold_count() -> None
```

##### `reset_matcher` <a name="reset_matcher" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetMatcher"></a>

```python
def reset_matcher() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_protocol_version` <a name="reset_protocol_version" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetProtocolVersion"></a>

```python
def reset_protocol_version() -> None
```

##### `reset_unhealthy_threshold_count` <a name="reset_unhealthy_threshold_count" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetUnhealthyThresholdCount"></a>

```python
def reset_unhealthy_threshold_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.matcher">matcher</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference">VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckIntervalSecondsInput">health_check_interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckTimeoutSecondsInput">health_check_timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthyThresholdCountInput">healthy_threshold_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.matcherInput">matcher_input</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher">VpclatticeTargetGroupConfigHealthCheckMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocolVersionInput">protocol_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.unhealthyThresholdCountInput">unhealthy_threshold_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckIntervalSeconds">health_check_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckTimeoutSeconds">health_check_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthyThresholdCount">healthy_threshold_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocolVersion">protocol_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.unhealthyThresholdCount">unhealthy_threshold_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck">VpclatticeTargetGroupConfigHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.matcher"></a>

```python
matcher: VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference">VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `health_check_interval_seconds_input`<sup>Optional</sup> <a name="health_check_interval_seconds_input" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckIntervalSecondsInput"></a>

```python
health_check_interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_timeout_seconds_input`<sup>Optional</sup> <a name="health_check_timeout_seconds_input" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckTimeoutSecondsInput"></a>

```python
health_check_timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `healthy_threshold_count_input`<sup>Optional</sup> <a name="healthy_threshold_count_input" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthyThresholdCountInput"></a>

```python
healthy_threshold_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `matcher_input`<sup>Optional</sup> <a name="matcher_input" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.matcherInput"></a>

```python
matcher_input: VpclatticeTargetGroupConfigHealthCheckMatcher
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher">VpclatticeTargetGroupConfigHealthCheckMatcher</a>

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `protocol_version_input`<sup>Optional</sup> <a name="protocol_version_input" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocolVersionInput"></a>

```python
protocol_version_input: str
```

- *Type:* str

---

##### `unhealthy_threshold_count_input`<sup>Optional</sup> <a name="unhealthy_threshold_count_input" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.unhealthyThresholdCountInput"></a>

```python
unhealthy_threshold_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `health_check_interval_seconds`<sup>Required</sup> <a name="health_check_interval_seconds" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckIntervalSeconds"></a>

```python
health_check_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_timeout_seconds`<sup>Required</sup> <a name="health_check_timeout_seconds" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckTimeoutSeconds"></a>

```python
health_check_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `healthy_threshold_count`<sup>Required</sup> <a name="healthy_threshold_count" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthyThresholdCount"></a>

```python
healthy_threshold_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `protocol_version`<sup>Required</sup> <a name="protocol_version" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocolVersion"></a>

```python
protocol_version: str
```

- *Type:* str

---

##### `unhealthy_threshold_count`<sup>Required</sup> <a name="unhealthy_threshold_count" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.unhealthyThresholdCount"></a>

```python
unhealthy_threshold_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: VpclatticeTargetGroupConfigHealthCheck
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck">VpclatticeTargetGroupConfigHealthCheck</a>

---


### VpclatticeTargetGroupTimeoutsOutputReference <a name="VpclatticeTargetGroupTimeoutsOutputReference" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpclattice_target_group

vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts">VpclatticeTargetGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VpclatticeTargetGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts">VpclatticeTargetGroupTimeouts</a>]

---



