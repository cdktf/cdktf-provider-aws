# `ecsCluster` Submodule <a name="`ecsCluster` Submodule" id="@cdktf/provider-aws.ecsCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsCluster <a name="EcsCluster" id="@cdktf/provider-aws.ecsCluster.EcsCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster aws_ecs_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_cluster

ecsCluster.EcsCluster(
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
  configuration: EcsClusterConfiguration = None,
  id: str = None,
  region: str = None,
  service_connect_defaults: EcsClusterServiceConnectDefaults = None,
  setting: typing.Union[IResolvable, typing.List[EcsClusterSetting]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#name EcsCluster#name}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration">EcsClusterConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#id EcsCluster#id}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.serviceConnectDefaults">service_connect_defaults</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults">EcsClusterServiceConnectDefaults</a></code> | service_connect_defaults block. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.setting">setting</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSetting">EcsClusterSetting</a>]]</code> | setting block. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#tags EcsCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#tags_all EcsCluster#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#name EcsCluster#name}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration">EcsClusterConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#configuration EcsCluster#configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#id EcsCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#region EcsCluster#region}

---

##### `service_connect_defaults`<sup>Optional</sup> <a name="service_connect_defaults" id="@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.serviceConnectDefaults"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults">EcsClusterServiceConnectDefaults</a>

service_connect_defaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#service_connect_defaults EcsCluster#service_connect_defaults}

---

##### `setting`<sup>Optional</sup> <a name="setting" id="@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.setting"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSetting">EcsClusterSetting</a>]]

setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#setting EcsCluster#setting}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#tags EcsCluster#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#tags_all EcsCluster#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.putServiceConnectDefaults">put_service_connect_defaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.putSetting">put_setting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.resetServiceConnectDefaults">reset_service_connect_defaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.resetSetting">reset_setting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsCluster.EcsCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ecsCluster.EcsCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ecsCluster.EcsCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsCluster.EcsCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ecsCluster.EcsCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ecsCluster.EcsCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ecsCluster.EcsCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.ecsCluster.EcsCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ecsCluster.EcsCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ecsCluster.EcsCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.ecsCluster.EcsCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ecsCluster.EcsCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.ecsCluster.EcsCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.ecsCluster.EcsCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsCluster.EcsCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsCluster.EcsCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.ecsCluster.EcsCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsCluster.EcsCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.ecsCluster.EcsCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ecsCluster.EcsCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ecsCluster.EcsCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.ecsCluster.EcsCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsCluster.EcsCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_configuration` <a name="put_configuration" id="@cdktf/provider-aws.ecsCluster.EcsCluster.putConfiguration"></a>

```python
def put_configuration(
  execute_command_configuration: EcsClusterConfigurationExecuteCommandConfiguration = None,
  managed_storage_configuration: EcsClusterConfigurationManagedStorageConfiguration = None
) -> None
```

###### `execute_command_configuration`<sup>Optional</sup> <a name="execute_command_configuration" id="@cdktf/provider-aws.ecsCluster.EcsCluster.putConfiguration.parameter.executeCommandConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration">EcsClusterConfigurationExecuteCommandConfiguration</a>

execute_command_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#execute_command_configuration EcsCluster#execute_command_configuration}

---

###### `managed_storage_configuration`<sup>Optional</sup> <a name="managed_storage_configuration" id="@cdktf/provider-aws.ecsCluster.EcsCluster.putConfiguration.parameter.managedStorageConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfiguration">EcsClusterConfigurationManagedStorageConfiguration</a>

managed_storage_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#managed_storage_configuration EcsCluster#managed_storage_configuration}

---

##### `put_service_connect_defaults` <a name="put_service_connect_defaults" id="@cdktf/provider-aws.ecsCluster.EcsCluster.putServiceConnectDefaults"></a>

```python
def put_service_connect_defaults(
  namespace: str
) -> None
```

###### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.ecsCluster.EcsCluster.putServiceConnectDefaults.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#namespace EcsCluster#namespace}.

---

##### `put_setting` <a name="put_setting" id="@cdktf/provider-aws.ecsCluster.EcsCluster.putSetting"></a>

```python
def put_setting(
  value: typing.Union[IResolvable, typing.List[EcsClusterSetting]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsCluster.EcsCluster.putSetting.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSetting">EcsClusterSetting</a>]]

---

##### `reset_configuration` <a name="reset_configuration" id="@cdktf/provider-aws.ecsCluster.EcsCluster.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ecsCluster.EcsCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.ecsCluster.EcsCluster.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_service_connect_defaults` <a name="reset_service_connect_defaults" id="@cdktf/provider-aws.ecsCluster.EcsCluster.resetServiceConnectDefaults"></a>

```python
def reset_service_connect_defaults() -> None
```

##### `reset_setting` <a name="reset_setting" id="@cdktf/provider-aws.ecsCluster.EcsCluster.resetSetting"></a>

```python
def reset_setting() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ecsCluster.EcsCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.ecsCluster.EcsCluster.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EcsCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ecsCluster.EcsCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ecs_cluster

ecsCluster.EcsCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsCluster.EcsCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ecsCluster.EcsCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ecs_cluster

ecsCluster.EcsCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsCluster.EcsCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ecsCluster.EcsCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ecs_cluster

ecsCluster.EcsCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsCluster.EcsCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.ecsCluster.EcsCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import ecs_cluster

ecsCluster.EcsCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EcsCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecsCluster.EcsCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.ecsCluster.EcsCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EcsCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.ecsCluster.EcsCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EcsCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsCluster.EcsCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EcsCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference">EcsClusterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.serviceConnectDefaults">service_connect_defaults</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference">EcsClusterServiceConnectDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.setting">setting</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList">EcsClusterSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.configurationInput">configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration">EcsClusterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.serviceConnectDefaultsInput">service_connect_defaults_input</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults">EcsClusterServiceConnectDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.settingInput">setting_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSetting">EcsClusterSetting</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.configuration"></a>

```python
configuration: EcsClusterConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference">EcsClusterConfigurationOutputReference</a>

---

##### `service_connect_defaults`<sup>Required</sup> <a name="service_connect_defaults" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.serviceConnectDefaults"></a>

```python
service_connect_defaults: EcsClusterServiceConnectDefaultsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference">EcsClusterServiceConnectDefaultsOutputReference</a>

---

##### `setting`<sup>Required</sup> <a name="setting" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.setting"></a>

```python
setting: EcsClusterSettingList
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList">EcsClusterSettingList</a>

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.configurationInput"></a>

```python
configuration_input: EcsClusterConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration">EcsClusterConfiguration</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `service_connect_defaults_input`<sup>Optional</sup> <a name="service_connect_defaults_input" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.serviceConnectDefaultsInput"></a>

```python
service_connect_defaults_input: EcsClusterServiceConnectDefaults
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults">EcsClusterServiceConnectDefaults</a>

---

##### `setting_input`<sup>Optional</sup> <a name="setting_input" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.settingInput"></a>

```python
setting_input: typing.Union[IResolvable, typing.List[EcsClusterSetting]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSetting">EcsClusterSetting</a>]]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EcsClusterConfig <a name="EcsClusterConfig" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_cluster

ecsCluster.EcsClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  configuration: EcsClusterConfiguration = None,
  id: str = None,
  region: str = None,
  service_connect_defaults: EcsClusterServiceConnectDefaults = None,
  setting: typing.Union[IResolvable, typing.List[EcsClusterSetting]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#name EcsCluster#name}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration">EcsClusterConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#id EcsCluster#id}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.serviceConnectDefaults">service_connect_defaults</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults">EcsClusterServiceConnectDefaults</a></code> | service_connect_defaults block. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.setting">setting</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSetting">EcsClusterSetting</a>]]</code> | setting block. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#tags EcsCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#tags_all EcsCluster#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#name EcsCluster#name}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.configuration"></a>

```python
configuration: EcsClusterConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration">EcsClusterConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#configuration EcsCluster#configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#id EcsCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#region EcsCluster#region}

---

##### `service_connect_defaults`<sup>Optional</sup> <a name="service_connect_defaults" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.serviceConnectDefaults"></a>

```python
service_connect_defaults: EcsClusterServiceConnectDefaults
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults">EcsClusterServiceConnectDefaults</a>

service_connect_defaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#service_connect_defaults EcsCluster#service_connect_defaults}

---

##### `setting`<sup>Optional</sup> <a name="setting" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.setting"></a>

```python
setting: typing.Union[IResolvable, typing.List[EcsClusterSetting]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSetting">EcsClusterSetting</a>]]

setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#setting EcsCluster#setting}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#tags EcsCluster#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#tags_all EcsCluster#tags_all}.

---

### EcsClusterConfiguration <a name="EcsClusterConfiguration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_cluster

ecsCluster.EcsClusterConfiguration(
  execute_command_configuration: EcsClusterConfigurationExecuteCommandConfiguration = None,
  managed_storage_configuration: EcsClusterConfigurationManagedStorageConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration.property.executeCommandConfiguration">execute_command_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration">EcsClusterConfigurationExecuteCommandConfiguration</a></code> | execute_command_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration.property.managedStorageConfiguration">managed_storage_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfiguration">EcsClusterConfigurationManagedStorageConfiguration</a></code> | managed_storage_configuration block. |

---

##### `execute_command_configuration`<sup>Optional</sup> <a name="execute_command_configuration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration.property.executeCommandConfiguration"></a>

```python
execute_command_configuration: EcsClusterConfigurationExecuteCommandConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration">EcsClusterConfigurationExecuteCommandConfiguration</a>

execute_command_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#execute_command_configuration EcsCluster#execute_command_configuration}

---

##### `managed_storage_configuration`<sup>Optional</sup> <a name="managed_storage_configuration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration.property.managedStorageConfiguration"></a>

```python
managed_storage_configuration: EcsClusterConfigurationManagedStorageConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfiguration">EcsClusterConfigurationManagedStorageConfiguration</a>

managed_storage_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#managed_storage_configuration EcsCluster#managed_storage_configuration}

---

### EcsClusterConfigurationExecuteCommandConfiguration <a name="EcsClusterConfigurationExecuteCommandConfiguration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_cluster

ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration(
  kms_key_id: str = None,
  log_configuration: EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration = None,
  logging: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#kms_key_id EcsCluster#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration.property.logConfiguration">log_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration">EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration</a></code> | log_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration.property.logging">logging</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#logging EcsCluster#logging}. |

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#kms_key_id EcsCluster#kms_key_id}.

---

##### `log_configuration`<sup>Optional</sup> <a name="log_configuration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration.property.logConfiguration"></a>

```python
log_configuration: EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration">EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration</a>

log_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#log_configuration EcsCluster#log_configuration}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration.property.logging"></a>

```python
logging: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#logging EcsCluster#logging}.

---

### EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration <a name="EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_cluster

ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration(
  cloud_watch_encryption_enabled: typing.Union[bool, IResolvable] = None,
  cloud_watch_log_group_name: str = None,
  s3_bucket_encryption_enabled: typing.Union[bool, IResolvable] = None,
  s3_bucket_name: str = None,
  s3_key_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.property.cloudWatchEncryptionEnabled">cloud_watch_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#cloud_watch_encryption_enabled EcsCluster#cloud_watch_encryption_enabled}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.property.cloudWatchLogGroupName">cloud_watch_log_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#cloud_watch_log_group_name EcsCluster#cloud_watch_log_group_name}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.property.s3BucketEncryptionEnabled">s3_bucket_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#s3_bucket_encryption_enabled EcsCluster#s3_bucket_encryption_enabled}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#s3_bucket_name EcsCluster#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.property.s3KeyPrefix">s3_key_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#s3_key_prefix EcsCluster#s3_key_prefix}. |

---

##### `cloud_watch_encryption_enabled`<sup>Optional</sup> <a name="cloud_watch_encryption_enabled" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.property.cloudWatchEncryptionEnabled"></a>

```python
cloud_watch_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#cloud_watch_encryption_enabled EcsCluster#cloud_watch_encryption_enabled}.

---

##### `cloud_watch_log_group_name`<sup>Optional</sup> <a name="cloud_watch_log_group_name" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.property.cloudWatchLogGroupName"></a>

```python
cloud_watch_log_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#cloud_watch_log_group_name EcsCluster#cloud_watch_log_group_name}.

---

##### `s3_bucket_encryption_enabled`<sup>Optional</sup> <a name="s3_bucket_encryption_enabled" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.property.s3BucketEncryptionEnabled"></a>

```python
s3_bucket_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#s3_bucket_encryption_enabled EcsCluster#s3_bucket_encryption_enabled}.

---

##### `s3_bucket_name`<sup>Optional</sup> <a name="s3_bucket_name" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#s3_bucket_name EcsCluster#s3_bucket_name}.

---

##### `s3_key_prefix`<sup>Optional</sup> <a name="s3_key_prefix" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.property.s3KeyPrefix"></a>

```python
s3_key_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#s3_key_prefix EcsCluster#s3_key_prefix}.

---

### EcsClusterConfigurationManagedStorageConfiguration <a name="EcsClusterConfigurationManagedStorageConfiguration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_cluster

ecsCluster.EcsClusterConfigurationManagedStorageConfiguration(
  fargate_ephemeral_storage_kms_key_id: str = None,
  kms_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfiguration.property.fargateEphemeralStorageKmsKeyId">fargate_ephemeral_storage_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#fargate_ephemeral_storage_kms_key_id EcsCluster#fargate_ephemeral_storage_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfiguration.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#kms_key_id EcsCluster#kms_key_id}. |

---

##### `fargate_ephemeral_storage_kms_key_id`<sup>Optional</sup> <a name="fargate_ephemeral_storage_kms_key_id" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfiguration.property.fargateEphemeralStorageKmsKeyId"></a>

```python
fargate_ephemeral_storage_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#fargate_ephemeral_storage_kms_key_id EcsCluster#fargate_ephemeral_storage_kms_key_id}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfiguration.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#kms_key_id EcsCluster#kms_key_id}.

---

### EcsClusterServiceConnectDefaults <a name="EcsClusterServiceConnectDefaults" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_cluster

ecsCluster.EcsClusterServiceConnectDefaults(
  namespace: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#namespace EcsCluster#namespace}. |

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#namespace EcsCluster#namespace}.

---

### EcsClusterSetting <a name="EcsClusterSetting" id="@cdktf/provider-aws.ecsCluster.EcsClusterSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsCluster.EcsClusterSetting.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_cluster

ecsCluster.EcsClusterSetting(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSetting.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#name EcsCluster#name}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSetting.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#value EcsCluster#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsCluster.EcsClusterSetting.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#name EcsCluster#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsCluster.EcsClusterSetting.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#value EcsCluster#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference <a name="EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_cluster

ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resetCloudWatchEncryptionEnabled">reset_cloud_watch_encryption_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resetCloudWatchLogGroupName">reset_cloud_watch_log_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resetS3BucketEncryptionEnabled">reset_s3_bucket_encryption_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resetS3BucketName">reset_s3_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resetS3KeyPrefix">reset_s3_key_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cloud_watch_encryption_enabled` <a name="reset_cloud_watch_encryption_enabled" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resetCloudWatchEncryptionEnabled"></a>

```python
def reset_cloud_watch_encryption_enabled() -> None
```

##### `reset_cloud_watch_log_group_name` <a name="reset_cloud_watch_log_group_name" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resetCloudWatchLogGroupName"></a>

```python
def reset_cloud_watch_log_group_name() -> None
```

##### `reset_s3_bucket_encryption_enabled` <a name="reset_s3_bucket_encryption_enabled" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resetS3BucketEncryptionEnabled"></a>

```python
def reset_s3_bucket_encryption_enabled() -> None
```

##### `reset_s3_bucket_name` <a name="reset_s3_bucket_name" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resetS3BucketName"></a>

```python
def reset_s3_bucket_name() -> None
```

##### `reset_s3_key_prefix` <a name="reset_s3_key_prefix" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resetS3KeyPrefix"></a>

```python
def reset_s3_key_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.cloudWatchEncryptionEnabledInput">cloud_watch_encryption_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.cloudWatchLogGroupNameInput">cloud_watch_log_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3BucketEncryptionEnabledInput">s3_bucket_encryption_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3BucketNameInput">s3_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3KeyPrefixInput">s3_key_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.cloudWatchEncryptionEnabled">cloud_watch_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.cloudWatchLogGroupName">cloud_watch_log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3BucketEncryptionEnabled">s3_bucket_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3KeyPrefix">s3_key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration">EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_watch_encryption_enabled_input`<sup>Optional</sup> <a name="cloud_watch_encryption_enabled_input" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.cloudWatchEncryptionEnabledInput"></a>

```python
cloud_watch_encryption_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cloud_watch_log_group_name_input`<sup>Optional</sup> <a name="cloud_watch_log_group_name_input" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.cloudWatchLogGroupNameInput"></a>

```python
cloud_watch_log_group_name_input: str
```

- *Type:* str

---

##### `s3_bucket_encryption_enabled_input`<sup>Optional</sup> <a name="s3_bucket_encryption_enabled_input" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3BucketEncryptionEnabledInput"></a>

```python
s3_bucket_encryption_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `s3_bucket_name_input`<sup>Optional</sup> <a name="s3_bucket_name_input" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3BucketNameInput"></a>

```python
s3_bucket_name_input: str
```

- *Type:* str

---

##### `s3_key_prefix_input`<sup>Optional</sup> <a name="s3_key_prefix_input" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3KeyPrefixInput"></a>

```python
s3_key_prefix_input: str
```

- *Type:* str

---

##### `cloud_watch_encryption_enabled`<sup>Required</sup> <a name="cloud_watch_encryption_enabled" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.cloudWatchEncryptionEnabled"></a>

```python
cloud_watch_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cloud_watch_log_group_name`<sup>Required</sup> <a name="cloud_watch_log_group_name" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.cloudWatchLogGroupName"></a>

```python
cloud_watch_log_group_name: str
```

- *Type:* str

---

##### `s3_bucket_encryption_enabled`<sup>Required</sup> <a name="s3_bucket_encryption_enabled" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3BucketEncryptionEnabled"></a>

```python
s3_bucket_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

---

##### `s3_key_prefix`<sup>Required</sup> <a name="s3_key_prefix" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3KeyPrefix"></a>

```python
s3_key_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration">EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration</a>

---


### EcsClusterConfigurationExecuteCommandConfigurationOutputReference <a name="EcsClusterConfigurationExecuteCommandConfigurationOutputReference" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_cluster

ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.putLogConfiguration">put_log_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.resetLogConfiguration">reset_log_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.resetLogging">reset_logging</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_log_configuration` <a name="put_log_configuration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.putLogConfiguration"></a>

```python
def put_log_configuration(
  cloud_watch_encryption_enabled: typing.Union[bool, IResolvable] = None,
  cloud_watch_log_group_name: str = None,
  s3_bucket_encryption_enabled: typing.Union[bool, IResolvable] = None,
  s3_bucket_name: str = None,
  s3_key_prefix: str = None
) -> None
```

###### `cloud_watch_encryption_enabled`<sup>Optional</sup> <a name="cloud_watch_encryption_enabled" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.putLogConfiguration.parameter.cloudWatchEncryptionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#cloud_watch_encryption_enabled EcsCluster#cloud_watch_encryption_enabled}.

---

###### `cloud_watch_log_group_name`<sup>Optional</sup> <a name="cloud_watch_log_group_name" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.putLogConfiguration.parameter.cloudWatchLogGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#cloud_watch_log_group_name EcsCluster#cloud_watch_log_group_name}.

---

###### `s3_bucket_encryption_enabled`<sup>Optional</sup> <a name="s3_bucket_encryption_enabled" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.putLogConfiguration.parameter.s3BucketEncryptionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#s3_bucket_encryption_enabled EcsCluster#s3_bucket_encryption_enabled}.

---

###### `s3_bucket_name`<sup>Optional</sup> <a name="s3_bucket_name" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.putLogConfiguration.parameter.s3BucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#s3_bucket_name EcsCluster#s3_bucket_name}.

---

###### `s3_key_prefix`<sup>Optional</sup> <a name="s3_key_prefix" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.putLogConfiguration.parameter.s3KeyPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#s3_key_prefix EcsCluster#s3_key_prefix}.

---

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_log_configuration` <a name="reset_log_configuration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.resetLogConfiguration"></a>

```python
def reset_log_configuration() -> None
```

##### `reset_logging` <a name="reset_logging" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.resetLogging"></a>

```python
def reset_logging() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.logConfiguration">log_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference">EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.logConfigurationInput">log_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration">EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.loggingInput">logging_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.logging">logging</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration">EcsClusterConfigurationExecuteCommandConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_configuration`<sup>Required</sup> <a name="log_configuration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.logConfiguration"></a>

```python
log_configuration: EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference">EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference</a>

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `log_configuration_input`<sup>Optional</sup> <a name="log_configuration_input" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.logConfigurationInput"></a>

```python
log_configuration_input: EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration">EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration</a>

---

##### `logging_input`<sup>Optional</sup> <a name="logging_input" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.loggingInput"></a>

```python
logging_input: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.logging"></a>

```python
logging: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: EcsClusterConfigurationExecuteCommandConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration">EcsClusterConfigurationExecuteCommandConfiguration</a>

---


### EcsClusterConfigurationManagedStorageConfigurationOutputReference <a name="EcsClusterConfigurationManagedStorageConfigurationOutputReference" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_cluster

ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.resetFargateEphemeralStorageKmsKeyId">reset_fargate_ephemeral_storage_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fargate_ephemeral_storage_kms_key_id` <a name="reset_fargate_ephemeral_storage_kms_key_id" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.resetFargateEphemeralStorageKmsKeyId"></a>

```python
def reset_fargate_ephemeral_storage_kms_key_id() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.property.fargateEphemeralStorageKmsKeyIdInput">fargate_ephemeral_storage_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.property.fargateEphemeralStorageKmsKeyId">fargate_ephemeral_storage_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfiguration">EcsClusterConfigurationManagedStorageConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fargate_ephemeral_storage_kms_key_id_input`<sup>Optional</sup> <a name="fargate_ephemeral_storage_kms_key_id_input" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.property.fargateEphemeralStorageKmsKeyIdInput"></a>

```python
fargate_ephemeral_storage_kms_key_id_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `fargate_ephemeral_storage_kms_key_id`<sup>Required</sup> <a name="fargate_ephemeral_storage_kms_key_id" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.property.fargateEphemeralStorageKmsKeyId"></a>

```python
fargate_ephemeral_storage_kms_key_id: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: EcsClusterConfigurationManagedStorageConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfiguration">EcsClusterConfigurationManagedStorageConfiguration</a>

---


### EcsClusterConfigurationOutputReference <a name="EcsClusterConfigurationOutputReference" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_cluster

ecsCluster.EcsClusterConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.putExecuteCommandConfiguration">put_execute_command_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.putManagedStorageConfiguration">put_managed_storage_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.resetExecuteCommandConfiguration">reset_execute_command_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.resetManagedStorageConfiguration">reset_managed_storage_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_execute_command_configuration` <a name="put_execute_command_configuration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.putExecuteCommandConfiguration"></a>

```python
def put_execute_command_configuration(
  kms_key_id: str = None,
  log_configuration: EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration = None,
  logging: str = None
) -> None
```

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.putExecuteCommandConfiguration.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#kms_key_id EcsCluster#kms_key_id}.

---

###### `log_configuration`<sup>Optional</sup> <a name="log_configuration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.putExecuteCommandConfiguration.parameter.logConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration">EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration</a>

log_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#log_configuration EcsCluster#log_configuration}

---

###### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.putExecuteCommandConfiguration.parameter.logging"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#logging EcsCluster#logging}.

---

##### `put_managed_storage_configuration` <a name="put_managed_storage_configuration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.putManagedStorageConfiguration"></a>

```python
def put_managed_storage_configuration(
  fargate_ephemeral_storage_kms_key_id: str = None,
  kms_key_id: str = None
) -> None
```

###### `fargate_ephemeral_storage_kms_key_id`<sup>Optional</sup> <a name="fargate_ephemeral_storage_kms_key_id" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.putManagedStorageConfiguration.parameter.fargateEphemeralStorageKmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#fargate_ephemeral_storage_kms_key_id EcsCluster#fargate_ephemeral_storage_kms_key_id}.

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.putManagedStorageConfiguration.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#kms_key_id EcsCluster#kms_key_id}.

---

##### `reset_execute_command_configuration` <a name="reset_execute_command_configuration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.resetExecuteCommandConfiguration"></a>

```python
def reset_execute_command_configuration() -> None
```

##### `reset_managed_storage_configuration` <a name="reset_managed_storage_configuration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.resetManagedStorageConfiguration"></a>

```python
def reset_managed_storage_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.executeCommandConfiguration">execute_command_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference">EcsClusterConfigurationExecuteCommandConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.managedStorageConfiguration">managed_storage_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference">EcsClusterConfigurationManagedStorageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.executeCommandConfigurationInput">execute_command_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration">EcsClusterConfigurationExecuteCommandConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.managedStorageConfigurationInput">managed_storage_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfiguration">EcsClusterConfigurationManagedStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration">EcsClusterConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `execute_command_configuration`<sup>Required</sup> <a name="execute_command_configuration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.executeCommandConfiguration"></a>

```python
execute_command_configuration: EcsClusterConfigurationExecuteCommandConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference">EcsClusterConfigurationExecuteCommandConfigurationOutputReference</a>

---

##### `managed_storage_configuration`<sup>Required</sup> <a name="managed_storage_configuration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.managedStorageConfiguration"></a>

```python
managed_storage_configuration: EcsClusterConfigurationManagedStorageConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfigurationOutputReference">EcsClusterConfigurationManagedStorageConfigurationOutputReference</a>

---

##### `execute_command_configuration_input`<sup>Optional</sup> <a name="execute_command_configuration_input" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.executeCommandConfigurationInput"></a>

```python
execute_command_configuration_input: EcsClusterConfigurationExecuteCommandConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration">EcsClusterConfigurationExecuteCommandConfiguration</a>

---

##### `managed_storage_configuration_input`<sup>Optional</sup> <a name="managed_storage_configuration_input" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.managedStorageConfigurationInput"></a>

```python
managed_storage_configuration_input: EcsClusterConfigurationManagedStorageConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationManagedStorageConfiguration">EcsClusterConfigurationManagedStorageConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: EcsClusterConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration">EcsClusterConfiguration</a>

---


### EcsClusterServiceConnectDefaultsOutputReference <a name="EcsClusterServiceConnectDefaultsOutputReference" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_cluster

ecsCluster.EcsClusterServiceConnectDefaultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults">EcsClusterServiceConnectDefaults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.property.internalValue"></a>

```python
internal_value: EcsClusterServiceConnectDefaults
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults">EcsClusterServiceConnectDefaults</a>

---


### EcsClusterSettingList <a name="EcsClusterSettingList" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_cluster

ecsCluster.EcsClusterSettingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsClusterSettingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSetting">EcsClusterSetting</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EcsClusterSetting]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSetting">EcsClusterSetting</a>]]

---


### EcsClusterSettingOutputReference <a name="EcsClusterSettingOutputReference" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_cluster

ecsCluster.EcsClusterSettingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSetting">EcsClusterSetting</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EcsClusterSetting]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSetting">EcsClusterSetting</a>]

---



