# `globalacceleratorEndpointGroup` Submodule <a name="`globalacceleratorEndpointGroup` Submodule" id="@cdktf/provider-aws.globalacceleratorEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalacceleratorEndpointGroup <a name="GlobalacceleratorEndpointGroup" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group aws_globalaccelerator_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_endpoint_group

globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  listener_arn: str,
  endpoint_configuration: typing.Union[IResolvable, typing.List[GlobalacceleratorEndpointGroupEndpointConfiguration]] = None,
  endpoint_group_region: str = None,
  health_check_interval_seconds: typing.Union[int, float] = None,
  health_check_path: str = None,
  health_check_port: typing.Union[int, float] = None,
  health_check_protocol: str = None,
  id: str = None,
  port_override: typing.Union[IResolvable, typing.List[GlobalacceleratorEndpointGroupPortOverride]] = None,
  threshold_count: typing.Union[int, float] = None,
  timeouts: GlobalacceleratorEndpointGroupTimeouts = None,
  traffic_dial_percentage: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.listenerArn">listener_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#listener_arn GlobalacceleratorEndpointGroup#listener_arn}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.endpointConfiguration">endpoint_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration">GlobalacceleratorEndpointGroupEndpointConfiguration</a>]]</code> | endpoint_configuration block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.endpointGroupRegion">endpoint_group_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_group_region GlobalacceleratorEndpointGroup#endpoint_group_region}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.healthCheckIntervalSeconds">health_check_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_interval_seconds GlobalacceleratorEndpointGroup#health_check_interval_seconds}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.healthCheckPath">health_check_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_path GlobalacceleratorEndpointGroup#health_check_path}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.healthCheckPort">health_check_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_port GlobalacceleratorEndpointGroup#health_check_port}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.healthCheckProtocol">health_check_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_protocol GlobalacceleratorEndpointGroup#health_check_protocol}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#id GlobalacceleratorEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.portOverride">port_override</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride">GlobalacceleratorEndpointGroupPortOverride</a>]]</code> | port_override block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.thresholdCount">threshold_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#threshold_count GlobalacceleratorEndpointGroup#threshold_count}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts">GlobalacceleratorEndpointGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.trafficDialPercentage">traffic_dial_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#traffic_dial_percentage GlobalacceleratorEndpointGroup#traffic_dial_percentage}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `listener_arn`<sup>Required</sup> <a name="listener_arn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.listenerArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#listener_arn GlobalacceleratorEndpointGroup#listener_arn}.

---

##### `endpoint_configuration`<sup>Optional</sup> <a name="endpoint_configuration" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.endpointConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration">GlobalacceleratorEndpointGroupEndpointConfiguration</a>]]

endpoint_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_configuration GlobalacceleratorEndpointGroup#endpoint_configuration}

---

##### `endpoint_group_region`<sup>Optional</sup> <a name="endpoint_group_region" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.endpointGroupRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_group_region GlobalacceleratorEndpointGroup#endpoint_group_region}.

---

##### `health_check_interval_seconds`<sup>Optional</sup> <a name="health_check_interval_seconds" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.healthCheckIntervalSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_interval_seconds GlobalacceleratorEndpointGroup#health_check_interval_seconds}.

---

##### `health_check_path`<sup>Optional</sup> <a name="health_check_path" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.healthCheckPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_path GlobalacceleratorEndpointGroup#health_check_path}.

---

##### `health_check_port`<sup>Optional</sup> <a name="health_check_port" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.healthCheckPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_port GlobalacceleratorEndpointGroup#health_check_port}.

---

##### `health_check_protocol`<sup>Optional</sup> <a name="health_check_protocol" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.healthCheckProtocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_protocol GlobalacceleratorEndpointGroup#health_check_protocol}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#id GlobalacceleratorEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port_override`<sup>Optional</sup> <a name="port_override" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.portOverride"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride">GlobalacceleratorEndpointGroupPortOverride</a>]]

port_override block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#port_override GlobalacceleratorEndpointGroup#port_override}

---

##### `threshold_count`<sup>Optional</sup> <a name="threshold_count" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.thresholdCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#threshold_count GlobalacceleratorEndpointGroup#threshold_count}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts">GlobalacceleratorEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#timeouts GlobalacceleratorEndpointGroup#timeouts}

---

##### `traffic_dial_percentage`<sup>Optional</sup> <a name="traffic_dial_percentage" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.trafficDialPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#traffic_dial_percentage GlobalacceleratorEndpointGroup#traffic_dial_percentage}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putEndpointConfiguration">put_endpoint_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putPortOverride">put_port_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetEndpointConfiguration">reset_endpoint_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetEndpointGroupRegion">reset_endpoint_group_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckIntervalSeconds">reset_health_check_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckPath">reset_health_check_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckPort">reset_health_check_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckProtocol">reset_health_check_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetPortOverride">reset_port_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetThresholdCount">reset_threshold_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetTrafficDialPercentage">reset_traffic_dial_percentage</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_endpoint_configuration` <a name="put_endpoint_configuration" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putEndpointConfiguration"></a>

```python
def put_endpoint_configuration(
  value: typing.Union[IResolvable, typing.List[GlobalacceleratorEndpointGroupEndpointConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putEndpointConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration">GlobalacceleratorEndpointGroupEndpointConfiguration</a>]]

---

##### `put_port_override` <a name="put_port_override" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putPortOverride"></a>

```python
def put_port_override(
  value: typing.Union[IResolvable, typing.List[GlobalacceleratorEndpointGroupPortOverride]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putPortOverride.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride">GlobalacceleratorEndpointGroupPortOverride</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#create GlobalacceleratorEndpointGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#delete GlobalacceleratorEndpointGroup#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#update GlobalacceleratorEndpointGroup#update}.

---

##### `reset_endpoint_configuration` <a name="reset_endpoint_configuration" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetEndpointConfiguration"></a>

```python
def reset_endpoint_configuration() -> None
```

##### `reset_endpoint_group_region` <a name="reset_endpoint_group_region" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetEndpointGroupRegion"></a>

```python
def reset_endpoint_group_region() -> None
```

##### `reset_health_check_interval_seconds` <a name="reset_health_check_interval_seconds" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckIntervalSeconds"></a>

```python
def reset_health_check_interval_seconds() -> None
```

##### `reset_health_check_path` <a name="reset_health_check_path" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckPath"></a>

```python
def reset_health_check_path() -> None
```

##### `reset_health_check_port` <a name="reset_health_check_port" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckPort"></a>

```python
def reset_health_check_port() -> None
```

##### `reset_health_check_protocol` <a name="reset_health_check_protocol" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckProtocol"></a>

```python
def reset_health_check_protocol() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_port_override` <a name="reset_port_override" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetPortOverride"></a>

```python
def reset_port_override() -> None
```

##### `reset_threshold_count` <a name="reset_threshold_count" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetThresholdCount"></a>

```python
def reset_threshold_count() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_traffic_dial_percentage` <a name="reset_traffic_dial_percentage" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetTrafficDialPercentage"></a>

```python
def reset_traffic_dial_percentage() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_endpoint_group

globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_endpoint_group

globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_endpoint_group

globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointConfiguration">endpoint_configuration</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList">GlobalacceleratorEndpointGroupEndpointConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.portOverride">port_override</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList">GlobalacceleratorEndpointGroupPortOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference">GlobalacceleratorEndpointGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointConfigurationInput">endpoint_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration">GlobalacceleratorEndpointGroupEndpointConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupRegionInput">endpoint_group_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckIntervalSecondsInput">health_check_interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPathInput">health_check_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPortInput">health_check_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckProtocolInput">health_check_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.listenerArnInput">listener_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.portOverrideInput">port_override_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride">GlobalacceleratorEndpointGroupPortOverride</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.thresholdCountInput">threshold_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts">GlobalacceleratorEndpointGroupTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.trafficDialPercentageInput">traffic_dial_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupRegion">endpoint_group_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckIntervalSeconds">health_check_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPath">health_check_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPort">health_check_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckProtocol">health_check_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.listenerArn">listener_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.thresholdCount">threshold_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.trafficDialPercentage">traffic_dial_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `endpoint_configuration`<sup>Required</sup> <a name="endpoint_configuration" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointConfiguration"></a>

```python
endpoint_configuration: GlobalacceleratorEndpointGroupEndpointConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList">GlobalacceleratorEndpointGroupEndpointConfigurationList</a>

---

##### `port_override`<sup>Required</sup> <a name="port_override" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.portOverride"></a>

```python
port_override: GlobalacceleratorEndpointGroupPortOverrideList
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList">GlobalacceleratorEndpointGroupPortOverrideList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.timeouts"></a>

```python
timeouts: GlobalacceleratorEndpointGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference">GlobalacceleratorEndpointGroupTimeoutsOutputReference</a>

---

##### `endpoint_configuration_input`<sup>Optional</sup> <a name="endpoint_configuration_input" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointConfigurationInput"></a>

```python
endpoint_configuration_input: typing.Union[IResolvable, typing.List[GlobalacceleratorEndpointGroupEndpointConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration">GlobalacceleratorEndpointGroupEndpointConfiguration</a>]]

---

##### `endpoint_group_region_input`<sup>Optional</sup> <a name="endpoint_group_region_input" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupRegionInput"></a>

```python
endpoint_group_region_input: str
```

- *Type:* str

---

##### `health_check_interval_seconds_input`<sup>Optional</sup> <a name="health_check_interval_seconds_input" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckIntervalSecondsInput"></a>

```python
health_check_interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_path_input`<sup>Optional</sup> <a name="health_check_path_input" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPathInput"></a>

```python
health_check_path_input: str
```

- *Type:* str

---

##### `health_check_port_input`<sup>Optional</sup> <a name="health_check_port_input" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPortInput"></a>

```python
health_check_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_protocol_input`<sup>Optional</sup> <a name="health_check_protocol_input" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckProtocolInput"></a>

```python
health_check_protocol_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `listener_arn_input`<sup>Optional</sup> <a name="listener_arn_input" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.listenerArnInput"></a>

```python
listener_arn_input: str
```

- *Type:* str

---

##### `port_override_input`<sup>Optional</sup> <a name="port_override_input" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.portOverrideInput"></a>

```python
port_override_input: typing.Union[IResolvable, typing.List[GlobalacceleratorEndpointGroupPortOverride]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride">GlobalacceleratorEndpointGroupPortOverride</a>]]

---

##### `threshold_count_input`<sup>Optional</sup> <a name="threshold_count_input" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.thresholdCountInput"></a>

```python
threshold_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[GlobalacceleratorEndpointGroupTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts">GlobalacceleratorEndpointGroupTimeouts</a>, cdktf.IResolvable]

---

##### `traffic_dial_percentage_input`<sup>Optional</sup> <a name="traffic_dial_percentage_input" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.trafficDialPercentageInput"></a>

```python
traffic_dial_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `endpoint_group_region`<sup>Required</sup> <a name="endpoint_group_region" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupRegion"></a>

```python
endpoint_group_region: str
```

- *Type:* str

---

##### `health_check_interval_seconds`<sup>Required</sup> <a name="health_check_interval_seconds" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckIntervalSeconds"></a>

```python
health_check_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_path`<sup>Required</sup> <a name="health_check_path" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPath"></a>

```python
health_check_path: str
```

- *Type:* str

---

##### `health_check_port`<sup>Required</sup> <a name="health_check_port" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPort"></a>

```python
health_check_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_protocol`<sup>Required</sup> <a name="health_check_protocol" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckProtocol"></a>

```python
health_check_protocol: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `listener_arn`<sup>Required</sup> <a name="listener_arn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.listenerArn"></a>

```python
listener_arn: str
```

- *Type:* str

---

##### `threshold_count`<sup>Required</sup> <a name="threshold_count" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.thresholdCount"></a>

```python
threshold_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `traffic_dial_percentage`<sup>Required</sup> <a name="traffic_dial_percentage" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.trafficDialPercentage"></a>

```python
traffic_dial_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalacceleratorEndpointGroupConfig <a name="GlobalacceleratorEndpointGroupConfig" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_endpoint_group

globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  listener_arn: str,
  endpoint_configuration: typing.Union[IResolvable, typing.List[GlobalacceleratorEndpointGroupEndpointConfiguration]] = None,
  endpoint_group_region: str = None,
  health_check_interval_seconds: typing.Union[int, float] = None,
  health_check_path: str = None,
  health_check_port: typing.Union[int, float] = None,
  health_check_protocol: str = None,
  id: str = None,
  port_override: typing.Union[IResolvable, typing.List[GlobalacceleratorEndpointGroupPortOverride]] = None,
  threshold_count: typing.Union[int, float] = None,
  timeouts: GlobalacceleratorEndpointGroupTimeouts = None,
  traffic_dial_percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.listenerArn">listener_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#listener_arn GlobalacceleratorEndpointGroup#listener_arn}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.endpointConfiguration">endpoint_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration">GlobalacceleratorEndpointGroupEndpointConfiguration</a>]]</code> | endpoint_configuration block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.endpointGroupRegion">endpoint_group_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_group_region GlobalacceleratorEndpointGroup#endpoint_group_region}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckIntervalSeconds">health_check_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_interval_seconds GlobalacceleratorEndpointGroup#health_check_interval_seconds}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckPath">health_check_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_path GlobalacceleratorEndpointGroup#health_check_path}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckPort">health_check_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_port GlobalacceleratorEndpointGroup#health_check_port}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckProtocol">health_check_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_protocol GlobalacceleratorEndpointGroup#health_check_protocol}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#id GlobalacceleratorEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.portOverride">port_override</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride">GlobalacceleratorEndpointGroupPortOverride</a>]]</code> | port_override block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.thresholdCount">threshold_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#threshold_count GlobalacceleratorEndpointGroup#threshold_count}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts">GlobalacceleratorEndpointGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.trafficDialPercentage">traffic_dial_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#traffic_dial_percentage GlobalacceleratorEndpointGroup#traffic_dial_percentage}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `listener_arn`<sup>Required</sup> <a name="listener_arn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.listenerArn"></a>

```python
listener_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#listener_arn GlobalacceleratorEndpointGroup#listener_arn}.

---

##### `endpoint_configuration`<sup>Optional</sup> <a name="endpoint_configuration" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.endpointConfiguration"></a>

```python
endpoint_configuration: typing.Union[IResolvable, typing.List[GlobalacceleratorEndpointGroupEndpointConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration">GlobalacceleratorEndpointGroupEndpointConfiguration</a>]]

endpoint_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_configuration GlobalacceleratorEndpointGroup#endpoint_configuration}

---

##### `endpoint_group_region`<sup>Optional</sup> <a name="endpoint_group_region" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.endpointGroupRegion"></a>

```python
endpoint_group_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_group_region GlobalacceleratorEndpointGroup#endpoint_group_region}.

---

##### `health_check_interval_seconds`<sup>Optional</sup> <a name="health_check_interval_seconds" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckIntervalSeconds"></a>

```python
health_check_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_interval_seconds GlobalacceleratorEndpointGroup#health_check_interval_seconds}.

---

##### `health_check_path`<sup>Optional</sup> <a name="health_check_path" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckPath"></a>

```python
health_check_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_path GlobalacceleratorEndpointGroup#health_check_path}.

---

##### `health_check_port`<sup>Optional</sup> <a name="health_check_port" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckPort"></a>

```python
health_check_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_port GlobalacceleratorEndpointGroup#health_check_port}.

---

##### `health_check_protocol`<sup>Optional</sup> <a name="health_check_protocol" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckProtocol"></a>

```python
health_check_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_protocol GlobalacceleratorEndpointGroup#health_check_protocol}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#id GlobalacceleratorEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port_override`<sup>Optional</sup> <a name="port_override" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.portOverride"></a>

```python
port_override: typing.Union[IResolvable, typing.List[GlobalacceleratorEndpointGroupPortOverride]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride">GlobalacceleratorEndpointGroupPortOverride</a>]]

port_override block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#port_override GlobalacceleratorEndpointGroup#port_override}

---

##### `threshold_count`<sup>Optional</sup> <a name="threshold_count" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.thresholdCount"></a>

```python
threshold_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#threshold_count GlobalacceleratorEndpointGroup#threshold_count}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.timeouts"></a>

```python
timeouts: GlobalacceleratorEndpointGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts">GlobalacceleratorEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#timeouts GlobalacceleratorEndpointGroup#timeouts}

---

##### `traffic_dial_percentage`<sup>Optional</sup> <a name="traffic_dial_percentage" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.trafficDialPercentage"></a>

```python
traffic_dial_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#traffic_dial_percentage GlobalacceleratorEndpointGroup#traffic_dial_percentage}.

---

### GlobalacceleratorEndpointGroupEndpointConfiguration <a name="GlobalacceleratorEndpointGroupEndpointConfiguration" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_endpoint_group

globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration(
  client_ip_preservation_enabled: typing.Union[bool, IResolvable] = None,
  endpoint_id: str = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration.property.clientIpPreservationEnabled">client_ip_preservation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#client_ip_preservation_enabled GlobalacceleratorEndpointGroup#client_ip_preservation_enabled}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration.property.endpointId">endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_id GlobalacceleratorEndpointGroup#endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#weight GlobalacceleratorEndpointGroup#weight}. |

---

##### `client_ip_preservation_enabled`<sup>Optional</sup> <a name="client_ip_preservation_enabled" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration.property.clientIpPreservationEnabled"></a>

```python
client_ip_preservation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#client_ip_preservation_enabled GlobalacceleratorEndpointGroup#client_ip_preservation_enabled}.

---

##### `endpoint_id`<sup>Optional</sup> <a name="endpoint_id" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_id GlobalacceleratorEndpointGroup#endpoint_id}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#weight GlobalacceleratorEndpointGroup#weight}.

---

### GlobalacceleratorEndpointGroupPortOverride <a name="GlobalacceleratorEndpointGroupPortOverride" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_endpoint_group

globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride(
  endpoint_port: typing.Union[int, float],
  listener_port: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride.property.endpointPort">endpoint_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_port GlobalacceleratorEndpointGroup#endpoint_port}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride.property.listenerPort">listener_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#listener_port GlobalacceleratorEndpointGroup#listener_port}. |

---

##### `endpoint_port`<sup>Required</sup> <a name="endpoint_port" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride.property.endpointPort"></a>

```python
endpoint_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_port GlobalacceleratorEndpointGroup#endpoint_port}.

---

##### `listener_port`<sup>Required</sup> <a name="listener_port" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride.property.listenerPort"></a>

```python
listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#listener_port GlobalacceleratorEndpointGroup#listener_port}.

---

### GlobalacceleratorEndpointGroupTimeouts <a name="GlobalacceleratorEndpointGroupTimeouts" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_endpoint_group

globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#create GlobalacceleratorEndpointGroup#create}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#delete GlobalacceleratorEndpointGroup#delete}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#update GlobalacceleratorEndpointGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#create GlobalacceleratorEndpointGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#delete GlobalacceleratorEndpointGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#update GlobalacceleratorEndpointGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalacceleratorEndpointGroupEndpointConfigurationList <a name="GlobalacceleratorEndpointGroupEndpointConfigurationList" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_endpoint_group

globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration">GlobalacceleratorEndpointGroupEndpointConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GlobalacceleratorEndpointGroupEndpointConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration">GlobalacceleratorEndpointGroupEndpointConfiguration</a>]]

---


### GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference <a name="GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_endpoint_group

globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resetClientIpPreservationEnabled">reset_client_ip_preservation_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resetEndpointId">reset_endpoint_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_ip_preservation_enabled` <a name="reset_client_ip_preservation_enabled" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resetClientIpPreservationEnabled"></a>

```python
def reset_client_ip_preservation_enabled() -> None
```

##### `reset_endpoint_id` <a name="reset_endpoint_id" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resetEndpointId"></a>

```python
def reset_endpoint_id() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.clientIpPreservationEnabledInput">client_ip_preservation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.endpointIdInput">endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.clientIpPreservationEnabled">client_ip_preservation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.endpointId">endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration">GlobalacceleratorEndpointGroupEndpointConfiguration</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_ip_preservation_enabled_input`<sup>Optional</sup> <a name="client_ip_preservation_enabled_input" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.clientIpPreservationEnabledInput"></a>

```python
client_ip_preservation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `endpoint_id_input`<sup>Optional</sup> <a name="endpoint_id_input" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.endpointIdInput"></a>

```python
endpoint_id_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_ip_preservation_enabled`<sup>Required</sup> <a name="client_ip_preservation_enabled" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.clientIpPreservationEnabled"></a>

```python
client_ip_preservation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GlobalacceleratorEndpointGroupEndpointConfiguration, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration">GlobalacceleratorEndpointGroupEndpointConfiguration</a>, cdktf.IResolvable]

---


### GlobalacceleratorEndpointGroupPortOverrideList <a name="GlobalacceleratorEndpointGroupPortOverrideList" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_endpoint_group

globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlobalacceleratorEndpointGroupPortOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride">GlobalacceleratorEndpointGroupPortOverride</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GlobalacceleratorEndpointGroupPortOverride]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride">GlobalacceleratorEndpointGroupPortOverride</a>]]

---


### GlobalacceleratorEndpointGroupPortOverrideOutputReference <a name="GlobalacceleratorEndpointGroupPortOverrideOutputReference" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_endpoint_group

globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.endpointPortInput">endpoint_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.listenerPortInput">listener_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.endpointPort">endpoint_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.listenerPort">listener_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride">GlobalacceleratorEndpointGroupPortOverride</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_port_input`<sup>Optional</sup> <a name="endpoint_port_input" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.endpointPortInput"></a>

```python
endpoint_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `listener_port_input`<sup>Optional</sup> <a name="listener_port_input" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.listenerPortInput"></a>

```python
listener_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `endpoint_port`<sup>Required</sup> <a name="endpoint_port" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.endpointPort"></a>

```python
endpoint_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `listener_port`<sup>Required</sup> <a name="listener_port" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.listenerPort"></a>

```python
listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GlobalacceleratorEndpointGroupPortOverride, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride">GlobalacceleratorEndpointGroupPortOverride</a>, cdktf.IResolvable]

---


### GlobalacceleratorEndpointGroupTimeoutsOutputReference <a name="GlobalacceleratorEndpointGroupTimeoutsOutputReference" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_endpoint_group

globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts">GlobalacceleratorEndpointGroupTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GlobalacceleratorEndpointGroupTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts">GlobalacceleratorEndpointGroupTimeouts</a>, cdktf.IResolvable]

---



