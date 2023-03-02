# `ec2TrafficMirrorFilterRule` Submodule <a name="`ec2TrafficMirrorFilterRule` Submodule" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TrafficMirrorFilterRule <a name="Ec2TrafficMirrorFilterRule" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule aws_ec2_traffic_mirror_filter_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_traffic_mirror_filter_rule

ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_cidr_block: str,
  rule_action: str,
  rule_number: typing.Union[int, float],
  source_cidr_block: str,
  traffic_direction: str,
  traffic_mirror_filter_id: str,
  description: str = None,
  destination_port_range: Ec2TrafficMirrorFilterRuleDestinationPortRange = None,
  id: str = None,
  protocol: typing.Union[int, float] = None,
  source_port_range: Ec2TrafficMirrorFilterRuleSourcePortRange = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.destinationCidrBlock">destination_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#destination_cidr_block Ec2TrafficMirrorFilterRule#destination_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.ruleAction">rule_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#rule_action Ec2TrafficMirrorFilterRule#rule_action}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.ruleNumber">rule_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#rule_number Ec2TrafficMirrorFilterRule#rule_number}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.sourceCidrBlock">source_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#source_cidr_block Ec2TrafficMirrorFilterRule#source_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.trafficDirection">traffic_direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#traffic_direction Ec2TrafficMirrorFilterRule#traffic_direction}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.trafficMirrorFilterId">traffic_mirror_filter_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#traffic_mirror_filter_id Ec2TrafficMirrorFilterRule#traffic_mirror_filter_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#description Ec2TrafficMirrorFilterRule#description}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.destinationPortRange">destination_port_range</a></code> | <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange">Ec2TrafficMirrorFilterRuleDestinationPortRange</a></code> | destination_port_range block. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#id Ec2TrafficMirrorFilterRule#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.protocol">protocol</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#protocol Ec2TrafficMirrorFilterRule#protocol}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.sourcePortRange">source_port_range</a></code> | <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange">Ec2TrafficMirrorFilterRuleSourcePortRange</a></code> | source_port_range block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_cidr_block`<sup>Required</sup> <a name="destination_cidr_block" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.destinationCidrBlock"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#destination_cidr_block Ec2TrafficMirrorFilterRule#destination_cidr_block}.

---

##### `rule_action`<sup>Required</sup> <a name="rule_action" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.ruleAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#rule_action Ec2TrafficMirrorFilterRule#rule_action}.

---

##### `rule_number`<sup>Required</sup> <a name="rule_number" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.ruleNumber"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#rule_number Ec2TrafficMirrorFilterRule#rule_number}.

---

##### `source_cidr_block`<sup>Required</sup> <a name="source_cidr_block" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.sourceCidrBlock"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#source_cidr_block Ec2TrafficMirrorFilterRule#source_cidr_block}.

---

##### `traffic_direction`<sup>Required</sup> <a name="traffic_direction" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.trafficDirection"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#traffic_direction Ec2TrafficMirrorFilterRule#traffic_direction}.

---

##### `traffic_mirror_filter_id`<sup>Required</sup> <a name="traffic_mirror_filter_id" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.trafficMirrorFilterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#traffic_mirror_filter_id Ec2TrafficMirrorFilterRule#traffic_mirror_filter_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#description Ec2TrafficMirrorFilterRule#description}.

---

##### `destination_port_range`<sup>Optional</sup> <a name="destination_port_range" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.destinationPortRange"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange">Ec2TrafficMirrorFilterRuleDestinationPortRange</a>

destination_port_range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#destination_port_range Ec2TrafficMirrorFilterRule#destination_port_range}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#id Ec2TrafficMirrorFilterRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.protocol"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#protocol Ec2TrafficMirrorFilterRule#protocol}.

---

##### `source_port_range`<sup>Optional</sup> <a name="source_port_range" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.sourcePortRange"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange">Ec2TrafficMirrorFilterRuleSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#source_port_range Ec2TrafficMirrorFilterRule#source_port_range}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.putDestinationPortRange">put_destination_port_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.putSourcePortRange">put_source_port_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetDestinationPortRange">reset_destination_port_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetSourcePortRange">reset_source_port_range</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_destination_port_range` <a name="put_destination_port_range" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.putDestinationPortRange"></a>

```python
def put_destination_port_range(
  from_port: typing.Union[int, float] = None,
  to_port: typing.Union[int, float] = None
) -> None
```

###### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.putDestinationPortRange.parameter.fromPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#from_port Ec2TrafficMirrorFilterRule#from_port}.

---

###### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.putDestinationPortRange.parameter.toPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#to_port Ec2TrafficMirrorFilterRule#to_port}.

---

##### `put_source_port_range` <a name="put_source_port_range" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.putSourcePortRange"></a>

```python
def put_source_port_range(
  from_port: typing.Union[int, float] = None,
  to_port: typing.Union[int, float] = None
) -> None
```

###### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.putSourcePortRange.parameter.fromPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#from_port Ec2TrafficMirrorFilterRule#from_port}.

---

###### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.putSourcePortRange.parameter.toPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#to_port Ec2TrafficMirrorFilterRule#to_port}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_destination_port_range` <a name="reset_destination_port_range" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetDestinationPortRange"></a>

```python
def reset_destination_port_range() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_source_port_range` <a name="reset_source_port_range" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetSourcePortRange"></a>

```python
def reset_source_port_range() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ec2_traffic_mirror_filter_rule

ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ec2_traffic_mirror_filter_rule

ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ec2_traffic_mirror_filter_rule

ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationPortRange">destination_port_range</a></code> | <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference">Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourcePortRange">source_port_range</a></code> | <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference">Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationCidrBlockInput">destination_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationPortRangeInput">destination_port_range_input</a></code> | <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange">Ec2TrafficMirrorFilterRuleDestinationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.protocolInput">protocol_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleActionInput">rule_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleNumberInput">rule_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourceCidrBlockInput">source_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourcePortRangeInput">source_port_range_input</a></code> | <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange">Ec2TrafficMirrorFilterRuleSourcePortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficDirectionInput">traffic_direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficMirrorFilterIdInput">traffic_mirror_filter_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationCidrBlock">destination_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.protocol">protocol</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleAction">rule_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleNumber">rule_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourceCidrBlock">source_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficDirection">traffic_direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficMirrorFilterId">traffic_mirror_filter_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `destination_port_range`<sup>Required</sup> <a name="destination_port_range" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationPortRange"></a>

```python
destination_port_range: Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference">Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference</a>

---

##### `source_port_range`<sup>Required</sup> <a name="source_port_range" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourcePortRange"></a>

```python
source_port_range: Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference">Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `destination_cidr_block_input`<sup>Optional</sup> <a name="destination_cidr_block_input" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationCidrBlockInput"></a>

```python
destination_cidr_block_input: str
```

- *Type:* str

---

##### `destination_port_range_input`<sup>Optional</sup> <a name="destination_port_range_input" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationPortRangeInput"></a>

```python
destination_port_range_input: Ec2TrafficMirrorFilterRuleDestinationPortRange
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange">Ec2TrafficMirrorFilterRuleDestinationPortRange</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.protocolInput"></a>

```python
protocol_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_action_input`<sup>Optional</sup> <a name="rule_action_input" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleActionInput"></a>

```python
rule_action_input: str
```

- *Type:* str

---

##### `rule_number_input`<sup>Optional</sup> <a name="rule_number_input" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleNumberInput"></a>

```python
rule_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_cidr_block_input`<sup>Optional</sup> <a name="source_cidr_block_input" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourceCidrBlockInput"></a>

```python
source_cidr_block_input: str
```

- *Type:* str

---

##### `source_port_range_input`<sup>Optional</sup> <a name="source_port_range_input" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourcePortRangeInput"></a>

```python
source_port_range_input: Ec2TrafficMirrorFilterRuleSourcePortRange
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange">Ec2TrafficMirrorFilterRuleSourcePortRange</a>

---

##### `traffic_direction_input`<sup>Optional</sup> <a name="traffic_direction_input" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficDirectionInput"></a>

```python
traffic_direction_input: str
```

- *Type:* str

---

##### `traffic_mirror_filter_id_input`<sup>Optional</sup> <a name="traffic_mirror_filter_id_input" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficMirrorFilterIdInput"></a>

```python
traffic_mirror_filter_id_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `destination_cidr_block`<sup>Required</sup> <a name="destination_cidr_block" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationCidrBlock"></a>

```python
destination_cidr_block: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.protocol"></a>

```python
protocol: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_action`<sup>Required</sup> <a name="rule_action" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleAction"></a>

```python
rule_action: str
```

- *Type:* str

---

##### `rule_number`<sup>Required</sup> <a name="rule_number" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleNumber"></a>

```python
rule_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_cidr_block`<sup>Required</sup> <a name="source_cidr_block" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourceCidrBlock"></a>

```python
source_cidr_block: str
```

- *Type:* str

---

##### `traffic_direction`<sup>Required</sup> <a name="traffic_direction" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficDirection"></a>

```python
traffic_direction: str
```

- *Type:* str

---

##### `traffic_mirror_filter_id`<sup>Required</sup> <a name="traffic_mirror_filter_id" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficMirrorFilterId"></a>

```python
traffic_mirror_filter_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TrafficMirrorFilterRuleConfig <a name="Ec2TrafficMirrorFilterRuleConfig" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_traffic_mirror_filter_rule

ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_cidr_block: str,
  rule_action: str,
  rule_number: typing.Union[int, float],
  source_cidr_block: str,
  traffic_direction: str,
  traffic_mirror_filter_id: str,
  description: str = None,
  destination_port_range: Ec2TrafficMirrorFilterRuleDestinationPortRange = None,
  id: str = None,
  protocol: typing.Union[int, float] = None,
  source_port_range: Ec2TrafficMirrorFilterRuleSourcePortRange = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.destinationCidrBlock">destination_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#destination_cidr_block Ec2TrafficMirrorFilterRule#destination_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.ruleAction">rule_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#rule_action Ec2TrafficMirrorFilterRule#rule_action}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.ruleNumber">rule_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#rule_number Ec2TrafficMirrorFilterRule#rule_number}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.sourceCidrBlock">source_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#source_cidr_block Ec2TrafficMirrorFilterRule#source_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.trafficDirection">traffic_direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#traffic_direction Ec2TrafficMirrorFilterRule#traffic_direction}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.trafficMirrorFilterId">traffic_mirror_filter_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#traffic_mirror_filter_id Ec2TrafficMirrorFilterRule#traffic_mirror_filter_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#description Ec2TrafficMirrorFilterRule#description}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.destinationPortRange">destination_port_range</a></code> | <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange">Ec2TrafficMirrorFilterRuleDestinationPortRange</a></code> | destination_port_range block. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#id Ec2TrafficMirrorFilterRule#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.protocol">protocol</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#protocol Ec2TrafficMirrorFilterRule#protocol}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.sourcePortRange">source_port_range</a></code> | <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange">Ec2TrafficMirrorFilterRuleSourcePortRange</a></code> | source_port_range block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_cidr_block`<sup>Required</sup> <a name="destination_cidr_block" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.destinationCidrBlock"></a>

```python
destination_cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#destination_cidr_block Ec2TrafficMirrorFilterRule#destination_cidr_block}.

---

##### `rule_action`<sup>Required</sup> <a name="rule_action" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.ruleAction"></a>

```python
rule_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#rule_action Ec2TrafficMirrorFilterRule#rule_action}.

---

##### `rule_number`<sup>Required</sup> <a name="rule_number" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.ruleNumber"></a>

```python
rule_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#rule_number Ec2TrafficMirrorFilterRule#rule_number}.

---

##### `source_cidr_block`<sup>Required</sup> <a name="source_cidr_block" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.sourceCidrBlock"></a>

```python
source_cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#source_cidr_block Ec2TrafficMirrorFilterRule#source_cidr_block}.

---

##### `traffic_direction`<sup>Required</sup> <a name="traffic_direction" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.trafficDirection"></a>

```python
traffic_direction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#traffic_direction Ec2TrafficMirrorFilterRule#traffic_direction}.

---

##### `traffic_mirror_filter_id`<sup>Required</sup> <a name="traffic_mirror_filter_id" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.trafficMirrorFilterId"></a>

```python
traffic_mirror_filter_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#traffic_mirror_filter_id Ec2TrafficMirrorFilterRule#traffic_mirror_filter_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#description Ec2TrafficMirrorFilterRule#description}.

---

##### `destination_port_range`<sup>Optional</sup> <a name="destination_port_range" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.destinationPortRange"></a>

```python
destination_port_range: Ec2TrafficMirrorFilterRuleDestinationPortRange
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange">Ec2TrafficMirrorFilterRuleDestinationPortRange</a>

destination_port_range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#destination_port_range Ec2TrafficMirrorFilterRule#destination_port_range}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#id Ec2TrafficMirrorFilterRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.protocol"></a>

```python
protocol: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#protocol Ec2TrafficMirrorFilterRule#protocol}.

---

##### `source_port_range`<sup>Optional</sup> <a name="source_port_range" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.sourcePortRange"></a>

```python
source_port_range: Ec2TrafficMirrorFilterRuleSourcePortRange
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange">Ec2TrafficMirrorFilterRuleSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#source_port_range Ec2TrafficMirrorFilterRule#source_port_range}

---

### Ec2TrafficMirrorFilterRuleDestinationPortRange <a name="Ec2TrafficMirrorFilterRuleDestinationPortRange" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_traffic_mirror_filter_rule

ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange(
  from_port: typing.Union[int, float] = None,
  to_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#from_port Ec2TrafficMirrorFilterRule#from_port}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#to_port Ec2TrafficMirrorFilterRule#to_port}. |

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#from_port Ec2TrafficMirrorFilterRule#from_port}.

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#to_port Ec2TrafficMirrorFilterRule#to_port}.

---

### Ec2TrafficMirrorFilterRuleSourcePortRange <a name="Ec2TrafficMirrorFilterRuleSourcePortRange" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_traffic_mirror_filter_rule

ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange(
  from_port: typing.Union[int, float] = None,
  to_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#from_port Ec2TrafficMirrorFilterRule#from_port}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#to_port Ec2TrafficMirrorFilterRule#to_port}. |

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#from_port Ec2TrafficMirrorFilterRule#from_port}.

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#to_port Ec2TrafficMirrorFilterRule#to_port}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference <a name="Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_traffic_mirror_filter_rule

ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.resetFromPort">reset_from_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.resetToPort">reset_to_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from_port` <a name="reset_from_port" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.resetFromPort"></a>

```python
def reset_from_port() -> None
```

##### `reset_to_port` <a name="reset_to_port" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.resetToPort"></a>

```python
def reset_to_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange">Ec2TrafficMirrorFilterRuleDestinationPortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.internalValue"></a>

```python
internal_value: Ec2TrafficMirrorFilterRuleDestinationPortRange
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange">Ec2TrafficMirrorFilterRuleDestinationPortRange</a>

---


### Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference <a name="Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_traffic_mirror_filter_rule

ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.resetFromPort">reset_from_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.resetToPort">reset_to_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from_port` <a name="reset_from_port" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.resetFromPort"></a>

```python
def reset_from_port() -> None
```

##### `reset_to_port` <a name="reset_to_port" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.resetToPort"></a>

```python
def reset_to_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange">Ec2TrafficMirrorFilterRuleSourcePortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.internalValue"></a>

```python
internal_value: Ec2TrafficMirrorFilterRuleSourcePortRange
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange">Ec2TrafficMirrorFilterRuleSourcePortRange</a>

---



