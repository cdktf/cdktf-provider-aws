# `internetmonitorMonitor` Submodule <a name="`internetmonitorMonitor` Submodule" id="@cdktf/provider-aws.internetmonitorMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InternetmonitorMonitor <a name="InternetmonitorMonitor" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor aws_internetmonitor_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import internetmonitor_monitor

internetmonitorMonitor.InternetmonitorMonitor(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  monitor_name: str,
  health_events_config: InternetmonitorMonitorHealthEventsConfig = None,
  id: str = None,
  internet_measurements_log_delivery: InternetmonitorMonitorInternetMeasurementsLogDelivery = None,
  max_city_networks_to_monitor: typing.Union[int, float] = None,
  resources: typing.List[str] = None,
  status: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  traffic_percentage_to_monitor: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.monitorName">monitor_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#monitor_name InternetmonitorMonitor#monitor_name}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.healthEventsConfig">health_events_config</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a></code> | health_events_config block. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#id InternetmonitorMonitor#id}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.internetMeasurementsLogDelivery">internet_measurements_log_delivery</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a></code> | internet_measurements_log_delivery block. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.maxCityNetworksToMonitor">max_city_networks_to_monitor</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#max_city_networks_to_monitor InternetmonitorMonitor#max_city_networks_to_monitor}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.resources">resources</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#resources InternetmonitorMonitor#resources}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#status InternetmonitorMonitor#status}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#tags InternetmonitorMonitor#tags}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#tags_all InternetmonitorMonitor#tags_all}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.trafficPercentageToMonitor">traffic_percentage_to_monitor</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#traffic_percentage_to_monitor InternetmonitorMonitor#traffic_percentage_to_monitor}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `monitor_name`<sup>Required</sup> <a name="monitor_name" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.monitorName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#monitor_name InternetmonitorMonitor#monitor_name}.

---

##### `health_events_config`<sup>Optional</sup> <a name="health_events_config" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.healthEventsConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a>

health_events_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#health_events_config InternetmonitorMonitor#health_events_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#id InternetmonitorMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internet_measurements_log_delivery`<sup>Optional</sup> <a name="internet_measurements_log_delivery" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.internetMeasurementsLogDelivery"></a>

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a>

internet_measurements_log_delivery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#internet_measurements_log_delivery InternetmonitorMonitor#internet_measurements_log_delivery}

---

##### `max_city_networks_to_monitor`<sup>Optional</sup> <a name="max_city_networks_to_monitor" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.maxCityNetworksToMonitor"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#max_city_networks_to_monitor InternetmonitorMonitor#max_city_networks_to_monitor}.

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.resources"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#resources InternetmonitorMonitor#resources}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#status InternetmonitorMonitor#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#tags InternetmonitorMonitor#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#tags_all InternetmonitorMonitor#tags_all}.

---

##### `traffic_percentage_to_monitor`<sup>Optional</sup> <a name="traffic_percentage_to_monitor" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.trafficPercentageToMonitor"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#traffic_percentage_to_monitor InternetmonitorMonitor#traffic_percentage_to_monitor}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.putHealthEventsConfig">put_health_events_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.putInternetMeasurementsLogDelivery">put_internet_measurements_log_delivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetHealthEventsConfig">reset_health_events_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetInternetMeasurementsLogDelivery">reset_internet_measurements_log_delivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetMaxCityNetworksToMonitor">reset_max_city_networks_to_monitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetResources">reset_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetTrafficPercentageToMonitor">reset_traffic_percentage_to_monitor</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_health_events_config` <a name="put_health_events_config" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.putHealthEventsConfig"></a>

```python
def put_health_events_config(
  availability_score_threshold: typing.Union[int, float] = None,
  performance_score_threshold: typing.Union[int, float] = None
) -> None
```

###### `availability_score_threshold`<sup>Optional</sup> <a name="availability_score_threshold" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.putHealthEventsConfig.parameter.availabilityScoreThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#availability_score_threshold InternetmonitorMonitor#availability_score_threshold}.

---

###### `performance_score_threshold`<sup>Optional</sup> <a name="performance_score_threshold" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.putHealthEventsConfig.parameter.performanceScoreThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#performance_score_threshold InternetmonitorMonitor#performance_score_threshold}.

---

##### `put_internet_measurements_log_delivery` <a name="put_internet_measurements_log_delivery" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.putInternetMeasurementsLogDelivery"></a>

```python
def put_internet_measurements_log_delivery(
  s3_config: InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config = None
) -> None
```

###### `s3_config`<sup>Optional</sup> <a name="s3_config" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.putInternetMeasurementsLogDelivery.parameter.s3Config"></a>

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a>

s3_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#s3_config InternetmonitorMonitor#s3_config}

---

##### `reset_health_events_config` <a name="reset_health_events_config" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetHealthEventsConfig"></a>

```python
def reset_health_events_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_internet_measurements_log_delivery` <a name="reset_internet_measurements_log_delivery" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetInternetMeasurementsLogDelivery"></a>

```python
def reset_internet_measurements_log_delivery() -> None
```

##### `reset_max_city_networks_to_monitor` <a name="reset_max_city_networks_to_monitor" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetMaxCityNetworksToMonitor"></a>

```python
def reset_max_city_networks_to_monitor() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetResources"></a>

```python
def reset_resources() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_traffic_percentage_to_monitor` <a name="reset_traffic_percentage_to_monitor" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetTrafficPercentageToMonitor"></a>

```python
def reset_traffic_percentage_to_monitor() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a InternetmonitorMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import internetmonitor_monitor

internetmonitorMonitor.InternetmonitorMonitor.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import internetmonitor_monitor

internetmonitorMonitor.InternetmonitorMonitor.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import internetmonitor_monitor

internetmonitorMonitor.InternetmonitorMonitor.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import internetmonitor_monitor

internetmonitorMonitor.InternetmonitorMonitor.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a InternetmonitorMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the InternetmonitorMonitor to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing InternetmonitorMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the InternetmonitorMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.healthEventsConfig">health_events_config</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference">InternetmonitorMonitorHealthEventsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.internetMeasurementsLogDelivery">internet_measurements_log_delivery</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference">InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.healthEventsConfigInput">health_events_config_input</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.internetMeasurementsLogDeliveryInput">internet_measurements_log_delivery_input</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.maxCityNetworksToMonitorInput">max_city_networks_to_monitor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.monitorNameInput">monitor_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesInput">resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.trafficPercentageToMonitorInput">traffic_percentage_to_monitor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.maxCityNetworksToMonitor">max_city_networks_to_monitor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.monitorName">monitor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.resources">resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.trafficPercentageToMonitor">traffic_percentage_to_monitor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `health_events_config`<sup>Required</sup> <a name="health_events_config" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.healthEventsConfig"></a>

```python
health_events_config: InternetmonitorMonitorHealthEventsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference">InternetmonitorMonitorHealthEventsConfigOutputReference</a>

---

##### `internet_measurements_log_delivery`<sup>Required</sup> <a name="internet_measurements_log_delivery" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.internetMeasurementsLogDelivery"></a>

```python
internet_measurements_log_delivery: InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference">InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference</a>

---

##### `health_events_config_input`<sup>Optional</sup> <a name="health_events_config_input" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.healthEventsConfigInput"></a>

```python
health_events_config_input: InternetmonitorMonitorHealthEventsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `internet_measurements_log_delivery_input`<sup>Optional</sup> <a name="internet_measurements_log_delivery_input" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.internetMeasurementsLogDeliveryInput"></a>

```python
internet_measurements_log_delivery_input: InternetmonitorMonitorInternetMeasurementsLogDelivery
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a>

---

##### `max_city_networks_to_monitor_input`<sup>Optional</sup> <a name="max_city_networks_to_monitor_input" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.maxCityNetworksToMonitorInput"></a>

```python
max_city_networks_to_monitor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monitor_name_input`<sup>Optional</sup> <a name="monitor_name_input" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.monitorNameInput"></a>

```python
monitor_name_input: str
```

- *Type:* str

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesInput"></a>

```python
resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `traffic_percentage_to_monitor_input`<sup>Optional</sup> <a name="traffic_percentage_to_monitor_input" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.trafficPercentageToMonitorInput"></a>

```python
traffic_percentage_to_monitor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_city_networks_to_monitor`<sup>Required</sup> <a name="max_city_networks_to_monitor" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.maxCityNetworksToMonitor"></a>

```python
max_city_networks_to_monitor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monitor_name`<sup>Required</sup> <a name="monitor_name" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.monitorName"></a>

```python
monitor_name: str
```

- *Type:* str

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `traffic_percentage_to_monitor`<sup>Required</sup> <a name="traffic_percentage_to_monitor" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.trafficPercentageToMonitor"></a>

```python
traffic_percentage_to_monitor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### InternetmonitorMonitorConfig <a name="InternetmonitorMonitorConfig" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import internetmonitor_monitor

internetmonitorMonitor.InternetmonitorMonitorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  monitor_name: str,
  health_events_config: InternetmonitorMonitorHealthEventsConfig = None,
  id: str = None,
  internet_measurements_log_delivery: InternetmonitorMonitorInternetMeasurementsLogDelivery = None,
  max_city_networks_to_monitor: typing.Union[int, float] = None,
  resources: typing.List[str] = None,
  status: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  traffic_percentage_to_monitor: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.monitorName">monitor_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#monitor_name InternetmonitorMonitor#monitor_name}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.healthEventsConfig">health_events_config</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a></code> | health_events_config block. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#id InternetmonitorMonitor#id}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.internetMeasurementsLogDelivery">internet_measurements_log_delivery</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a></code> | internet_measurements_log_delivery block. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.maxCityNetworksToMonitor">max_city_networks_to_monitor</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#max_city_networks_to_monitor InternetmonitorMonitor#max_city_networks_to_monitor}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.resources">resources</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#resources InternetmonitorMonitor#resources}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#status InternetmonitorMonitor#status}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#tags InternetmonitorMonitor#tags}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#tags_all InternetmonitorMonitor#tags_all}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.trafficPercentageToMonitor">traffic_percentage_to_monitor</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#traffic_percentage_to_monitor InternetmonitorMonitor#traffic_percentage_to_monitor}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `monitor_name`<sup>Required</sup> <a name="monitor_name" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.monitorName"></a>

```python
monitor_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#monitor_name InternetmonitorMonitor#monitor_name}.

---

##### `health_events_config`<sup>Optional</sup> <a name="health_events_config" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.healthEventsConfig"></a>

```python
health_events_config: InternetmonitorMonitorHealthEventsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a>

health_events_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#health_events_config InternetmonitorMonitor#health_events_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#id InternetmonitorMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internet_measurements_log_delivery`<sup>Optional</sup> <a name="internet_measurements_log_delivery" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.internetMeasurementsLogDelivery"></a>

```python
internet_measurements_log_delivery: InternetmonitorMonitorInternetMeasurementsLogDelivery
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a>

internet_measurements_log_delivery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#internet_measurements_log_delivery InternetmonitorMonitor#internet_measurements_log_delivery}

---

##### `max_city_networks_to_monitor`<sup>Optional</sup> <a name="max_city_networks_to_monitor" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.maxCityNetworksToMonitor"></a>

```python
max_city_networks_to_monitor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#max_city_networks_to_monitor InternetmonitorMonitor#max_city_networks_to_monitor}.

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#resources InternetmonitorMonitor#resources}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#status InternetmonitorMonitor#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#tags InternetmonitorMonitor#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#tags_all InternetmonitorMonitor#tags_all}.

---

##### `traffic_percentage_to_monitor`<sup>Optional</sup> <a name="traffic_percentage_to_monitor" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.trafficPercentageToMonitor"></a>

```python
traffic_percentage_to_monitor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#traffic_percentage_to_monitor InternetmonitorMonitor#traffic_percentage_to_monitor}.

---

### InternetmonitorMonitorHealthEventsConfig <a name="InternetmonitorMonitorHealthEventsConfig" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import internetmonitor_monitor

internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig(
  availability_score_threshold: typing.Union[int, float] = None,
  performance_score_threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.availabilityScoreThreshold">availability_score_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#availability_score_threshold InternetmonitorMonitor#availability_score_threshold}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.performanceScoreThreshold">performance_score_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#performance_score_threshold InternetmonitorMonitor#performance_score_threshold}. |

---

##### `availability_score_threshold`<sup>Optional</sup> <a name="availability_score_threshold" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.availabilityScoreThreshold"></a>

```python
availability_score_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#availability_score_threshold InternetmonitorMonitor#availability_score_threshold}.

---

##### `performance_score_threshold`<sup>Optional</sup> <a name="performance_score_threshold" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.performanceScoreThreshold"></a>

```python
performance_score_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#performance_score_threshold InternetmonitorMonitor#performance_score_threshold}.

---

### InternetmonitorMonitorInternetMeasurementsLogDelivery <a name="InternetmonitorMonitorInternetMeasurementsLogDelivery" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import internetmonitor_monitor

internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery(
  s3_config: InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery.property.s3Config">s3_config</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a></code> | s3_config block. |

---

##### `s3_config`<sup>Optional</sup> <a name="s3_config" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery.property.s3Config"></a>

```python
s3_config: InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a>

s3_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#s3_config InternetmonitorMonitor#s3_config}

---

### InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config <a name="InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import internetmonitor_monitor

internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config(
  bucket_name: str,
  bucket_prefix: str = None,
  log_delivery_status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.bucketName">bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#bucket_name InternetmonitorMonitor#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.bucketPrefix">bucket_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#bucket_prefix InternetmonitorMonitor#bucket_prefix}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.logDeliveryStatus">log_delivery_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#log_delivery_status InternetmonitorMonitor#log_delivery_status}. |

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#bucket_name InternetmonitorMonitor#bucket_name}.

---

##### `bucket_prefix`<sup>Optional</sup> <a name="bucket_prefix" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.bucketPrefix"></a>

```python
bucket_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#bucket_prefix InternetmonitorMonitor#bucket_prefix}.

---

##### `log_delivery_status`<sup>Optional</sup> <a name="log_delivery_status" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.logDeliveryStatus"></a>

```python
log_delivery_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#log_delivery_status InternetmonitorMonitor#log_delivery_status}.

---

## Classes <a name="Classes" id="Classes"></a>

### InternetmonitorMonitorHealthEventsConfigOutputReference <a name="InternetmonitorMonitorHealthEventsConfigOutputReference" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import internetmonitor_monitor

internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetAvailabilityScoreThreshold">reset_availability_score_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetPerformanceScoreThreshold">reset_performance_score_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_score_threshold` <a name="reset_availability_score_threshold" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetAvailabilityScoreThreshold"></a>

```python
def reset_availability_score_threshold() -> None
```

##### `reset_performance_score_threshold` <a name="reset_performance_score_threshold" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetPerformanceScoreThreshold"></a>

```python
def reset_performance_score_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityScoreThresholdInput">availability_score_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceScoreThresholdInput">performance_score_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityScoreThreshold">availability_score_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceScoreThreshold">performance_score_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_score_threshold_input`<sup>Optional</sup> <a name="availability_score_threshold_input" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityScoreThresholdInput"></a>

```python
availability_score_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `performance_score_threshold_input`<sup>Optional</sup> <a name="performance_score_threshold_input" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceScoreThresholdInput"></a>

```python
performance_score_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability_score_threshold`<sup>Required</sup> <a name="availability_score_threshold" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityScoreThreshold"></a>

```python
availability_score_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `performance_score_threshold`<sup>Required</sup> <a name="performance_score_threshold" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceScoreThreshold"></a>

```python
performance_score_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.internalValue"></a>

```python
internal_value: InternetmonitorMonitorHealthEventsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a>

---


### InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference <a name="InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import internetmonitor_monitor

internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.putS3Config">put_s3_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resetS3Config">reset_s3_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_config` <a name="put_s3_config" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.putS3Config"></a>

```python
def put_s3_config(
  bucket_name: str,
  bucket_prefix: str = None,
  log_delivery_status: str = None
) -> None
```

###### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.putS3Config.parameter.bucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#bucket_name InternetmonitorMonitor#bucket_name}.

---

###### `bucket_prefix`<sup>Optional</sup> <a name="bucket_prefix" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.putS3Config.parameter.bucketPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#bucket_prefix InternetmonitorMonitor#bucket_prefix}.

---

###### `log_delivery_status`<sup>Optional</sup> <a name="log_delivery_status" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.putS3Config.parameter.logDeliveryStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/internetmonitor_monitor#log_delivery_status InternetmonitorMonitor#log_delivery_status}.

---

##### `reset_s3_config` <a name="reset_s3_config" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resetS3Config"></a>

```python
def reset_s3_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.s3Config">s3_config</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.s3ConfigInput">s3_config_input</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_config`<sup>Required</sup> <a name="s3_config" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.s3Config"></a>

```python
s3_config: InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference</a>

---

##### `s3_config_input`<sup>Optional</sup> <a name="s3_config_input" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.s3ConfigInput"></a>

```python
s3_config_input: InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.internalValue"></a>

```python
internal_value: InternetmonitorMonitorInternetMeasurementsLogDelivery
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a>

---


### InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference <a name="InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import internetmonitor_monitor

internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resetBucketPrefix">reset_bucket_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resetLogDeliveryStatus">reset_log_delivery_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_prefix` <a name="reset_bucket_prefix" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resetBucketPrefix"></a>

```python
def reset_bucket_prefix() -> None
```

##### `reset_log_delivery_status` <a name="reset_log_delivery_status" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resetLogDeliveryStatus"></a>

```python
def reset_log_delivery_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketPrefixInput">bucket_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.logDeliveryStatusInput">log_delivery_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketPrefix">bucket_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.logDeliveryStatus">log_delivery_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `bucket_prefix_input`<sup>Optional</sup> <a name="bucket_prefix_input" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketPrefixInput"></a>

```python
bucket_prefix_input: str
```

- *Type:* str

---

##### `log_delivery_status_input`<sup>Optional</sup> <a name="log_delivery_status_input" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.logDeliveryStatusInput"></a>

```python
log_delivery_status_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `bucket_prefix`<sup>Required</sup> <a name="bucket_prefix" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketPrefix"></a>

```python
bucket_prefix: str
```

- *Type:* str

---

##### `log_delivery_status`<sup>Required</sup> <a name="log_delivery_status" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.logDeliveryStatus"></a>

```python
log_delivery_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.internalValue"></a>

```python
internal_value: InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a>

---



