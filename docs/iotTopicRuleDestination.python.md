# `iotTopicRuleDestination` Submodule <a name="`iotTopicRuleDestination` Submodule" id="@cdktf/provider-aws.iotTopicRuleDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotTopicRuleDestination <a name="IotTopicRuleDestination" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination aws_iot_topic_rule_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iot_topic_rule_destination

iotTopicRuleDestination.IotTopicRuleDestination(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  vpc_configuration: IotTopicRuleDestinationVpcConfiguration,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: IotTopicRuleDestinationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration">IotTopicRuleDestinationVpcConfiguration</a></code> | vpc_configuration block. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#enabled IotTopicRuleDestination#enabled}. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#id IotTopicRuleDestination#id}. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeouts">IotTopicRuleDestinationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `vpc_configuration`<sup>Required</sup> <a name="vpc_configuration" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.vpcConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration">IotTopicRuleDestinationVpcConfiguration</a>

vpc_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#vpc_configuration IotTopicRuleDestination#vpc_configuration}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#enabled IotTopicRuleDestination#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#id IotTopicRuleDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeouts">IotTopicRuleDestinationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#timeouts IotTopicRuleDestination#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.putVpcConfiguration">put_vpc_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#create IotTopicRuleDestination#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#delete IotTopicRuleDestination#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#update IotTopicRuleDestination#update}.

---

##### `put_vpc_configuration` <a name="put_vpc_configuration" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.putVpcConfiguration"></a>

```python
def put_vpc_configuration(
  role_arn: str,
  subnet_ids: typing.List[str],
  vpc_id: str,
  security_groups: typing.List[str] = None
) -> None
```

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.putVpcConfiguration.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#role_arn IotTopicRuleDestination#role_arn}.

---

###### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.putVpcConfiguration.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#subnet_ids IotTopicRuleDestination#subnet_ids}.

---

###### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.putVpcConfiguration.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#vpc_id IotTopicRuleDestination#vpc_id}.

---

###### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.putVpcConfiguration.parameter.securityGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#security_groups IotTopicRuleDestination#security_groups}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import iot_topic_rule_destination

iotTopicRuleDestination.IotTopicRuleDestination.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import iot_topic_rule_destination

iotTopicRuleDestination.IotTopicRuleDestination.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import iot_topic_rule_destination

iotTopicRuleDestination.IotTopicRuleDestination.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference">IotTopicRuleDestinationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference">IotTopicRuleDestinationVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeouts">IotTopicRuleDestinationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.vpcConfigurationInput">vpc_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration">IotTopicRuleDestinationVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.timeouts"></a>

```python
timeouts: IotTopicRuleDestinationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference">IotTopicRuleDestinationTimeoutsOutputReference</a>

---

##### `vpc_configuration`<sup>Required</sup> <a name="vpc_configuration" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.vpcConfiguration"></a>

```python
vpc_configuration: IotTopicRuleDestinationVpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference">IotTopicRuleDestinationVpcConfigurationOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IotTopicRuleDestinationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeouts">IotTopicRuleDestinationTimeouts</a>, cdktf.IResolvable]

---

##### `vpc_configuration_input`<sup>Optional</sup> <a name="vpc_configuration_input" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.vpcConfigurationInput"></a>

```python
vpc_configuration_input: IotTopicRuleDestinationVpcConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration">IotTopicRuleDestinationVpcConfiguration</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotTopicRuleDestinationConfig <a name="IotTopicRuleDestinationConfig" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iot_topic_rule_destination

iotTopicRuleDestination.IotTopicRuleDestinationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  vpc_configuration: IotTopicRuleDestinationVpcConfiguration,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: IotTopicRuleDestinationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration">IotTopicRuleDestinationVpcConfiguration</a></code> | vpc_configuration block. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#enabled IotTopicRuleDestination#enabled}. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#id IotTopicRuleDestination#id}. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeouts">IotTopicRuleDestinationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `vpc_configuration`<sup>Required</sup> <a name="vpc_configuration" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.vpcConfiguration"></a>

```python
vpc_configuration: IotTopicRuleDestinationVpcConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration">IotTopicRuleDestinationVpcConfiguration</a>

vpc_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#vpc_configuration IotTopicRuleDestination#vpc_configuration}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#enabled IotTopicRuleDestination#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#id IotTopicRuleDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.timeouts"></a>

```python
timeouts: IotTopicRuleDestinationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeouts">IotTopicRuleDestinationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#timeouts IotTopicRuleDestination#timeouts}

---

### IotTopicRuleDestinationTimeouts <a name="IotTopicRuleDestinationTimeouts" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iot_topic_rule_destination

iotTopicRuleDestination.IotTopicRuleDestinationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#create IotTopicRuleDestination#create}. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#delete IotTopicRuleDestination#delete}. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#update IotTopicRuleDestination#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#create IotTopicRuleDestination#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#delete IotTopicRuleDestination#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#update IotTopicRuleDestination#update}.

---

### IotTopicRuleDestinationVpcConfiguration <a name="IotTopicRuleDestinationVpcConfiguration" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iot_topic_rule_destination

iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration(
  role_arn: str,
  subnet_ids: typing.List[str],
  vpc_id: str,
  security_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#role_arn IotTopicRuleDestination#role_arn}. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#subnet_ids IotTopicRuleDestination#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#vpc_id IotTopicRuleDestination#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#security_groups IotTopicRuleDestination#security_groups}. |

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#role_arn IotTopicRuleDestination#role_arn}.

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#subnet_ids IotTopicRuleDestination#subnet_ids}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#vpc_id IotTopicRuleDestination#vpc_id}.

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#security_groups IotTopicRuleDestination#security_groups}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotTopicRuleDestinationTimeoutsOutputReference <a name="IotTopicRuleDestinationTimeoutsOutputReference" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iot_topic_rule_destination

iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeouts">IotTopicRuleDestinationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IotTopicRuleDestinationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeouts">IotTopicRuleDestinationTimeouts</a>, cdktf.IResolvable]

---


### IotTopicRuleDestinationVpcConfigurationOutputReference <a name="IotTopicRuleDestinationVpcConfigurationOutputReference" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iot_topic_rule_destination

iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration">IotTopicRuleDestinationVpcConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IotTopicRuleDestinationVpcConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration">IotTopicRuleDestinationVpcConfiguration</a>

---



