# `snsTopicSubscription` Submodule <a name="`snsTopicSubscription` Submodule" id="@cdktf/provider-aws.snsTopicSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnsTopicSubscription <a name="SnsTopicSubscription" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription aws_sns_topic_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sns_topic_subscription

snsTopicSubscription.SnsTopicSubscription(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  endpoint: str,
  protocol: str,
  topic_arn: str,
  confirmation_timeout_in_minutes: typing.Union[int, float] = None,
  delivery_policy: str = None,
  endpoint_auto_confirms: typing.Union[bool, IResolvable] = None,
  filter_policy: str = None,
  filter_policy_scope: str = None,
  id: str = None,
  raw_message_delivery: typing.Union[bool, IResolvable] = None,
  redrive_policy: str = None,
  subscription_role_arn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.endpoint">endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#endpoint SnsTopicSubscription#endpoint}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#protocol SnsTopicSubscription#protocol}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.topicArn">topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#topic_arn SnsTopicSubscription#topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.confirmationTimeoutInMinutes">confirmation_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#confirmation_timeout_in_minutes SnsTopicSubscription#confirmation_timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.deliveryPolicy">delivery_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#delivery_policy SnsTopicSubscription#delivery_policy}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.endpointAutoConfirms">endpoint_auto_confirms</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#endpoint_auto_confirms SnsTopicSubscription#endpoint_auto_confirms}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.filterPolicy">filter_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#filter_policy SnsTopicSubscription#filter_policy}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.filterPolicyScope">filter_policy_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#filter_policy_scope SnsTopicSubscription#filter_policy_scope}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#id SnsTopicSubscription#id}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.rawMessageDelivery">raw_message_delivery</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#raw_message_delivery SnsTopicSubscription#raw_message_delivery}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.redrivePolicy">redrive_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#redrive_policy SnsTopicSubscription#redrive_policy}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.subscriptionRoleArn">subscription_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#subscription_role_arn SnsTopicSubscription#subscription_role_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.endpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#endpoint SnsTopicSubscription#endpoint}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#protocol SnsTopicSubscription#protocol}.

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.topicArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#topic_arn SnsTopicSubscription#topic_arn}.

---

##### `confirmation_timeout_in_minutes`<sup>Optional</sup> <a name="confirmation_timeout_in_minutes" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.confirmationTimeoutInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#confirmation_timeout_in_minutes SnsTopicSubscription#confirmation_timeout_in_minutes}.

---

##### `delivery_policy`<sup>Optional</sup> <a name="delivery_policy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.deliveryPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#delivery_policy SnsTopicSubscription#delivery_policy}.

---

##### `endpoint_auto_confirms`<sup>Optional</sup> <a name="endpoint_auto_confirms" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.endpointAutoConfirms"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#endpoint_auto_confirms SnsTopicSubscription#endpoint_auto_confirms}.

---

##### `filter_policy`<sup>Optional</sup> <a name="filter_policy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.filterPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#filter_policy SnsTopicSubscription#filter_policy}.

---

##### `filter_policy_scope`<sup>Optional</sup> <a name="filter_policy_scope" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.filterPolicyScope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#filter_policy_scope SnsTopicSubscription#filter_policy_scope}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#id SnsTopicSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `raw_message_delivery`<sup>Optional</sup> <a name="raw_message_delivery" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.rawMessageDelivery"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#raw_message_delivery SnsTopicSubscription#raw_message_delivery}.

---

##### `redrive_policy`<sup>Optional</sup> <a name="redrive_policy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.redrivePolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#redrive_policy SnsTopicSubscription#redrive_policy}.

---

##### `subscription_role_arn`<sup>Optional</sup> <a name="subscription_role_arn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.subscriptionRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#subscription_role_arn SnsTopicSubscription#subscription_role_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetConfirmationTimeoutInMinutes">reset_confirmation_timeout_in_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetDeliveryPolicy">reset_delivery_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetEndpointAutoConfirms">reset_endpoint_auto_confirms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetFilterPolicy">reset_filter_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetFilterPolicyScope">reset_filter_policy_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetRawMessageDelivery">reset_raw_message_delivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetRedrivePolicy">reset_redrive_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetSubscriptionRoleArn">reset_subscription_role_arn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_confirmation_timeout_in_minutes` <a name="reset_confirmation_timeout_in_minutes" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetConfirmationTimeoutInMinutes"></a>

```python
def reset_confirmation_timeout_in_minutes() -> None
```

##### `reset_delivery_policy` <a name="reset_delivery_policy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetDeliveryPolicy"></a>

```python
def reset_delivery_policy() -> None
```

##### `reset_endpoint_auto_confirms` <a name="reset_endpoint_auto_confirms" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetEndpointAutoConfirms"></a>

```python
def reset_endpoint_auto_confirms() -> None
```

##### `reset_filter_policy` <a name="reset_filter_policy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetFilterPolicy"></a>

```python
def reset_filter_policy() -> None
```

##### `reset_filter_policy_scope` <a name="reset_filter_policy_scope" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetFilterPolicyScope"></a>

```python
def reset_filter_policy_scope() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_raw_message_delivery` <a name="reset_raw_message_delivery" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetRawMessageDelivery"></a>

```python
def reset_raw_message_delivery() -> None
```

##### `reset_redrive_policy` <a name="reset_redrive_policy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetRedrivePolicy"></a>

```python
def reset_redrive_policy() -> None
```

##### `reset_subscription_role_arn` <a name="reset_subscription_role_arn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetSubscriptionRoleArn"></a>

```python
def reset_subscription_role_arn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import sns_topic_subscription

snsTopicSubscription.SnsTopicSubscription.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import sns_topic_subscription

snsTopicSubscription.SnsTopicSubscription.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import sns_topic_subscription

snsTopicSubscription.SnsTopicSubscription.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.confirmationWasAuthenticated">confirmation_was_authenticated</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.pendingConfirmation">pending_confirmation</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.confirmationTimeoutInMinutesInput">confirmation_timeout_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.deliveryPolicyInput">delivery_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpointAutoConfirmsInput">endpoint_auto_confirms_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicyInput">filter_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicyScopeInput">filter_policy_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.rawMessageDeliveryInput">raw_message_delivery_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.redrivePolicyInput">redrive_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.subscriptionRoleArnInput">subscription_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.topicArnInput">topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.confirmationTimeoutInMinutes">confirmation_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.deliveryPolicy">delivery_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpointAutoConfirms">endpoint_auto_confirms</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicy">filter_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicyScope">filter_policy_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.rawMessageDelivery">raw_message_delivery</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.redrivePolicy">redrive_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.subscriptionRoleArn">subscription_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.topicArn">topic_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `confirmation_was_authenticated`<sup>Required</sup> <a name="confirmation_was_authenticated" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.confirmationWasAuthenticated"></a>

```python
confirmation_was_authenticated: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `pending_confirmation`<sup>Required</sup> <a name="pending_confirmation" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.pendingConfirmation"></a>

```python
pending_confirmation: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `confirmation_timeout_in_minutes_input`<sup>Optional</sup> <a name="confirmation_timeout_in_minutes_input" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.confirmationTimeoutInMinutesInput"></a>

```python
confirmation_timeout_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delivery_policy_input`<sup>Optional</sup> <a name="delivery_policy_input" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.deliveryPolicyInput"></a>

```python
delivery_policy_input: str
```

- *Type:* str

---

##### `endpoint_auto_confirms_input`<sup>Optional</sup> <a name="endpoint_auto_confirms_input" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpointAutoConfirmsInput"></a>

```python
endpoint_auto_confirms_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `filter_policy_input`<sup>Optional</sup> <a name="filter_policy_input" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicyInput"></a>

```python
filter_policy_input: str
```

- *Type:* str

---

##### `filter_policy_scope_input`<sup>Optional</sup> <a name="filter_policy_scope_input" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicyScopeInput"></a>

```python
filter_policy_scope_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `raw_message_delivery_input`<sup>Optional</sup> <a name="raw_message_delivery_input" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.rawMessageDeliveryInput"></a>

```python
raw_message_delivery_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `redrive_policy_input`<sup>Optional</sup> <a name="redrive_policy_input" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.redrivePolicyInput"></a>

```python
redrive_policy_input: str
```

- *Type:* str

---

##### `subscription_role_arn_input`<sup>Optional</sup> <a name="subscription_role_arn_input" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.subscriptionRoleArnInput"></a>

```python
subscription_role_arn_input: str
```

- *Type:* str

---

##### `topic_arn_input`<sup>Optional</sup> <a name="topic_arn_input" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.topicArnInput"></a>

```python
topic_arn_input: str
```

- *Type:* str

---

##### `confirmation_timeout_in_minutes`<sup>Required</sup> <a name="confirmation_timeout_in_minutes" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.confirmationTimeoutInMinutes"></a>

```python
confirmation_timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delivery_policy`<sup>Required</sup> <a name="delivery_policy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.deliveryPolicy"></a>

```python
delivery_policy: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `endpoint_auto_confirms`<sup>Required</sup> <a name="endpoint_auto_confirms" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpointAutoConfirms"></a>

```python
endpoint_auto_confirms: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_policy`<sup>Required</sup> <a name="filter_policy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicy"></a>

```python
filter_policy: str
```

- *Type:* str

---

##### `filter_policy_scope`<sup>Required</sup> <a name="filter_policy_scope" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicyScope"></a>

```python
filter_policy_scope: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `raw_message_delivery`<sup>Required</sup> <a name="raw_message_delivery" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.rawMessageDelivery"></a>

```python
raw_message_delivery: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `redrive_policy`<sup>Required</sup> <a name="redrive_policy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.redrivePolicy"></a>

```python
redrive_policy: str
```

- *Type:* str

---

##### `subscription_role_arn`<sup>Required</sup> <a name="subscription_role_arn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.subscriptionRoleArn"></a>

```python
subscription_role_arn: str
```

- *Type:* str

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SnsTopicSubscriptionConfig <a name="SnsTopicSubscriptionConfig" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sns_topic_subscription

snsTopicSubscription.SnsTopicSubscriptionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  endpoint: str,
  protocol: str,
  topic_arn: str,
  confirmation_timeout_in_minutes: typing.Union[int, float] = None,
  delivery_policy: str = None,
  endpoint_auto_confirms: typing.Union[bool, IResolvable] = None,
  filter_policy: str = None,
  filter_policy_scope: str = None,
  id: str = None,
  raw_message_delivery: typing.Union[bool, IResolvable] = None,
  redrive_policy: str = None,
  subscription_role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.endpoint">endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#endpoint SnsTopicSubscription#endpoint}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#protocol SnsTopicSubscription#protocol}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.topicArn">topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#topic_arn SnsTopicSubscription#topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.confirmationTimeoutInMinutes">confirmation_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#confirmation_timeout_in_minutes SnsTopicSubscription#confirmation_timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.deliveryPolicy">delivery_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#delivery_policy SnsTopicSubscription#delivery_policy}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.endpointAutoConfirms">endpoint_auto_confirms</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#endpoint_auto_confirms SnsTopicSubscription#endpoint_auto_confirms}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.filterPolicy">filter_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#filter_policy SnsTopicSubscription#filter_policy}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.filterPolicyScope">filter_policy_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#filter_policy_scope SnsTopicSubscription#filter_policy_scope}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#id SnsTopicSubscription#id}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.rawMessageDelivery">raw_message_delivery</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#raw_message_delivery SnsTopicSubscription#raw_message_delivery}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.redrivePolicy">redrive_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#redrive_policy SnsTopicSubscription#redrive_policy}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.subscriptionRoleArn">subscription_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#subscription_role_arn SnsTopicSubscription#subscription_role_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#endpoint SnsTopicSubscription#endpoint}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#protocol SnsTopicSubscription#protocol}.

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#topic_arn SnsTopicSubscription#topic_arn}.

---

##### `confirmation_timeout_in_minutes`<sup>Optional</sup> <a name="confirmation_timeout_in_minutes" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.confirmationTimeoutInMinutes"></a>

```python
confirmation_timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#confirmation_timeout_in_minutes SnsTopicSubscription#confirmation_timeout_in_minutes}.

---

##### `delivery_policy`<sup>Optional</sup> <a name="delivery_policy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.deliveryPolicy"></a>

```python
delivery_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#delivery_policy SnsTopicSubscription#delivery_policy}.

---

##### `endpoint_auto_confirms`<sup>Optional</sup> <a name="endpoint_auto_confirms" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.endpointAutoConfirms"></a>

```python
endpoint_auto_confirms: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#endpoint_auto_confirms SnsTopicSubscription#endpoint_auto_confirms}.

---

##### `filter_policy`<sup>Optional</sup> <a name="filter_policy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.filterPolicy"></a>

```python
filter_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#filter_policy SnsTopicSubscription#filter_policy}.

---

##### `filter_policy_scope`<sup>Optional</sup> <a name="filter_policy_scope" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.filterPolicyScope"></a>

```python
filter_policy_scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#filter_policy_scope SnsTopicSubscription#filter_policy_scope}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#id SnsTopicSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `raw_message_delivery`<sup>Optional</sup> <a name="raw_message_delivery" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.rawMessageDelivery"></a>

```python
raw_message_delivery: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#raw_message_delivery SnsTopicSubscription#raw_message_delivery}.

---

##### `redrive_policy`<sup>Optional</sup> <a name="redrive_policy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.redrivePolicy"></a>

```python
redrive_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#redrive_policy SnsTopicSubscription#redrive_policy}.

---

##### `subscription_role_arn`<sup>Optional</sup> <a name="subscription_role_arn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.subscriptionRoleArn"></a>

```python
subscription_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#subscription_role_arn SnsTopicSubscription#subscription_role_arn}.

---



