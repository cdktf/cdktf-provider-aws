# `ceAnomalySubscription` Submodule <a name="`ceAnomalySubscription` Submodule" id="@cdktf/provider-aws.ceAnomalySubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CeAnomalySubscription <a name="CeAnomalySubscription" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription aws_ce_anomaly_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscription(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  frequency: str,
  monitor_arn_list: typing.List[str],
  name: str,
  subscriber: typing.Union[IResolvable, typing.List[CeAnomalySubscriptionSubscriber]],
  account_id: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  threshold: typing.Union[int, float] = None,
  threshold_expression: CeAnomalySubscriptionThresholdExpression = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.frequency">frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#frequency CeAnomalySubscription#frequency}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.monitorArnList">monitor_arn_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#monitor_arn_list CeAnomalySubscription#monitor_arn_list}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#name CeAnomalySubscription#name}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.subscriber">subscriber</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber">CeAnomalySubscriptionSubscriber</a>]]</code> | subscriber block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#account_id CeAnomalySubscription#account_id}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#id CeAnomalySubscription#id}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags CeAnomalySubscription#tags}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags_all CeAnomalySubscription#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#threshold CeAnomalySubscription#threshold}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.thresholdExpression">threshold_expression</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression">CeAnomalySubscriptionThresholdExpression</a></code> | threshold_expression block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.frequency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#frequency CeAnomalySubscription#frequency}.

---

##### `monitor_arn_list`<sup>Required</sup> <a name="monitor_arn_list" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.monitorArnList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#monitor_arn_list CeAnomalySubscription#monitor_arn_list}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#name CeAnomalySubscription#name}.

---

##### `subscriber`<sup>Required</sup> <a name="subscriber" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.subscriber"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber">CeAnomalySubscriptionSubscriber</a>]]

subscriber block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#subscriber CeAnomalySubscription#subscriber}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#account_id CeAnomalySubscription#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#id CeAnomalySubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags CeAnomalySubscription#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags_all CeAnomalySubscription#tags_all}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.threshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#threshold CeAnomalySubscription#threshold}.

---

##### `threshold_expression`<sup>Optional</sup> <a name="threshold_expression" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.thresholdExpression"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression">CeAnomalySubscriptionThresholdExpression</a>

threshold_expression block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#threshold_expression CeAnomalySubscription#threshold_expression}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.putSubscriber">put_subscriber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.putThresholdExpression">put_threshold_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetThreshold">reset_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetThresholdExpression">reset_threshold_expression</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_subscriber` <a name="put_subscriber" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.putSubscriber"></a>

```python
def put_subscriber(
  value: typing.Union[IResolvable, typing.List[CeAnomalySubscriptionSubscriber]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.putSubscriber.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber">CeAnomalySubscriptionSubscriber</a>]]

---

##### `put_threshold_expression` <a name="put_threshold_expression" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.putThresholdExpression"></a>

```python
def put_threshold_expression(
  and: typing.Union[IResolvable, typing.List[CeAnomalySubscriptionThresholdExpressionAnd]] = None,
  cost_category: CeAnomalySubscriptionThresholdExpressionCostCategory = None,
  dimension: CeAnomalySubscriptionThresholdExpressionDimension = None,
  not: CeAnomalySubscriptionThresholdExpressionNot = None,
  or: typing.Union[IResolvable, typing.List[CeAnomalySubscriptionThresholdExpressionOr]] = None,
  tags: CeAnomalySubscriptionThresholdExpressionTags = None
) -> None
```

###### `and`<sup>Optional</sup> <a name="and" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.putThresholdExpression.parameter.and"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd">CeAnomalySubscriptionThresholdExpressionAnd</a>]]

and block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#and CeAnomalySubscription#and}

---

###### `cost_category`<sup>Optional</sup> <a name="cost_category" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.putThresholdExpression.parameter.costCategory"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory">CeAnomalySubscriptionThresholdExpressionCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#cost_category CeAnomalySubscription#cost_category}

---

###### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.putThresholdExpression.parameter.dimension"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension">CeAnomalySubscriptionThresholdExpressionDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#dimension CeAnomalySubscription#dimension}

---

###### `not`<sup>Optional</sup> <a name="not" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.putThresholdExpression.parameter.not"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot">CeAnomalySubscriptionThresholdExpressionNot</a>

not block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#not CeAnomalySubscription#not}

---

###### `or`<sup>Optional</sup> <a name="or" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.putThresholdExpression.parameter.or"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr">CeAnomalySubscriptionThresholdExpressionOr</a>]]

or block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#or CeAnomalySubscription#or}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.putThresholdExpression.parameter.tags"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags">CeAnomalySubscriptionThresholdExpressionTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags CeAnomalySubscription#tags}

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetThreshold"></a>

```python
def reset_threshold() -> None
```

##### `reset_threshold_expression` <a name="reset_threshold_expression" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetThresholdExpression"></a>

```python
def reset_threshold_expression() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscription.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscription.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscription.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.subscriber">subscriber</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList">CeAnomalySubscriptionSubscriberList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.thresholdExpression">threshold_expression</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference">CeAnomalySubscriptionThresholdExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.frequencyInput">frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.monitorArnListInput">monitor_arn_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.subscriberInput">subscriber_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber">CeAnomalySubscriptionSubscriber</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.thresholdExpressionInput">threshold_expression_input</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression">CeAnomalySubscriptionThresholdExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.frequency">frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.monitorArnList">monitor_arn_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `subscriber`<sup>Required</sup> <a name="subscriber" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.subscriber"></a>

```python
subscriber: CeAnomalySubscriptionSubscriberList
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList">CeAnomalySubscriptionSubscriberList</a>

---

##### `threshold_expression`<sup>Required</sup> <a name="threshold_expression" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.thresholdExpression"></a>

```python
threshold_expression: CeAnomalySubscriptionThresholdExpressionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference">CeAnomalySubscriptionThresholdExpressionOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `frequency_input`<sup>Optional</sup> <a name="frequency_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.frequencyInput"></a>

```python
frequency_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `monitor_arn_list_input`<sup>Optional</sup> <a name="monitor_arn_list_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.monitorArnListInput"></a>

```python
monitor_arn_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `subscriber_input`<sup>Optional</sup> <a name="subscriber_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.subscriberInput"></a>

```python
subscriber_input: typing.Union[IResolvable, typing.List[CeAnomalySubscriptionSubscriber]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber">CeAnomalySubscriptionSubscriber</a>]]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `threshold_expression_input`<sup>Optional</sup> <a name="threshold_expression_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.thresholdExpressionInput"></a>

```python
threshold_expression_input: CeAnomalySubscriptionThresholdExpression
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression">CeAnomalySubscriptionThresholdExpression</a>

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `monitor_arn_list`<sup>Required</sup> <a name="monitor_arn_list" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.monitorArnList"></a>

```python
monitor_arn_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CeAnomalySubscriptionConfig <a name="CeAnomalySubscriptionConfig" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  frequency: str,
  monitor_arn_list: typing.List[str],
  name: str,
  subscriber: typing.Union[IResolvable, typing.List[CeAnomalySubscriptionSubscriber]],
  account_id: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  threshold: typing.Union[int, float] = None,
  threshold_expression: CeAnomalySubscriptionThresholdExpression = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.frequency">frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#frequency CeAnomalySubscription#frequency}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.monitorArnList">monitor_arn_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#monitor_arn_list CeAnomalySubscription#monitor_arn_list}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#name CeAnomalySubscription#name}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.subscriber">subscriber</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber">CeAnomalySubscriptionSubscriber</a>]]</code> | subscriber block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#account_id CeAnomalySubscription#account_id}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#id CeAnomalySubscription#id}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags CeAnomalySubscription#tags}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags_all CeAnomalySubscription#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#threshold CeAnomalySubscription#threshold}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.thresholdExpression">threshold_expression</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression">CeAnomalySubscriptionThresholdExpression</a></code> | threshold_expression block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#frequency CeAnomalySubscription#frequency}.

---

##### `monitor_arn_list`<sup>Required</sup> <a name="monitor_arn_list" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.monitorArnList"></a>

```python
monitor_arn_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#monitor_arn_list CeAnomalySubscription#monitor_arn_list}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#name CeAnomalySubscription#name}.

---

##### `subscriber`<sup>Required</sup> <a name="subscriber" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.subscriber"></a>

```python
subscriber: typing.Union[IResolvable, typing.List[CeAnomalySubscriptionSubscriber]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber">CeAnomalySubscriptionSubscriber</a>]]

subscriber block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#subscriber CeAnomalySubscription#subscriber}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#account_id CeAnomalySubscription#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#id CeAnomalySubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags CeAnomalySubscription#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags_all CeAnomalySubscription#tags_all}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#threshold CeAnomalySubscription#threshold}.

---

##### `threshold_expression`<sup>Optional</sup> <a name="threshold_expression" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.thresholdExpression"></a>

```python
threshold_expression: CeAnomalySubscriptionThresholdExpression
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression">CeAnomalySubscriptionThresholdExpression</a>

threshold_expression block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#threshold_expression CeAnomalySubscription#threshold_expression}

---

### CeAnomalySubscriptionSubscriber <a name="CeAnomalySubscriptionSubscriber" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionSubscriber(
  address: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber.property.address">address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#address CeAnomalySubscription#address}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#type CeAnomalySubscription#type}. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber.property.address"></a>

```python
address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#address CeAnomalySubscription#address}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#type CeAnomalySubscription#type}.

---

### CeAnomalySubscriptionThresholdExpression <a name="CeAnomalySubscriptionThresholdExpression" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression(
  and: typing.Union[IResolvable, typing.List[CeAnomalySubscriptionThresholdExpressionAnd]] = None,
  cost_category: CeAnomalySubscriptionThresholdExpressionCostCategory = None,
  dimension: CeAnomalySubscriptionThresholdExpressionDimension = None,
  not: CeAnomalySubscriptionThresholdExpressionNot = None,
  or: typing.Union[IResolvable, typing.List[CeAnomalySubscriptionThresholdExpressionOr]] = None,
  tags: CeAnomalySubscriptionThresholdExpressionTags = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.and">and</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd">CeAnomalySubscriptionThresholdExpressionAnd</a>]]</code> | and block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.costCategory">cost_category</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory">CeAnomalySubscriptionThresholdExpressionCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension">CeAnomalySubscriptionThresholdExpressionDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.not">not</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot">CeAnomalySubscriptionThresholdExpressionNot</a></code> | not block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.or">or</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr">CeAnomalySubscriptionThresholdExpressionOr</a>]]</code> | or block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags">CeAnomalySubscriptionThresholdExpressionTags</a></code> | tags block. |

---

##### `and`<sup>Optional</sup> <a name="and" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.and"></a>

```python
and: typing.Union[IResolvable, typing.List[CeAnomalySubscriptionThresholdExpressionAnd]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd">CeAnomalySubscriptionThresholdExpressionAnd</a>]]

and block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#and CeAnomalySubscription#and}

---

##### `cost_category`<sup>Optional</sup> <a name="cost_category" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.costCategory"></a>

```python
cost_category: CeAnomalySubscriptionThresholdExpressionCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory">CeAnomalySubscriptionThresholdExpressionCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#cost_category CeAnomalySubscription#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.dimension"></a>

```python
dimension: CeAnomalySubscriptionThresholdExpressionDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension">CeAnomalySubscriptionThresholdExpressionDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#dimension CeAnomalySubscription#dimension}

---

##### `not`<sup>Optional</sup> <a name="not" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.not"></a>

```python
not: CeAnomalySubscriptionThresholdExpressionNot
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot">CeAnomalySubscriptionThresholdExpressionNot</a>

not block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#not CeAnomalySubscription#not}

---

##### `or`<sup>Optional</sup> <a name="or" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.or"></a>

```python
or: typing.Union[IResolvable, typing.List[CeAnomalySubscriptionThresholdExpressionOr]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr">CeAnomalySubscriptionThresholdExpressionOr</a>]]

or block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#or CeAnomalySubscription#or}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.tags"></a>

```python
tags: CeAnomalySubscriptionThresholdExpressionTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags">CeAnomalySubscriptionThresholdExpressionTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags CeAnomalySubscription#tags}

---

### CeAnomalySubscriptionThresholdExpressionAnd <a name="CeAnomalySubscriptionThresholdExpressionAnd" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd(
  cost_category: CeAnomalySubscriptionThresholdExpressionAndCostCategory = None,
  dimension: CeAnomalySubscriptionThresholdExpressionAndDimension = None,
  tags: CeAnomalySubscriptionThresholdExpressionAndTags = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd.property.costCategory">cost_category</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory">CeAnomalySubscriptionThresholdExpressionAndCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension">CeAnomalySubscriptionThresholdExpressionAndDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags">CeAnomalySubscriptionThresholdExpressionAndTags</a></code> | tags block. |

---

##### `cost_category`<sup>Optional</sup> <a name="cost_category" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd.property.costCategory"></a>

```python
cost_category: CeAnomalySubscriptionThresholdExpressionAndCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory">CeAnomalySubscriptionThresholdExpressionAndCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#cost_category CeAnomalySubscription#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd.property.dimension"></a>

```python
dimension: CeAnomalySubscriptionThresholdExpressionAndDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension">CeAnomalySubscriptionThresholdExpressionAndDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#dimension CeAnomalySubscription#dimension}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd.property.tags"></a>

```python
tags: CeAnomalySubscriptionThresholdExpressionAndTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags">CeAnomalySubscriptionThresholdExpressionAndTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags CeAnomalySubscription#tags}

---

### CeAnomalySubscriptionThresholdExpressionAndCostCategory <a name="CeAnomalySubscriptionThresholdExpressionAndCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionAndDimension <a name="CeAnomalySubscriptionThresholdExpressionAndDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionAndTags <a name="CeAnomalySubscriptionThresholdExpressionAndTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionCostCategory <a name="CeAnomalySubscriptionThresholdExpressionCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionDimension <a name="CeAnomalySubscriptionThresholdExpressionDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionNot <a name="CeAnomalySubscriptionThresholdExpressionNot" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot(
  cost_category: CeAnomalySubscriptionThresholdExpressionNotCostCategory = None,
  dimension: CeAnomalySubscriptionThresholdExpressionNotDimension = None,
  tags: CeAnomalySubscriptionThresholdExpressionNotTags = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot.property.costCategory">cost_category</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory">CeAnomalySubscriptionThresholdExpressionNotCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension">CeAnomalySubscriptionThresholdExpressionNotDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags">CeAnomalySubscriptionThresholdExpressionNotTags</a></code> | tags block. |

---

##### `cost_category`<sup>Optional</sup> <a name="cost_category" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot.property.costCategory"></a>

```python
cost_category: CeAnomalySubscriptionThresholdExpressionNotCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory">CeAnomalySubscriptionThresholdExpressionNotCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#cost_category CeAnomalySubscription#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot.property.dimension"></a>

```python
dimension: CeAnomalySubscriptionThresholdExpressionNotDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension">CeAnomalySubscriptionThresholdExpressionNotDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#dimension CeAnomalySubscription#dimension}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot.property.tags"></a>

```python
tags: CeAnomalySubscriptionThresholdExpressionNotTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags">CeAnomalySubscriptionThresholdExpressionNotTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags CeAnomalySubscription#tags}

---

### CeAnomalySubscriptionThresholdExpressionNotCostCategory <a name="CeAnomalySubscriptionThresholdExpressionNotCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionNotDimension <a name="CeAnomalySubscriptionThresholdExpressionNotDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionNotTags <a name="CeAnomalySubscriptionThresholdExpressionNotTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionOr <a name="CeAnomalySubscriptionThresholdExpressionOr" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr(
  cost_category: CeAnomalySubscriptionThresholdExpressionOrCostCategory = None,
  dimension: CeAnomalySubscriptionThresholdExpressionOrDimension = None,
  tags: CeAnomalySubscriptionThresholdExpressionOrTags = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr.property.costCategory">cost_category</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory">CeAnomalySubscriptionThresholdExpressionOrCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension">CeAnomalySubscriptionThresholdExpressionOrDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags">CeAnomalySubscriptionThresholdExpressionOrTags</a></code> | tags block. |

---

##### `cost_category`<sup>Optional</sup> <a name="cost_category" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr.property.costCategory"></a>

```python
cost_category: CeAnomalySubscriptionThresholdExpressionOrCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory">CeAnomalySubscriptionThresholdExpressionOrCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#cost_category CeAnomalySubscription#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr.property.dimension"></a>

```python
dimension: CeAnomalySubscriptionThresholdExpressionOrDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension">CeAnomalySubscriptionThresholdExpressionOrDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#dimension CeAnomalySubscription#dimension}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr.property.tags"></a>

```python
tags: CeAnomalySubscriptionThresholdExpressionOrTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags">CeAnomalySubscriptionThresholdExpressionOrTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags CeAnomalySubscription#tags}

---

### CeAnomalySubscriptionThresholdExpressionOrCostCategory <a name="CeAnomalySubscriptionThresholdExpressionOrCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionOrDimension <a name="CeAnomalySubscriptionThresholdExpressionOrDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionOrTags <a name="CeAnomalySubscriptionThresholdExpressionOrTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionTags <a name="CeAnomalySubscriptionThresholdExpressionTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### CeAnomalySubscriptionSubscriberList <a name="CeAnomalySubscriptionSubscriberList" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionSubscriberList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CeAnomalySubscriptionSubscriberOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber">CeAnomalySubscriptionSubscriber</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CeAnomalySubscriptionSubscriber]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber">CeAnomalySubscriptionSubscriber</a>]]

---


### CeAnomalySubscriptionSubscriberOutputReference <a name="CeAnomalySubscriptionSubscriberOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber">CeAnomalySubscriptionSubscriber</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CeAnomalySubscriptionSubscriber, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber">CeAnomalySubscriptionSubscriber</a>, cdktf.IResolvable]

---


### CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference <a name="CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory">CeAnomalySubscriptionThresholdExpressionAndCostCategory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.internalValue"></a>

```python
internal_value: CeAnomalySubscriptionThresholdExpressionAndCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory">CeAnomalySubscriptionThresholdExpressionAndCostCategory</a>

---


### CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference <a name="CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension">CeAnomalySubscriptionThresholdExpressionAndDimension</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.internalValue"></a>

```python
internal_value: CeAnomalySubscriptionThresholdExpressionAndDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension">CeAnomalySubscriptionThresholdExpressionAndDimension</a>

---


### CeAnomalySubscriptionThresholdExpressionAndList <a name="CeAnomalySubscriptionThresholdExpressionAndList" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CeAnomalySubscriptionThresholdExpressionAndOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd">CeAnomalySubscriptionThresholdExpressionAnd</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CeAnomalySubscriptionThresholdExpressionAnd]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd">CeAnomalySubscriptionThresholdExpressionAnd</a>]]

---


### CeAnomalySubscriptionThresholdExpressionAndOutputReference <a name="CeAnomalySubscriptionThresholdExpressionAndOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putCostCategory">put_cost_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putDimension">put_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resetCostCategory">reset_cost_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resetDimension">reset_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cost_category` <a name="put_cost_category" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putCostCategory"></a>

```python
def put_cost_category(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putCostCategory.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putCostCategory.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putCostCategory.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

##### `put_dimension` <a name="put_dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putDimension"></a>

```python
def put_dimension(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putDimension.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putDimension.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putDimension.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

##### `put_tags` <a name="put_tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putTags"></a>

```python
def put_tags(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putTags.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putTags.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putTags.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

##### `reset_cost_category` <a name="reset_cost_category" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resetCostCategory"></a>

```python
def reset_cost_category() -> None
```

##### `reset_dimension` <a name="reset_dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resetDimension"></a>

```python
def reset_dimension() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.costCategory">cost_category</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference">CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.costCategoryInput">cost_category_input</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory">CeAnomalySubscriptionThresholdExpressionAndCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.dimensionInput">dimension_input</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension">CeAnomalySubscriptionThresholdExpressionAndDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.tagsInput">tags_input</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags">CeAnomalySubscriptionThresholdExpressionAndTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd">CeAnomalySubscriptionThresholdExpressionAnd</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cost_category`<sup>Required</sup> <a name="cost_category" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.costCategory"></a>

```python
cost_category: CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.dimension"></a>

```python
dimension: CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.tags"></a>

```python
tags: CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference">CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference</a>

---

##### `cost_category_input`<sup>Optional</sup> <a name="cost_category_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.costCategoryInput"></a>

```python
cost_category_input: CeAnomalySubscriptionThresholdExpressionAndCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory">CeAnomalySubscriptionThresholdExpressionAndCostCategory</a>

---

##### `dimension_input`<sup>Optional</sup> <a name="dimension_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.dimensionInput"></a>

```python
dimension_input: CeAnomalySubscriptionThresholdExpressionAndDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension">CeAnomalySubscriptionThresholdExpressionAndDimension</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.tagsInput"></a>

```python
tags_input: CeAnomalySubscriptionThresholdExpressionAndTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags">CeAnomalySubscriptionThresholdExpressionAndTags</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CeAnomalySubscriptionThresholdExpressionAnd, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd">CeAnomalySubscriptionThresholdExpressionAnd</a>, cdktf.IResolvable]

---


### CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference <a name="CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags">CeAnomalySubscriptionThresholdExpressionAndTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.internalValue"></a>

```python
internal_value: CeAnomalySubscriptionThresholdExpressionAndTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags">CeAnomalySubscriptionThresholdExpressionAndTags</a>

---


### CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference <a name="CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory">CeAnomalySubscriptionThresholdExpressionCostCategory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.internalValue"></a>

```python
internal_value: CeAnomalySubscriptionThresholdExpressionCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory">CeAnomalySubscriptionThresholdExpressionCostCategory</a>

---


### CeAnomalySubscriptionThresholdExpressionDimensionOutputReference <a name="CeAnomalySubscriptionThresholdExpressionDimensionOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension">CeAnomalySubscriptionThresholdExpressionDimension</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.internalValue"></a>

```python
internal_value: CeAnomalySubscriptionThresholdExpressionDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension">CeAnomalySubscriptionThresholdExpressionDimension</a>

---


### CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference <a name="CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory">CeAnomalySubscriptionThresholdExpressionNotCostCategory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.internalValue"></a>

```python
internal_value: CeAnomalySubscriptionThresholdExpressionNotCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory">CeAnomalySubscriptionThresholdExpressionNotCostCategory</a>

---


### CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference <a name="CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension">CeAnomalySubscriptionThresholdExpressionNotDimension</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.internalValue"></a>

```python
internal_value: CeAnomalySubscriptionThresholdExpressionNotDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension">CeAnomalySubscriptionThresholdExpressionNotDimension</a>

---


### CeAnomalySubscriptionThresholdExpressionNotOutputReference <a name="CeAnomalySubscriptionThresholdExpressionNotOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putCostCategory">put_cost_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putDimension">put_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resetCostCategory">reset_cost_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resetDimension">reset_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cost_category` <a name="put_cost_category" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putCostCategory"></a>

```python
def put_cost_category(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putCostCategory.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putCostCategory.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putCostCategory.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

##### `put_dimension` <a name="put_dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putDimension"></a>

```python
def put_dimension(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putDimension.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putDimension.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putDimension.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

##### `put_tags` <a name="put_tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putTags"></a>

```python
def put_tags(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putTags.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putTags.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putTags.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

##### `reset_cost_category` <a name="reset_cost_category" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resetCostCategory"></a>

```python
def reset_cost_category() -> None
```

##### `reset_dimension` <a name="reset_dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resetDimension"></a>

```python
def reset_dimension() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.costCategory">cost_category</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference">CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.costCategoryInput">cost_category_input</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory">CeAnomalySubscriptionThresholdExpressionNotCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.dimensionInput">dimension_input</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension">CeAnomalySubscriptionThresholdExpressionNotDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.tagsInput">tags_input</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags">CeAnomalySubscriptionThresholdExpressionNotTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot">CeAnomalySubscriptionThresholdExpressionNot</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cost_category`<sup>Required</sup> <a name="cost_category" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.costCategory"></a>

```python
cost_category: CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.dimension"></a>

```python
dimension: CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.tags"></a>

```python
tags: CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference">CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference</a>

---

##### `cost_category_input`<sup>Optional</sup> <a name="cost_category_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.costCategoryInput"></a>

```python
cost_category_input: CeAnomalySubscriptionThresholdExpressionNotCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory">CeAnomalySubscriptionThresholdExpressionNotCostCategory</a>

---

##### `dimension_input`<sup>Optional</sup> <a name="dimension_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.dimensionInput"></a>

```python
dimension_input: CeAnomalySubscriptionThresholdExpressionNotDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension">CeAnomalySubscriptionThresholdExpressionNotDimension</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.tagsInput"></a>

```python
tags_input: CeAnomalySubscriptionThresholdExpressionNotTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags">CeAnomalySubscriptionThresholdExpressionNotTags</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.internalValue"></a>

```python
internal_value: CeAnomalySubscriptionThresholdExpressionNot
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot">CeAnomalySubscriptionThresholdExpressionNot</a>

---


### CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference <a name="CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags">CeAnomalySubscriptionThresholdExpressionNotTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.internalValue"></a>

```python
internal_value: CeAnomalySubscriptionThresholdExpressionNotTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags">CeAnomalySubscriptionThresholdExpressionNotTags</a>

---


### CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference <a name="CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory">CeAnomalySubscriptionThresholdExpressionOrCostCategory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.internalValue"></a>

```python
internal_value: CeAnomalySubscriptionThresholdExpressionOrCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory">CeAnomalySubscriptionThresholdExpressionOrCostCategory</a>

---


### CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference <a name="CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension">CeAnomalySubscriptionThresholdExpressionOrDimension</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.internalValue"></a>

```python
internal_value: CeAnomalySubscriptionThresholdExpressionOrDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension">CeAnomalySubscriptionThresholdExpressionOrDimension</a>

---


### CeAnomalySubscriptionThresholdExpressionOrList <a name="CeAnomalySubscriptionThresholdExpressionOrList" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CeAnomalySubscriptionThresholdExpressionOrOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr">CeAnomalySubscriptionThresholdExpressionOr</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CeAnomalySubscriptionThresholdExpressionOr]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr">CeAnomalySubscriptionThresholdExpressionOr</a>]]

---


### CeAnomalySubscriptionThresholdExpressionOrOutputReference <a name="CeAnomalySubscriptionThresholdExpressionOrOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putCostCategory">put_cost_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putDimension">put_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resetCostCategory">reset_cost_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resetDimension">reset_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cost_category` <a name="put_cost_category" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putCostCategory"></a>

```python
def put_cost_category(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putCostCategory.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putCostCategory.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putCostCategory.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

##### `put_dimension` <a name="put_dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putDimension"></a>

```python
def put_dimension(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putDimension.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putDimension.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putDimension.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

##### `put_tags` <a name="put_tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putTags"></a>

```python
def put_tags(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putTags.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putTags.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putTags.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

##### `reset_cost_category` <a name="reset_cost_category" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resetCostCategory"></a>

```python
def reset_cost_category() -> None
```

##### `reset_dimension` <a name="reset_dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resetDimension"></a>

```python
def reset_dimension() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.costCategory">cost_category</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference">CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.costCategoryInput">cost_category_input</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory">CeAnomalySubscriptionThresholdExpressionOrCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.dimensionInput">dimension_input</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension">CeAnomalySubscriptionThresholdExpressionOrDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.tagsInput">tags_input</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags">CeAnomalySubscriptionThresholdExpressionOrTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr">CeAnomalySubscriptionThresholdExpressionOr</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cost_category`<sup>Required</sup> <a name="cost_category" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.costCategory"></a>

```python
cost_category: CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.dimension"></a>

```python
dimension: CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.tags"></a>

```python
tags: CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference">CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference</a>

---

##### `cost_category_input`<sup>Optional</sup> <a name="cost_category_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.costCategoryInput"></a>

```python
cost_category_input: CeAnomalySubscriptionThresholdExpressionOrCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory">CeAnomalySubscriptionThresholdExpressionOrCostCategory</a>

---

##### `dimension_input`<sup>Optional</sup> <a name="dimension_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.dimensionInput"></a>

```python
dimension_input: CeAnomalySubscriptionThresholdExpressionOrDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension">CeAnomalySubscriptionThresholdExpressionOrDimension</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.tagsInput"></a>

```python
tags_input: CeAnomalySubscriptionThresholdExpressionOrTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags">CeAnomalySubscriptionThresholdExpressionOrTags</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CeAnomalySubscriptionThresholdExpressionOr, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr">CeAnomalySubscriptionThresholdExpressionOr</a>, cdktf.IResolvable]

---


### CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference <a name="CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags">CeAnomalySubscriptionThresholdExpressionOrTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.internalValue"></a>

```python
internal_value: CeAnomalySubscriptionThresholdExpressionOrTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags">CeAnomalySubscriptionThresholdExpressionOrTags</a>

---


### CeAnomalySubscriptionThresholdExpressionOutputReference <a name="CeAnomalySubscriptionThresholdExpressionOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putAnd">put_and</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putCostCategory">put_cost_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putDimension">put_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putNot">put_not</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putOr">put_or</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetAnd">reset_and</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetCostCategory">reset_cost_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetDimension">reset_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetNot">reset_not</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetOr">reset_or</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_and` <a name="put_and" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putAnd"></a>

```python
def put_and(
  value: typing.Union[IResolvable, typing.List[CeAnomalySubscriptionThresholdExpressionAnd]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putAnd.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd">CeAnomalySubscriptionThresholdExpressionAnd</a>]]

---

##### `put_cost_category` <a name="put_cost_category" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putCostCategory"></a>

```python
def put_cost_category(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putCostCategory.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putCostCategory.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putCostCategory.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

##### `put_dimension` <a name="put_dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putDimension"></a>

```python
def put_dimension(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putDimension.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putDimension.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putDimension.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

##### `put_not` <a name="put_not" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putNot"></a>

```python
def put_not(
  cost_category: CeAnomalySubscriptionThresholdExpressionNotCostCategory = None,
  dimension: CeAnomalySubscriptionThresholdExpressionNotDimension = None,
  tags: CeAnomalySubscriptionThresholdExpressionNotTags = None
) -> None
```

###### `cost_category`<sup>Optional</sup> <a name="cost_category" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putNot.parameter.costCategory"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory">CeAnomalySubscriptionThresholdExpressionNotCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#cost_category CeAnomalySubscription#cost_category}

---

###### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putNot.parameter.dimension"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension">CeAnomalySubscriptionThresholdExpressionNotDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#dimension CeAnomalySubscription#dimension}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putNot.parameter.tags"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags">CeAnomalySubscriptionThresholdExpressionNotTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags CeAnomalySubscription#tags}

---

##### `put_or` <a name="put_or" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putOr"></a>

```python
def put_or(
  value: typing.Union[IResolvable, typing.List[CeAnomalySubscriptionThresholdExpressionOr]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putOr.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr">CeAnomalySubscriptionThresholdExpressionOr</a>]]

---

##### `put_tags` <a name="put_tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putTags"></a>

```python
def put_tags(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putTags.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putTags.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putTags.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

##### `reset_and` <a name="reset_and" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetAnd"></a>

```python
def reset_and() -> None
```

##### `reset_cost_category` <a name="reset_cost_category" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetCostCategory"></a>

```python
def reset_cost_category() -> None
```

##### `reset_dimension` <a name="reset_dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetDimension"></a>

```python
def reset_dimension() -> None
```

##### `reset_not` <a name="reset_not" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetNot"></a>

```python
def reset_not() -> None
```

##### `reset_or` <a name="reset_or" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetOr"></a>

```python
def reset_or() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.and">and</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList">CeAnomalySubscriptionThresholdExpressionAndList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.costCategory">cost_category</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.not">not</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference">CeAnomalySubscriptionThresholdExpressionNotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.or">or</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList">CeAnomalySubscriptionThresholdExpressionOrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference">CeAnomalySubscriptionThresholdExpressionTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.andInput">and_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd">CeAnomalySubscriptionThresholdExpressionAnd</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.costCategoryInput">cost_category_input</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory">CeAnomalySubscriptionThresholdExpressionCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.dimensionInput">dimension_input</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension">CeAnomalySubscriptionThresholdExpressionDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.notInput">not_input</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot">CeAnomalySubscriptionThresholdExpressionNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.orInput">or_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr">CeAnomalySubscriptionThresholdExpressionOr</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.tagsInput">tags_input</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags">CeAnomalySubscriptionThresholdExpressionTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression">CeAnomalySubscriptionThresholdExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `and`<sup>Required</sup> <a name="and" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.and"></a>

```python
and: CeAnomalySubscriptionThresholdExpressionAndList
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList">CeAnomalySubscriptionThresholdExpressionAndList</a>

---

##### `cost_category`<sup>Required</sup> <a name="cost_category" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.costCategory"></a>

```python
cost_category: CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.dimension"></a>

```python
dimension: CeAnomalySubscriptionThresholdExpressionDimensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionDimensionOutputReference</a>

---

##### `not`<sup>Required</sup> <a name="not" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.not"></a>

```python
not: CeAnomalySubscriptionThresholdExpressionNotOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference">CeAnomalySubscriptionThresholdExpressionNotOutputReference</a>

---

##### `or`<sup>Required</sup> <a name="or" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.or"></a>

```python
or: CeAnomalySubscriptionThresholdExpressionOrList
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList">CeAnomalySubscriptionThresholdExpressionOrList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.tags"></a>

```python
tags: CeAnomalySubscriptionThresholdExpressionTagsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference">CeAnomalySubscriptionThresholdExpressionTagsOutputReference</a>

---

##### `and_input`<sup>Optional</sup> <a name="and_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.andInput"></a>

```python
and_input: typing.Union[IResolvable, typing.List[CeAnomalySubscriptionThresholdExpressionAnd]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd">CeAnomalySubscriptionThresholdExpressionAnd</a>]]

---

##### `cost_category_input`<sup>Optional</sup> <a name="cost_category_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.costCategoryInput"></a>

```python
cost_category_input: CeAnomalySubscriptionThresholdExpressionCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory">CeAnomalySubscriptionThresholdExpressionCostCategory</a>

---

##### `dimension_input`<sup>Optional</sup> <a name="dimension_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.dimensionInput"></a>

```python
dimension_input: CeAnomalySubscriptionThresholdExpressionDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension">CeAnomalySubscriptionThresholdExpressionDimension</a>

---

##### `not_input`<sup>Optional</sup> <a name="not_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.notInput"></a>

```python
not_input: CeAnomalySubscriptionThresholdExpressionNot
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot">CeAnomalySubscriptionThresholdExpressionNot</a>

---

##### `or_input`<sup>Optional</sup> <a name="or_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.orInput"></a>

```python
or_input: typing.Union[IResolvable, typing.List[CeAnomalySubscriptionThresholdExpressionOr]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr">CeAnomalySubscriptionThresholdExpressionOr</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.tagsInput"></a>

```python
tags_input: CeAnomalySubscriptionThresholdExpressionTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags">CeAnomalySubscriptionThresholdExpressionTags</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.internalValue"></a>

```python
internal_value: CeAnomalySubscriptionThresholdExpression
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression">CeAnomalySubscriptionThresholdExpression</a>

---


### CeAnomalySubscriptionThresholdExpressionTagsOutputReference <a name="CeAnomalySubscriptionThresholdExpressionTagsOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_anomaly_subscription

ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags">CeAnomalySubscriptionThresholdExpressionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.internalValue"></a>

```python
internal_value: CeAnomalySubscriptionThresholdExpressionTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags">CeAnomalySubscriptionThresholdExpressionTags</a>

---



