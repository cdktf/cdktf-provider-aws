# `ec2NetworkInsightsPath` Submodule <a name="`ec2NetworkInsightsPath` Submodule" id="@cdktf/provider-aws.ec2NetworkInsightsPath"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2NetworkInsightsPath <a name="Ec2NetworkInsightsPath" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path aws_ec2_network_insights_path}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_network_insights_path

ec2NetworkInsightsPath.Ec2NetworkInsightsPath(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  protocol: str,
  source: str,
  destination: str = None,
  destination_ip: str = None,
  destination_port: typing.Union[int, float] = None,
  filter_at_destination: Ec2NetworkInsightsPathFilterAtDestination = None,
  filter_at_source: Ec2NetworkInsightsPathFilterAtSource = None,
  id: str = None,
  source_ip: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#protocol Ec2NetworkInsightsPath#protocol}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#source Ec2NetworkInsightsPath#source}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#destination Ec2NetworkInsightsPath#destination}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.destinationIp">destination_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#destination_ip Ec2NetworkInsightsPath#destination_ip}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.destinationPort">destination_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#destination_port Ec2NetworkInsightsPath#destination_port}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.filterAtDestination">filter_at_destination</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination">Ec2NetworkInsightsPathFilterAtDestination</a></code> | filter_at_destination block. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.filterAtSource">filter_at_source</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource">Ec2NetworkInsightsPathFilterAtSource</a></code> | filter_at_source block. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#id Ec2NetworkInsightsPath#id}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.sourceIp">source_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#source_ip Ec2NetworkInsightsPath#source_ip}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#tags Ec2NetworkInsightsPath#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#tags_all Ec2NetworkInsightsPath#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#protocol Ec2NetworkInsightsPath#protocol}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.source"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#source Ec2NetworkInsightsPath#source}.

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#destination Ec2NetworkInsightsPath#destination}.

---

##### `destination_ip`<sup>Optional</sup> <a name="destination_ip" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.destinationIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#destination_ip Ec2NetworkInsightsPath#destination_ip}.

---

##### `destination_port`<sup>Optional</sup> <a name="destination_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.destinationPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#destination_port Ec2NetworkInsightsPath#destination_port}.

---

##### `filter_at_destination`<sup>Optional</sup> <a name="filter_at_destination" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.filterAtDestination"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination">Ec2NetworkInsightsPathFilterAtDestination</a>

filter_at_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#filter_at_destination Ec2NetworkInsightsPath#filter_at_destination}

---

##### `filter_at_source`<sup>Optional</sup> <a name="filter_at_source" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.filterAtSource"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource">Ec2NetworkInsightsPathFilterAtSource</a>

filter_at_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#filter_at_source Ec2NetworkInsightsPath#filter_at_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#id Ec2NetworkInsightsPath#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source_ip`<sup>Optional</sup> <a name="source_ip" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.sourceIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#source_ip Ec2NetworkInsightsPath#source_ip}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#tags Ec2NetworkInsightsPath#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#tags_all Ec2NetworkInsightsPath#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.putFilterAtDestination">put_filter_at_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.putFilterAtSource">put_filter_at_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetDestination">reset_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetDestinationIp">reset_destination_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetDestinationPort">reset_destination_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetFilterAtDestination">reset_filter_at_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetFilterAtSource">reset_filter_at_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetSourceIp">reset_source_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_filter_at_destination` <a name="put_filter_at_destination" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.putFilterAtDestination"></a>

```python
def put_filter_at_destination(
  destination_address: str = None,
  destination_port_range: Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange = None,
  source_address: str = None,
  source_port_range: Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange = None
) -> None
```

###### `destination_address`<sup>Optional</sup> <a name="destination_address" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.putFilterAtDestination.parameter.destinationAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#destination_address Ec2NetworkInsightsPath#destination_address}.

---

###### `destination_port_range`<sup>Optional</sup> <a name="destination_port_range" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.putFilterAtDestination.parameter.destinationPortRange"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange">Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange</a>

destination_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#destination_port_range Ec2NetworkInsightsPath#destination_port_range}

---

###### `source_address`<sup>Optional</sup> <a name="source_address" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.putFilterAtDestination.parameter.sourceAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#source_address Ec2NetworkInsightsPath#source_address}.

---

###### `source_port_range`<sup>Optional</sup> <a name="source_port_range" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.putFilterAtDestination.parameter.sourcePortRange"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange">Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#source_port_range Ec2NetworkInsightsPath#source_port_range}

---

##### `put_filter_at_source` <a name="put_filter_at_source" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.putFilterAtSource"></a>

```python
def put_filter_at_source(
  destination_address: str = None,
  destination_port_range: Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange = None,
  source_address: str = None,
  source_port_range: Ec2NetworkInsightsPathFilterAtSourceSourcePortRange = None
) -> None
```

###### `destination_address`<sup>Optional</sup> <a name="destination_address" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.putFilterAtSource.parameter.destinationAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#destination_address Ec2NetworkInsightsPath#destination_address}.

---

###### `destination_port_range`<sup>Optional</sup> <a name="destination_port_range" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.putFilterAtSource.parameter.destinationPortRange"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange">Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange</a>

destination_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#destination_port_range Ec2NetworkInsightsPath#destination_port_range}

---

###### `source_address`<sup>Optional</sup> <a name="source_address" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.putFilterAtSource.parameter.sourceAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#source_address Ec2NetworkInsightsPath#source_address}.

---

###### `source_port_range`<sup>Optional</sup> <a name="source_port_range" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.putFilterAtSource.parameter.sourcePortRange"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRange">Ec2NetworkInsightsPathFilterAtSourceSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#source_port_range Ec2NetworkInsightsPath#source_port_range}

---

##### `reset_destination` <a name="reset_destination" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetDestination"></a>

```python
def reset_destination() -> None
```

##### `reset_destination_ip` <a name="reset_destination_ip" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetDestinationIp"></a>

```python
def reset_destination_ip() -> None
```

##### `reset_destination_port` <a name="reset_destination_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetDestinationPort"></a>

```python
def reset_destination_port() -> None
```

##### `reset_filter_at_destination` <a name="reset_filter_at_destination" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetFilterAtDestination"></a>

```python
def reset_filter_at_destination() -> None
```

##### `reset_filter_at_source` <a name="reset_filter_at_source" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetFilterAtSource"></a>

```python
def reset_filter_at_source() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_source_ip` <a name="reset_source_ip" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetSourceIp"></a>

```python
def reset_source_ip() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Ec2NetworkInsightsPath resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ec2_network_insights_path

ec2NetworkInsightsPath.Ec2NetworkInsightsPath.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ec2_network_insights_path

ec2NetworkInsightsPath.Ec2NetworkInsightsPath.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ec2_network_insights_path

ec2NetworkInsightsPath.Ec2NetworkInsightsPath.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import ec2_network_insights_path

ec2NetworkInsightsPath.Ec2NetworkInsightsPath.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Ec2NetworkInsightsPath resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2NetworkInsightsPath to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2NetworkInsightsPath that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Ec2NetworkInsightsPath to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationArn">destination_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.filterAtDestination">filter_at_destination</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference">Ec2NetworkInsightsPathFilterAtDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.filterAtSource">filter_at_source</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference">Ec2NetworkInsightsPathFilterAtSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceArn">source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationIpInput">destination_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationPortInput">destination_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.filterAtDestinationInput">filter_at_destination_input</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination">Ec2NetworkInsightsPathFilterAtDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.filterAtSourceInput">filter_at_source_input</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource">Ec2NetworkInsightsPathFilterAtSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceIpInput">source_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationIp">destination_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationPort">destination_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceIp">source_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `destination_arn`<sup>Required</sup> <a name="destination_arn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationArn"></a>

```python
destination_arn: str
```

- *Type:* str

---

##### `filter_at_destination`<sup>Required</sup> <a name="filter_at_destination" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.filterAtDestination"></a>

```python
filter_at_destination: Ec2NetworkInsightsPathFilterAtDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference">Ec2NetworkInsightsPathFilterAtDestinationOutputReference</a>

---

##### `filter_at_source`<sup>Required</sup> <a name="filter_at_source" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.filterAtSource"></a>

```python
filter_at_source: Ec2NetworkInsightsPathFilterAtSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference">Ec2NetworkInsightsPathFilterAtSourceOutputReference</a>

---

##### `source_arn`<sup>Required</sup> <a name="source_arn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceArn"></a>

```python
source_arn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination_ip_input`<sup>Optional</sup> <a name="destination_ip_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationIpInput"></a>

```python
destination_ip_input: str
```

- *Type:* str

---

##### `destination_port_input`<sup>Optional</sup> <a name="destination_port_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationPortInput"></a>

```python
destination_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filter_at_destination_input`<sup>Optional</sup> <a name="filter_at_destination_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.filterAtDestinationInput"></a>

```python
filter_at_destination_input: Ec2NetworkInsightsPathFilterAtDestination
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination">Ec2NetworkInsightsPathFilterAtDestination</a>

---

##### `filter_at_source_input`<sup>Optional</sup> <a name="filter_at_source_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.filterAtSourceInput"></a>

```python
filter_at_source_input: Ec2NetworkInsightsPathFilterAtSource
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource">Ec2NetworkInsightsPathFilterAtSource</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `source_ip_input`<sup>Optional</sup> <a name="source_ip_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceIpInput"></a>

```python
source_ip_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `destination_ip`<sup>Required</sup> <a name="destination_ip" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationIp"></a>

```python
destination_ip: str
```

- *Type:* str

---

##### `destination_port`<sup>Required</sup> <a name="destination_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationPort"></a>

```python
destination_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `source_ip`<sup>Required</sup> <a name="source_ip" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceIp"></a>

```python
source_ip: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2NetworkInsightsPathConfig <a name="Ec2NetworkInsightsPathConfig" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_network_insights_path

ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  protocol: str,
  source: str,
  destination: str = None,
  destination_ip: str = None,
  destination_port: typing.Union[int, float] = None,
  filter_at_destination: Ec2NetworkInsightsPathFilterAtDestination = None,
  filter_at_source: Ec2NetworkInsightsPathFilterAtSource = None,
  id: str = None,
  source_ip: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#protocol Ec2NetworkInsightsPath#protocol}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#source Ec2NetworkInsightsPath#source}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#destination Ec2NetworkInsightsPath#destination}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.destinationIp">destination_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#destination_ip Ec2NetworkInsightsPath#destination_ip}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.destinationPort">destination_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#destination_port Ec2NetworkInsightsPath#destination_port}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.filterAtDestination">filter_at_destination</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination">Ec2NetworkInsightsPathFilterAtDestination</a></code> | filter_at_destination block. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.filterAtSource">filter_at_source</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource">Ec2NetworkInsightsPathFilterAtSource</a></code> | filter_at_source block. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#id Ec2NetworkInsightsPath#id}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.sourceIp">source_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#source_ip Ec2NetworkInsightsPath#source_ip}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#tags Ec2NetworkInsightsPath#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#tags_all Ec2NetworkInsightsPath#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#protocol Ec2NetworkInsightsPath#protocol}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#source Ec2NetworkInsightsPath#source}.

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#destination Ec2NetworkInsightsPath#destination}.

---

##### `destination_ip`<sup>Optional</sup> <a name="destination_ip" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.destinationIp"></a>

```python
destination_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#destination_ip Ec2NetworkInsightsPath#destination_ip}.

---

##### `destination_port`<sup>Optional</sup> <a name="destination_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.destinationPort"></a>

```python
destination_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#destination_port Ec2NetworkInsightsPath#destination_port}.

---

##### `filter_at_destination`<sup>Optional</sup> <a name="filter_at_destination" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.filterAtDestination"></a>

```python
filter_at_destination: Ec2NetworkInsightsPathFilterAtDestination
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination">Ec2NetworkInsightsPathFilterAtDestination</a>

filter_at_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#filter_at_destination Ec2NetworkInsightsPath#filter_at_destination}

---

##### `filter_at_source`<sup>Optional</sup> <a name="filter_at_source" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.filterAtSource"></a>

```python
filter_at_source: Ec2NetworkInsightsPathFilterAtSource
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource">Ec2NetworkInsightsPathFilterAtSource</a>

filter_at_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#filter_at_source Ec2NetworkInsightsPath#filter_at_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#id Ec2NetworkInsightsPath#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source_ip`<sup>Optional</sup> <a name="source_ip" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.sourceIp"></a>

```python
source_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#source_ip Ec2NetworkInsightsPath#source_ip}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#tags Ec2NetworkInsightsPath#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#tags_all Ec2NetworkInsightsPath#tags_all}.

---

### Ec2NetworkInsightsPathFilterAtDestination <a name="Ec2NetworkInsightsPathFilterAtDestination" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_network_insights_path

ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination(
  destination_address: str = None,
  destination_port_range: Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange = None,
  source_address: str = None,
  source_port_range: Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination.property.destinationAddress">destination_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#destination_address Ec2NetworkInsightsPath#destination_address}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination.property.destinationPortRange">destination_port_range</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange">Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange</a></code> | destination_port_range block. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination.property.sourceAddress">source_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#source_address Ec2NetworkInsightsPath#source_address}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination.property.sourcePortRange">source_port_range</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange">Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange</a></code> | source_port_range block. |

---

##### `destination_address`<sup>Optional</sup> <a name="destination_address" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination.property.destinationAddress"></a>

```python
destination_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#destination_address Ec2NetworkInsightsPath#destination_address}.

---

##### `destination_port_range`<sup>Optional</sup> <a name="destination_port_range" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination.property.destinationPortRange"></a>

```python
destination_port_range: Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange">Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange</a>

destination_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#destination_port_range Ec2NetworkInsightsPath#destination_port_range}

---

##### `source_address`<sup>Optional</sup> <a name="source_address" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination.property.sourceAddress"></a>

```python
source_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#source_address Ec2NetworkInsightsPath#source_address}.

---

##### `source_port_range`<sup>Optional</sup> <a name="source_port_range" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination.property.sourcePortRange"></a>

```python
source_port_range: Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange">Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#source_port_range Ec2NetworkInsightsPath#source_port_range}

---

### Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange <a name="Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_network_insights_path

ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange(
  from_port: typing.Union[int, float] = None,
  to_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#from_port Ec2NetworkInsightsPath#from_port}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#to_port Ec2NetworkInsightsPath#to_port}. |

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#from_port Ec2NetworkInsightsPath#from_port}.

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#to_port Ec2NetworkInsightsPath#to_port}.

---

### Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange <a name="Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_network_insights_path

ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange(
  from_port: typing.Union[int, float] = None,
  to_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#from_port Ec2NetworkInsightsPath#from_port}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#to_port Ec2NetworkInsightsPath#to_port}. |

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#from_port Ec2NetworkInsightsPath#from_port}.

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#to_port Ec2NetworkInsightsPath#to_port}.

---

### Ec2NetworkInsightsPathFilterAtSource <a name="Ec2NetworkInsightsPathFilterAtSource" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_network_insights_path

ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource(
  destination_address: str = None,
  destination_port_range: Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange = None,
  source_address: str = None,
  source_port_range: Ec2NetworkInsightsPathFilterAtSourceSourcePortRange = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource.property.destinationAddress">destination_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#destination_address Ec2NetworkInsightsPath#destination_address}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource.property.destinationPortRange">destination_port_range</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange">Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange</a></code> | destination_port_range block. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource.property.sourceAddress">source_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#source_address Ec2NetworkInsightsPath#source_address}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource.property.sourcePortRange">source_port_range</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRange">Ec2NetworkInsightsPathFilterAtSourceSourcePortRange</a></code> | source_port_range block. |

---

##### `destination_address`<sup>Optional</sup> <a name="destination_address" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource.property.destinationAddress"></a>

```python
destination_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#destination_address Ec2NetworkInsightsPath#destination_address}.

---

##### `destination_port_range`<sup>Optional</sup> <a name="destination_port_range" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource.property.destinationPortRange"></a>

```python
destination_port_range: Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange">Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange</a>

destination_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#destination_port_range Ec2NetworkInsightsPath#destination_port_range}

---

##### `source_address`<sup>Optional</sup> <a name="source_address" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource.property.sourceAddress"></a>

```python
source_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#source_address Ec2NetworkInsightsPath#source_address}.

---

##### `source_port_range`<sup>Optional</sup> <a name="source_port_range" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource.property.sourcePortRange"></a>

```python
source_port_range: Ec2NetworkInsightsPathFilterAtSourceSourcePortRange
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRange">Ec2NetworkInsightsPathFilterAtSourceSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#source_port_range Ec2NetworkInsightsPath#source_port_range}

---

### Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange <a name="Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_network_insights_path

ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange(
  from_port: typing.Union[int, float] = None,
  to_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#from_port Ec2NetworkInsightsPath#from_port}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#to_port Ec2NetworkInsightsPath#to_port}. |

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#from_port Ec2NetworkInsightsPath#from_port}.

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#to_port Ec2NetworkInsightsPath#to_port}.

---

### Ec2NetworkInsightsPathFilterAtSourceSourcePortRange <a name="Ec2NetworkInsightsPathFilterAtSourceSourcePortRange" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRange.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_network_insights_path

ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRange(
  from_port: typing.Union[int, float] = None,
  to_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRange.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#from_port Ec2NetworkInsightsPath#from_port}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRange.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#to_port Ec2NetworkInsightsPath#to_port}. |

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRange.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#from_port Ec2NetworkInsightsPath#from_port}.

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRange.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#to_port Ec2NetworkInsightsPath#to_port}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference <a name="Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_network_insights_path

ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.resetFromPort">reset_from_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.resetToPort">reset_to_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from_port` <a name="reset_from_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.resetFromPort"></a>

```python
def reset_from_port() -> None
```

##### `reset_to_port` <a name="reset_to_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.resetToPort"></a>

```python
def reset_to_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange">Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.internalValue"></a>

```python
internal_value: Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange">Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange</a>

---


### Ec2NetworkInsightsPathFilterAtDestinationOutputReference <a name="Ec2NetworkInsightsPathFilterAtDestinationOutputReference" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_network_insights_path

ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.putDestinationPortRange">put_destination_port_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.putSourcePortRange">put_source_port_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.resetDestinationAddress">reset_destination_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.resetDestinationPortRange">reset_destination_port_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.resetSourceAddress">reset_source_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.resetSourcePortRange">reset_source_port_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination_port_range` <a name="put_destination_port_range" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.putDestinationPortRange"></a>

```python
def put_destination_port_range(
  from_port: typing.Union[int, float] = None,
  to_port: typing.Union[int, float] = None
) -> None
```

###### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.putDestinationPortRange.parameter.fromPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#from_port Ec2NetworkInsightsPath#from_port}.

---

###### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.putDestinationPortRange.parameter.toPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#to_port Ec2NetworkInsightsPath#to_port}.

---

##### `put_source_port_range` <a name="put_source_port_range" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.putSourcePortRange"></a>

```python
def put_source_port_range(
  from_port: typing.Union[int, float] = None,
  to_port: typing.Union[int, float] = None
) -> None
```

###### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.putSourcePortRange.parameter.fromPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#from_port Ec2NetworkInsightsPath#from_port}.

---

###### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.putSourcePortRange.parameter.toPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#to_port Ec2NetworkInsightsPath#to_port}.

---

##### `reset_destination_address` <a name="reset_destination_address" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.resetDestinationAddress"></a>

```python
def reset_destination_address() -> None
```

##### `reset_destination_port_range` <a name="reset_destination_port_range" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.resetDestinationPortRange"></a>

```python
def reset_destination_port_range() -> None
```

##### `reset_source_address` <a name="reset_source_address" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.resetSourceAddress"></a>

```python
def reset_source_address() -> None
```

##### `reset_source_port_range` <a name="reset_source_port_range" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.resetSourcePortRange"></a>

```python
def reset_source_port_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.destinationPortRange">destination_port_range</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference">Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.sourcePortRange">source_port_range</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference">Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.destinationAddressInput">destination_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.destinationPortRangeInput">destination_port_range_input</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange">Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.sourceAddressInput">source_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.sourcePortRangeInput">source_port_range_input</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange">Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.destinationAddress">destination_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.sourceAddress">source_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination">Ec2NetworkInsightsPathFilterAtDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_port_range`<sup>Required</sup> <a name="destination_port_range" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.destinationPortRange"></a>

```python
destination_port_range: Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference">Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference</a>

---

##### `source_port_range`<sup>Required</sup> <a name="source_port_range" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.sourcePortRange"></a>

```python
source_port_range: Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference">Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference</a>

---

##### `destination_address_input`<sup>Optional</sup> <a name="destination_address_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.destinationAddressInput"></a>

```python
destination_address_input: str
```

- *Type:* str

---

##### `destination_port_range_input`<sup>Optional</sup> <a name="destination_port_range_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.destinationPortRangeInput"></a>

```python
destination_port_range_input: Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange">Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange</a>

---

##### `source_address_input`<sup>Optional</sup> <a name="source_address_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.sourceAddressInput"></a>

```python
source_address_input: str
```

- *Type:* str

---

##### `source_port_range_input`<sup>Optional</sup> <a name="source_port_range_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.sourcePortRangeInput"></a>

```python
source_port_range_input: Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange">Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange</a>

---

##### `destination_address`<sup>Required</sup> <a name="destination_address" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.destinationAddress"></a>

```python
destination_address: str
```

- *Type:* str

---

##### `source_address`<sup>Required</sup> <a name="source_address" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.sourceAddress"></a>

```python
source_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.internalValue"></a>

```python
internal_value: Ec2NetworkInsightsPathFilterAtDestination
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination">Ec2NetworkInsightsPathFilterAtDestination</a>

---


### Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference <a name="Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_network_insights_path

ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.resetFromPort">reset_from_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.resetToPort">reset_to_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from_port` <a name="reset_from_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.resetFromPort"></a>

```python
def reset_from_port() -> None
```

##### `reset_to_port` <a name="reset_to_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.resetToPort"></a>

```python
def reset_to_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange">Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.internalValue"></a>

```python
internal_value: Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange">Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange</a>

---


### Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference <a name="Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_network_insights_path

ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.resetFromPort">reset_from_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.resetToPort">reset_to_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from_port` <a name="reset_from_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.resetFromPort"></a>

```python
def reset_from_port() -> None
```

##### `reset_to_port` <a name="reset_to_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.resetToPort"></a>

```python
def reset_to_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange">Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.internalValue"></a>

```python
internal_value: Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange">Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange</a>

---


### Ec2NetworkInsightsPathFilterAtSourceOutputReference <a name="Ec2NetworkInsightsPathFilterAtSourceOutputReference" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_network_insights_path

ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.putDestinationPortRange">put_destination_port_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.putSourcePortRange">put_source_port_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.resetDestinationAddress">reset_destination_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.resetDestinationPortRange">reset_destination_port_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.resetSourceAddress">reset_source_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.resetSourcePortRange">reset_source_port_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination_port_range` <a name="put_destination_port_range" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.putDestinationPortRange"></a>

```python
def put_destination_port_range(
  from_port: typing.Union[int, float] = None,
  to_port: typing.Union[int, float] = None
) -> None
```

###### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.putDestinationPortRange.parameter.fromPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#from_port Ec2NetworkInsightsPath#from_port}.

---

###### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.putDestinationPortRange.parameter.toPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#to_port Ec2NetworkInsightsPath#to_port}.

---

##### `put_source_port_range` <a name="put_source_port_range" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.putSourcePortRange"></a>

```python
def put_source_port_range(
  from_port: typing.Union[int, float] = None,
  to_port: typing.Union[int, float] = None
) -> None
```

###### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.putSourcePortRange.parameter.fromPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#from_port Ec2NetworkInsightsPath#from_port}.

---

###### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.putSourcePortRange.parameter.toPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/ec2_network_insights_path#to_port Ec2NetworkInsightsPath#to_port}.

---

##### `reset_destination_address` <a name="reset_destination_address" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.resetDestinationAddress"></a>

```python
def reset_destination_address() -> None
```

##### `reset_destination_port_range` <a name="reset_destination_port_range" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.resetDestinationPortRange"></a>

```python
def reset_destination_port_range() -> None
```

##### `reset_source_address` <a name="reset_source_address" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.resetSourceAddress"></a>

```python
def reset_source_address() -> None
```

##### `reset_source_port_range` <a name="reset_source_port_range" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.resetSourcePortRange"></a>

```python
def reset_source_port_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.destinationPortRange">destination_port_range</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference">Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.sourcePortRange">source_port_range</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference">Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.destinationAddressInput">destination_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.destinationPortRangeInput">destination_port_range_input</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange">Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.sourceAddressInput">source_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.sourcePortRangeInput">source_port_range_input</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRange">Ec2NetworkInsightsPathFilterAtSourceSourcePortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.destinationAddress">destination_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.sourceAddress">source_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource">Ec2NetworkInsightsPathFilterAtSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_port_range`<sup>Required</sup> <a name="destination_port_range" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.destinationPortRange"></a>

```python
destination_port_range: Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference">Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference</a>

---

##### `source_port_range`<sup>Required</sup> <a name="source_port_range" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.sourcePortRange"></a>

```python
source_port_range: Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference">Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference</a>

---

##### `destination_address_input`<sup>Optional</sup> <a name="destination_address_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.destinationAddressInput"></a>

```python
destination_address_input: str
```

- *Type:* str

---

##### `destination_port_range_input`<sup>Optional</sup> <a name="destination_port_range_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.destinationPortRangeInput"></a>

```python
destination_port_range_input: Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange">Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange</a>

---

##### `source_address_input`<sup>Optional</sup> <a name="source_address_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.sourceAddressInput"></a>

```python
source_address_input: str
```

- *Type:* str

---

##### `source_port_range_input`<sup>Optional</sup> <a name="source_port_range_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.sourcePortRangeInput"></a>

```python
source_port_range_input: Ec2NetworkInsightsPathFilterAtSourceSourcePortRange
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRange">Ec2NetworkInsightsPathFilterAtSourceSourcePortRange</a>

---

##### `destination_address`<sup>Required</sup> <a name="destination_address" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.destinationAddress"></a>

```python
destination_address: str
```

- *Type:* str

---

##### `source_address`<sup>Required</sup> <a name="source_address" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.sourceAddress"></a>

```python
source_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.internalValue"></a>

```python
internal_value: Ec2NetworkInsightsPathFilterAtSource
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource">Ec2NetworkInsightsPathFilterAtSource</a>

---


### Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference <a name="Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_network_insights_path

ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.resetFromPort">reset_from_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.resetToPort">reset_to_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from_port` <a name="reset_from_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.resetFromPort"></a>

```python
def reset_from_port() -> None
```

##### `reset_to_port` <a name="reset_to_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.resetToPort"></a>

```python
def reset_to_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRange">Ec2NetworkInsightsPathFilterAtSourceSourcePortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.internalValue"></a>

```python
internal_value: Ec2NetworkInsightsPathFilterAtSourceSourcePortRange
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRange">Ec2NetworkInsightsPathFilterAtSourceSourcePortRange</a>

---



