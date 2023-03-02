# `flowLog` Submodule <a name="`flowLog` Submodule" id="@cdktf/provider-aws.flowLog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FlowLog <a name="FlowLog" id="@cdktf/provider-aws.flowLog.FlowLog"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/flow_log aws_flow_log}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import flow_log

flowLog.FlowLog(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_options: FlowLogDestinationOptions = None,
  eni_id: str = None,
  iam_role_arn: str = None,
  id: str = None,
  log_destination: str = None,
  log_destination_type: str = None,
  log_format: str = None,
  log_group_name: str = None,
  max_aggregation_interval: typing.Union[int, float] = None,
  subnet_id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  traffic_type: str = None,
  transit_gateway_attachment_id: str = None,
  transit_gateway_id: str = None,
  vpc_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.destinationOptions">destination_options</a></code> | <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptions">FlowLogDestinationOptions</a></code> | destination_options block. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.eniId">eni_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#eni_id FlowLog#eni_id}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#iam_role_arn FlowLog#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#id FlowLog#id}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.logDestination">log_destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_destination FlowLog#log_destination}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.logDestinationType">log_destination_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_destination_type FlowLog#log_destination_type}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.logFormat">log_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_format FlowLog#log_format}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.logGroupName">log_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_group_name FlowLog#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.maxAggregationInterval">max_aggregation_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#max_aggregation_interval FlowLog#max_aggregation_interval}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#subnet_id FlowLog#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#tags FlowLog#tags}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#tags_all FlowLog#tags_all}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.trafficType">traffic_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#traffic_type FlowLog#traffic_type}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.transitGatewayAttachmentId">transit_gateway_attachment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#transit_gateway_attachment_id FlowLog#transit_gateway_attachment_id}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#transit_gateway_id FlowLog#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#vpc_id FlowLog#vpc_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_options`<sup>Optional</sup> <a name="destination_options" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.destinationOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptions">FlowLogDestinationOptions</a>

destination_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#destination_options FlowLog#destination_options}

---

##### `eni_id`<sup>Optional</sup> <a name="eni_id" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.eniId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#eni_id FlowLog#eni_id}.

---

##### `iam_role_arn`<sup>Optional</sup> <a name="iam_role_arn" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.iamRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#iam_role_arn FlowLog#iam_role_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#id FlowLog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_destination`<sup>Optional</sup> <a name="log_destination" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.logDestination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_destination FlowLog#log_destination}.

---

##### `log_destination_type`<sup>Optional</sup> <a name="log_destination_type" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.logDestinationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_destination_type FlowLog#log_destination_type}.

---

##### `log_format`<sup>Optional</sup> <a name="log_format" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.logFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_format FlowLog#log_format}.

---

##### `log_group_name`<sup>Optional</sup> <a name="log_group_name" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.logGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_group_name FlowLog#log_group_name}.

---

##### `max_aggregation_interval`<sup>Optional</sup> <a name="max_aggregation_interval" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.maxAggregationInterval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#max_aggregation_interval FlowLog#max_aggregation_interval}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#subnet_id FlowLog#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#tags FlowLog#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#tags_all FlowLog#tags_all}.

---

##### `traffic_type`<sup>Optional</sup> <a name="traffic_type" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.trafficType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#traffic_type FlowLog#traffic_type}.

---

##### `transit_gateway_attachment_id`<sup>Optional</sup> <a name="transit_gateway_attachment_id" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.transitGatewayAttachmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#transit_gateway_attachment_id FlowLog#transit_gateway_attachment_id}.

---

##### `transit_gateway_id`<sup>Optional</sup> <a name="transit_gateway_id" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.transitGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#transit_gateway_id FlowLog#transit_gateway_id}.

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#vpc_id FlowLog#vpc_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.putDestinationOptions">put_destination_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetDestinationOptions">reset_destination_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetEniId">reset_eni_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetIamRoleArn">reset_iam_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetLogDestination">reset_log_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetLogDestinationType">reset_log_destination_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetLogFormat">reset_log_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetLogGroupName">reset_log_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetMaxAggregationInterval">reset_max_aggregation_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetTrafficType">reset_traffic_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetTransitGatewayAttachmentId">reset_transit_gateway_attachment_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetTransitGatewayId">reset_transit_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetVpcId">reset_vpc_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.flowLog.FlowLog.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.flowLog.FlowLog.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.flowLog.FlowLog.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.flowLog.FlowLog.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.flowLog.FlowLog.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.flowLog.FlowLog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.flowLog.FlowLog.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.flowLog.FlowLog.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.flowLog.FlowLog.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.flowLog.FlowLog.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.flowLog.FlowLog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.flowLog.FlowLog.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.flowLog.FlowLog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.flowLog.FlowLog.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.flowLog.FlowLog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.flowLog.FlowLog.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.flowLog.FlowLog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.flowLog.FlowLog.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.flowLog.FlowLog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.flowLog.FlowLog.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.flowLog.FlowLog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.flowLog.FlowLog.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.flowLog.FlowLog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.flowLog.FlowLog.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.flowLog.FlowLog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.flowLog.FlowLog.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.flowLog.FlowLog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.flowLog.FlowLog.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.flowLog.FlowLog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_destination_options` <a name="put_destination_options" id="@cdktf/provider-aws.flowLog.FlowLog.putDestinationOptions"></a>

```python
def put_destination_options(
  file_format: str = None,
  hive_compatible_partitions: typing.Union[bool, IResolvable] = None,
  per_hour_partition: typing.Union[bool, IResolvable] = None
) -> None
```

###### `file_format`<sup>Optional</sup> <a name="file_format" id="@cdktf/provider-aws.flowLog.FlowLog.putDestinationOptions.parameter.fileFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#file_format FlowLog#file_format}.

---

###### `hive_compatible_partitions`<sup>Optional</sup> <a name="hive_compatible_partitions" id="@cdktf/provider-aws.flowLog.FlowLog.putDestinationOptions.parameter.hiveCompatiblePartitions"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#hive_compatible_partitions FlowLog#hive_compatible_partitions}.

---

###### `per_hour_partition`<sup>Optional</sup> <a name="per_hour_partition" id="@cdktf/provider-aws.flowLog.FlowLog.putDestinationOptions.parameter.perHourPartition"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#per_hour_partition FlowLog#per_hour_partition}.

---

##### `reset_destination_options` <a name="reset_destination_options" id="@cdktf/provider-aws.flowLog.FlowLog.resetDestinationOptions"></a>

```python
def reset_destination_options() -> None
```

##### `reset_eni_id` <a name="reset_eni_id" id="@cdktf/provider-aws.flowLog.FlowLog.resetEniId"></a>

```python
def reset_eni_id() -> None
```

##### `reset_iam_role_arn` <a name="reset_iam_role_arn" id="@cdktf/provider-aws.flowLog.FlowLog.resetIamRoleArn"></a>

```python
def reset_iam_role_arn() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.flowLog.FlowLog.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_log_destination` <a name="reset_log_destination" id="@cdktf/provider-aws.flowLog.FlowLog.resetLogDestination"></a>

```python
def reset_log_destination() -> None
```

##### `reset_log_destination_type` <a name="reset_log_destination_type" id="@cdktf/provider-aws.flowLog.FlowLog.resetLogDestinationType"></a>

```python
def reset_log_destination_type() -> None
```

##### `reset_log_format` <a name="reset_log_format" id="@cdktf/provider-aws.flowLog.FlowLog.resetLogFormat"></a>

```python
def reset_log_format() -> None
```

##### `reset_log_group_name` <a name="reset_log_group_name" id="@cdktf/provider-aws.flowLog.FlowLog.resetLogGroupName"></a>

```python
def reset_log_group_name() -> None
```

##### `reset_max_aggregation_interval` <a name="reset_max_aggregation_interval" id="@cdktf/provider-aws.flowLog.FlowLog.resetMaxAggregationInterval"></a>

```python
def reset_max_aggregation_interval() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-aws.flowLog.FlowLog.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.flowLog.FlowLog.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.flowLog.FlowLog.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_traffic_type` <a name="reset_traffic_type" id="@cdktf/provider-aws.flowLog.FlowLog.resetTrafficType"></a>

```python
def reset_traffic_type() -> None
```

##### `reset_transit_gateway_attachment_id` <a name="reset_transit_gateway_attachment_id" id="@cdktf/provider-aws.flowLog.FlowLog.resetTransitGatewayAttachmentId"></a>

```python
def reset_transit_gateway_attachment_id() -> None
```

##### `reset_transit_gateway_id` <a name="reset_transit_gateway_id" id="@cdktf/provider-aws.flowLog.FlowLog.resetTransitGatewayId"></a>

```python
def reset_transit_gateway_id() -> None
```

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktf/provider-aws.flowLog.FlowLog.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.flowLog.FlowLog.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import flow_log

flowLog.FlowLog.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.flowLog.FlowLog.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.flowLog.FlowLog.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import flow_log

flowLog.FlowLog.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.flowLog.FlowLog.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.flowLog.FlowLog.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import flow_log

flowLog.FlowLog.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.flowLog.FlowLog.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.destinationOptions">destination_options</a></code> | <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference">FlowLogDestinationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.destinationOptionsInput">destination_options_input</a></code> | <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptions">FlowLogDestinationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.eniIdInput">eni_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.iamRoleArnInput">iam_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.logDestinationInput">log_destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.logDestinationTypeInput">log_destination_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.logFormatInput">log_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.logGroupNameInput">log_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.maxAggregationIntervalInput">max_aggregation_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.trafficTypeInput">traffic_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.transitGatewayAttachmentIdInput">transit_gateway_attachment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.transitGatewayIdInput">transit_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.eniId">eni_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.logDestination">log_destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.logDestinationType">log_destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.logFormat">log_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.logGroupName">log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.maxAggregationInterval">max_aggregation_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.trafficType">traffic_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.transitGatewayAttachmentId">transit_gateway_attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.flowLog.FlowLog.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.flowLog.FlowLog.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.flowLog.FlowLog.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.flowLog.FlowLog.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.flowLog.FlowLog.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.flowLog.FlowLog.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.flowLog.FlowLog.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.flowLog.FlowLog.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.flowLog.FlowLog.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.flowLog.FlowLog.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.flowLog.FlowLog.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.flowLog.FlowLog.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.flowLog.FlowLog.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.flowLog.FlowLog.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.flowLog.FlowLog.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `destination_options`<sup>Required</sup> <a name="destination_options" id="@cdktf/provider-aws.flowLog.FlowLog.property.destinationOptions"></a>

```python
destination_options: FlowLogDestinationOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference">FlowLogDestinationOptionsOutputReference</a>

---

##### `destination_options_input`<sup>Optional</sup> <a name="destination_options_input" id="@cdktf/provider-aws.flowLog.FlowLog.property.destinationOptionsInput"></a>

```python
destination_options_input: FlowLogDestinationOptions
```

- *Type:* <a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptions">FlowLogDestinationOptions</a>

---

##### `eni_id_input`<sup>Optional</sup> <a name="eni_id_input" id="@cdktf/provider-aws.flowLog.FlowLog.property.eniIdInput"></a>

```python
eni_id_input: str
```

- *Type:* str

---

##### `iam_role_arn_input`<sup>Optional</sup> <a name="iam_role_arn_input" id="@cdktf/provider-aws.flowLog.FlowLog.property.iamRoleArnInput"></a>

```python
iam_role_arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.flowLog.FlowLog.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_destination_input`<sup>Optional</sup> <a name="log_destination_input" id="@cdktf/provider-aws.flowLog.FlowLog.property.logDestinationInput"></a>

```python
log_destination_input: str
```

- *Type:* str

---

##### `log_destination_type_input`<sup>Optional</sup> <a name="log_destination_type_input" id="@cdktf/provider-aws.flowLog.FlowLog.property.logDestinationTypeInput"></a>

```python
log_destination_type_input: str
```

- *Type:* str

---

##### `log_format_input`<sup>Optional</sup> <a name="log_format_input" id="@cdktf/provider-aws.flowLog.FlowLog.property.logFormatInput"></a>

```python
log_format_input: str
```

- *Type:* str

---

##### `log_group_name_input`<sup>Optional</sup> <a name="log_group_name_input" id="@cdktf/provider-aws.flowLog.FlowLog.property.logGroupNameInput"></a>

```python
log_group_name_input: str
```

- *Type:* str

---

##### `max_aggregation_interval_input`<sup>Optional</sup> <a name="max_aggregation_interval_input" id="@cdktf/provider-aws.flowLog.FlowLog.property.maxAggregationIntervalInput"></a>

```python
max_aggregation_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-aws.flowLog.FlowLog.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.flowLog.FlowLog.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.flowLog.FlowLog.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `traffic_type_input`<sup>Optional</sup> <a name="traffic_type_input" id="@cdktf/provider-aws.flowLog.FlowLog.property.trafficTypeInput"></a>

```python
traffic_type_input: str
```

- *Type:* str

---

##### `transit_gateway_attachment_id_input`<sup>Optional</sup> <a name="transit_gateway_attachment_id_input" id="@cdktf/provider-aws.flowLog.FlowLog.property.transitGatewayAttachmentIdInput"></a>

```python
transit_gateway_attachment_id_input: str
```

- *Type:* str

---

##### `transit_gateway_id_input`<sup>Optional</sup> <a name="transit_gateway_id_input" id="@cdktf/provider-aws.flowLog.FlowLog.property.transitGatewayIdInput"></a>

```python
transit_gateway_id_input: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-aws.flowLog.FlowLog.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `eni_id`<sup>Required</sup> <a name="eni_id" id="@cdktf/provider-aws.flowLog.FlowLog.property.eniId"></a>

```python
eni_id: str
```

- *Type:* str

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktf/provider-aws.flowLog.FlowLog.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.flowLog.FlowLog.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_destination`<sup>Required</sup> <a name="log_destination" id="@cdktf/provider-aws.flowLog.FlowLog.property.logDestination"></a>

```python
log_destination: str
```

- *Type:* str

---

##### `log_destination_type`<sup>Required</sup> <a name="log_destination_type" id="@cdktf/provider-aws.flowLog.FlowLog.property.logDestinationType"></a>

```python
log_destination_type: str
```

- *Type:* str

---

##### `log_format`<sup>Required</sup> <a name="log_format" id="@cdktf/provider-aws.flowLog.FlowLog.property.logFormat"></a>

```python
log_format: str
```

- *Type:* str

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktf/provider-aws.flowLog.FlowLog.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

---

##### `max_aggregation_interval`<sup>Required</sup> <a name="max_aggregation_interval" id="@cdktf/provider-aws.flowLog.FlowLog.property.maxAggregationInterval"></a>

```python
max_aggregation_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.flowLog.FlowLog.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.flowLog.FlowLog.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.flowLog.FlowLog.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `traffic_type`<sup>Required</sup> <a name="traffic_type" id="@cdktf/provider-aws.flowLog.FlowLog.property.trafficType"></a>

```python
traffic_type: str
```

- *Type:* str

---

##### `transit_gateway_attachment_id`<sup>Required</sup> <a name="transit_gateway_attachment_id" id="@cdktf/provider-aws.flowLog.FlowLog.property.transitGatewayAttachmentId"></a>

```python
transit_gateway_attachment_id: str
```

- *Type:* str

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktf/provider-aws.flowLog.FlowLog.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.flowLog.FlowLog.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.flowLog.FlowLog.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FlowLogConfig <a name="FlowLogConfig" id="@cdktf/provider-aws.flowLog.FlowLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.flowLog.FlowLogConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import flow_log

flowLog.FlowLogConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_options: FlowLogDestinationOptions = None,
  eni_id: str = None,
  iam_role_arn: str = None,
  id: str = None,
  log_destination: str = None,
  log_destination_type: str = None,
  log_format: str = None,
  log_group_name: str = None,
  max_aggregation_interval: typing.Union[int, float] = None,
  subnet_id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  traffic_type: str = None,
  transit_gateway_attachment_id: str = None,
  transit_gateway_id: str = None,
  vpc_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.destinationOptions">destination_options</a></code> | <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptions">FlowLogDestinationOptions</a></code> | destination_options block. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.eniId">eni_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#eni_id FlowLog#eni_id}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#iam_role_arn FlowLog#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#id FlowLog#id}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.logDestination">log_destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_destination FlowLog#log_destination}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.logDestinationType">log_destination_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_destination_type FlowLog#log_destination_type}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.logFormat">log_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_format FlowLog#log_format}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.logGroupName">log_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_group_name FlowLog#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.maxAggregationInterval">max_aggregation_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#max_aggregation_interval FlowLog#max_aggregation_interval}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#subnet_id FlowLog#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#tags FlowLog#tags}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#tags_all FlowLog#tags_all}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.trafficType">traffic_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#traffic_type FlowLog#traffic_type}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.transitGatewayAttachmentId">transit_gateway_attachment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#transit_gateway_attachment_id FlowLog#transit_gateway_attachment_id}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#transit_gateway_id FlowLog#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#vpc_id FlowLog#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_options`<sup>Optional</sup> <a name="destination_options" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.destinationOptions"></a>

```python
destination_options: FlowLogDestinationOptions
```

- *Type:* <a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptions">FlowLogDestinationOptions</a>

destination_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#destination_options FlowLog#destination_options}

---

##### `eni_id`<sup>Optional</sup> <a name="eni_id" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.eniId"></a>

```python
eni_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#eni_id FlowLog#eni_id}.

---

##### `iam_role_arn`<sup>Optional</sup> <a name="iam_role_arn" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#iam_role_arn FlowLog#iam_role_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#id FlowLog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_destination`<sup>Optional</sup> <a name="log_destination" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.logDestination"></a>

```python
log_destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_destination FlowLog#log_destination}.

---

##### `log_destination_type`<sup>Optional</sup> <a name="log_destination_type" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.logDestinationType"></a>

```python
log_destination_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_destination_type FlowLog#log_destination_type}.

---

##### `log_format`<sup>Optional</sup> <a name="log_format" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.logFormat"></a>

```python
log_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_format FlowLog#log_format}.

---

##### `log_group_name`<sup>Optional</sup> <a name="log_group_name" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_group_name FlowLog#log_group_name}.

---

##### `max_aggregation_interval`<sup>Optional</sup> <a name="max_aggregation_interval" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.maxAggregationInterval"></a>

```python
max_aggregation_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#max_aggregation_interval FlowLog#max_aggregation_interval}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#subnet_id FlowLog#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#tags FlowLog#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#tags_all FlowLog#tags_all}.

---

##### `traffic_type`<sup>Optional</sup> <a name="traffic_type" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.trafficType"></a>

```python
traffic_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#traffic_type FlowLog#traffic_type}.

---

##### `transit_gateway_attachment_id`<sup>Optional</sup> <a name="transit_gateway_attachment_id" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.transitGatewayAttachmentId"></a>

```python
transit_gateway_attachment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#transit_gateway_attachment_id FlowLog#transit_gateway_attachment_id}.

---

##### `transit_gateway_id`<sup>Optional</sup> <a name="transit_gateway_id" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#transit_gateway_id FlowLog#transit_gateway_id}.

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#vpc_id FlowLog#vpc_id}.

---

### FlowLogDestinationOptions <a name="FlowLogDestinationOptions" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import flow_log

flowLog.FlowLogDestinationOptions(
  file_format: str = None,
  hive_compatible_partitions: typing.Union[bool, IResolvable] = None,
  per_hour_partition: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptions.property.fileFormat">file_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#file_format FlowLog#file_format}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptions.property.hiveCompatiblePartitions">hive_compatible_partitions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#hive_compatible_partitions FlowLog#hive_compatible_partitions}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptions.property.perHourPartition">per_hour_partition</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#per_hour_partition FlowLog#per_hour_partition}. |

---

##### `file_format`<sup>Optional</sup> <a name="file_format" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptions.property.fileFormat"></a>

```python
file_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#file_format FlowLog#file_format}.

---

##### `hive_compatible_partitions`<sup>Optional</sup> <a name="hive_compatible_partitions" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptions.property.hiveCompatiblePartitions"></a>

```python
hive_compatible_partitions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#hive_compatible_partitions FlowLog#hive_compatible_partitions}.

---

##### `per_hour_partition`<sup>Optional</sup> <a name="per_hour_partition" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptions.property.perHourPartition"></a>

```python
per_hour_partition: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#per_hour_partition FlowLog#per_hour_partition}.

---

## Classes <a name="Classes" id="Classes"></a>

### FlowLogDestinationOptionsOutputReference <a name="FlowLogDestinationOptionsOutputReference" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import flow_log

flowLog.FlowLogDestinationOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resetFileFormat">reset_file_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resetHiveCompatiblePartitions">reset_hive_compatible_partitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resetPerHourPartition">reset_per_hour_partition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_format` <a name="reset_file_format" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resetFileFormat"></a>

```python
def reset_file_format() -> None
```

##### `reset_hive_compatible_partitions` <a name="reset_hive_compatible_partitions" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resetHiveCompatiblePartitions"></a>

```python
def reset_hive_compatible_partitions() -> None
```

##### `reset_per_hour_partition` <a name="reset_per_hour_partition" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resetPerHourPartition"></a>

```python
def reset_per_hour_partition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.fileFormatInput">file_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitionsInput">hive_compatible_partitions_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.perHourPartitionInput">per_hour_partition_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.fileFormat">file_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitions">hive_compatible_partitions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.perHourPartition">per_hour_partition</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptions">FlowLogDestinationOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_format_input`<sup>Optional</sup> <a name="file_format_input" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.fileFormatInput"></a>

```python
file_format_input: str
```

- *Type:* str

---

##### `hive_compatible_partitions_input`<sup>Optional</sup> <a name="hive_compatible_partitions_input" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitionsInput"></a>

```python
hive_compatible_partitions_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `per_hour_partition_input`<sup>Optional</sup> <a name="per_hour_partition_input" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.perHourPartitionInput"></a>

```python
per_hour_partition_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `file_format`<sup>Required</sup> <a name="file_format" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.fileFormat"></a>

```python
file_format: str
```

- *Type:* str

---

##### `hive_compatible_partitions`<sup>Required</sup> <a name="hive_compatible_partitions" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitions"></a>

```python
hive_compatible_partitions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `per_hour_partition`<sup>Required</sup> <a name="per_hour_partition" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.perHourPartition"></a>

```python
per_hour_partition: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.internalValue"></a>

```python
internal_value: FlowLogDestinationOptions
```

- *Type:* <a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptions">FlowLogDestinationOptions</a>

---



