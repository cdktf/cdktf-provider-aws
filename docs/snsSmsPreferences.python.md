# `snsSmsPreferences` Submodule <a name="`snsSmsPreferences` Submodule" id="@cdktf/provider-aws.snsSmsPreferences"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnsSmsPreferences <a name="SnsSmsPreferences" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences aws_sns_sms_preferences}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sns_sms_preferences

snsSmsPreferences.SnsSmsPreferences(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_sender_id: str = None,
  default_sms_type: str = None,
  delivery_status_iam_role_arn: str = None,
  delivery_status_success_sampling_rate: str = None,
  id: str = None,
  monthly_spend_limit: typing.Union[int, float] = None,
  usage_report_s3_bucket: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.defaultSenderId">default_sender_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#default_sender_id SnsSmsPreferences#default_sender_id}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.defaultSmsType">default_sms_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#default_sms_type SnsSmsPreferences#default_sms_type}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.deliveryStatusIamRoleArn">delivery_status_iam_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#delivery_status_iam_role_arn SnsSmsPreferences#delivery_status_iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.deliveryStatusSuccessSamplingRate">delivery_status_success_sampling_rate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#delivery_status_success_sampling_rate SnsSmsPreferences#delivery_status_success_sampling_rate}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#id SnsSmsPreferences#id}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.monthlySpendLimit">monthly_spend_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#monthly_spend_limit SnsSmsPreferences#monthly_spend_limit}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.usageReportS3Bucket">usage_report_s3_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#usage_report_s3_bucket SnsSmsPreferences#usage_report_s3_bucket}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_sender_id`<sup>Optional</sup> <a name="default_sender_id" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.defaultSenderId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#default_sender_id SnsSmsPreferences#default_sender_id}.

---

##### `default_sms_type`<sup>Optional</sup> <a name="default_sms_type" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.defaultSmsType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#default_sms_type SnsSmsPreferences#default_sms_type}.

---

##### `delivery_status_iam_role_arn`<sup>Optional</sup> <a name="delivery_status_iam_role_arn" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.deliveryStatusIamRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#delivery_status_iam_role_arn SnsSmsPreferences#delivery_status_iam_role_arn}.

---

##### `delivery_status_success_sampling_rate`<sup>Optional</sup> <a name="delivery_status_success_sampling_rate" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.deliveryStatusSuccessSamplingRate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#delivery_status_success_sampling_rate SnsSmsPreferences#delivery_status_success_sampling_rate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#id SnsSmsPreferences#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monthly_spend_limit`<sup>Optional</sup> <a name="monthly_spend_limit" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.monthlySpendLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#monthly_spend_limit SnsSmsPreferences#monthly_spend_limit}.

---

##### `usage_report_s3_bucket`<sup>Optional</sup> <a name="usage_report_s3_bucket" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.usageReportS3Bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#usage_report_s3_bucket SnsSmsPreferences#usage_report_s3_bucket}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDefaultSenderId">reset_default_sender_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDefaultSmsType">reset_default_sms_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDeliveryStatusIamRoleArn">reset_delivery_status_iam_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDeliveryStatusSuccessSamplingRate">reset_delivery_status_success_sampling_rate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetMonthlySpendLimit">reset_monthly_spend_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetUsageReportS3Bucket">reset_usage_report_s3_bucket</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_default_sender_id` <a name="reset_default_sender_id" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDefaultSenderId"></a>

```python
def reset_default_sender_id() -> None
```

##### `reset_default_sms_type` <a name="reset_default_sms_type" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDefaultSmsType"></a>

```python
def reset_default_sms_type() -> None
```

##### `reset_delivery_status_iam_role_arn` <a name="reset_delivery_status_iam_role_arn" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDeliveryStatusIamRoleArn"></a>

```python
def reset_delivery_status_iam_role_arn() -> None
```

##### `reset_delivery_status_success_sampling_rate` <a name="reset_delivery_status_success_sampling_rate" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDeliveryStatusSuccessSamplingRate"></a>

```python
def reset_delivery_status_success_sampling_rate() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_monthly_spend_limit` <a name="reset_monthly_spend_limit" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetMonthlySpendLimit"></a>

```python
def reset_monthly_spend_limit() -> None
```

##### `reset_usage_report_s3_bucket` <a name="reset_usage_report_s3_bucket" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetUsageReportS3Bucket"></a>

```python
def reset_usage_report_s3_bucket() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import sns_sms_preferences

snsSmsPreferences.SnsSmsPreferences.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import sns_sms_preferences

snsSmsPreferences.SnsSmsPreferences.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import sns_sms_preferences

snsSmsPreferences.SnsSmsPreferences.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSenderIdInput">default_sender_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSmsTypeInput">default_sms_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusIamRoleArnInput">delivery_status_iam_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusSuccessSamplingRateInput">delivery_status_success_sampling_rate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.monthlySpendLimitInput">monthly_spend_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.usageReportS3BucketInput">usage_report_s3_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSenderId">default_sender_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSmsType">default_sms_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusIamRoleArn">delivery_status_iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusSuccessSamplingRate">delivery_status_success_sampling_rate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.monthlySpendLimit">monthly_spend_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.usageReportS3Bucket">usage_report_s3_bucket</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_sender_id_input`<sup>Optional</sup> <a name="default_sender_id_input" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSenderIdInput"></a>

```python
default_sender_id_input: str
```

- *Type:* str

---

##### `default_sms_type_input`<sup>Optional</sup> <a name="default_sms_type_input" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSmsTypeInput"></a>

```python
default_sms_type_input: str
```

- *Type:* str

---

##### `delivery_status_iam_role_arn_input`<sup>Optional</sup> <a name="delivery_status_iam_role_arn_input" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusIamRoleArnInput"></a>

```python
delivery_status_iam_role_arn_input: str
```

- *Type:* str

---

##### `delivery_status_success_sampling_rate_input`<sup>Optional</sup> <a name="delivery_status_success_sampling_rate_input" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusSuccessSamplingRateInput"></a>

```python
delivery_status_success_sampling_rate_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `monthly_spend_limit_input`<sup>Optional</sup> <a name="monthly_spend_limit_input" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.monthlySpendLimitInput"></a>

```python
monthly_spend_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `usage_report_s3_bucket_input`<sup>Optional</sup> <a name="usage_report_s3_bucket_input" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.usageReportS3BucketInput"></a>

```python
usage_report_s3_bucket_input: str
```

- *Type:* str

---

##### `default_sender_id`<sup>Required</sup> <a name="default_sender_id" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSenderId"></a>

```python
default_sender_id: str
```

- *Type:* str

---

##### `default_sms_type`<sup>Required</sup> <a name="default_sms_type" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSmsType"></a>

```python
default_sms_type: str
```

- *Type:* str

---

##### `delivery_status_iam_role_arn`<sup>Required</sup> <a name="delivery_status_iam_role_arn" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusIamRoleArn"></a>

```python
delivery_status_iam_role_arn: str
```

- *Type:* str

---

##### `delivery_status_success_sampling_rate`<sup>Required</sup> <a name="delivery_status_success_sampling_rate" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusSuccessSamplingRate"></a>

```python
delivery_status_success_sampling_rate: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `monthly_spend_limit`<sup>Required</sup> <a name="monthly_spend_limit" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.monthlySpendLimit"></a>

```python
monthly_spend_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `usage_report_s3_bucket`<sup>Required</sup> <a name="usage_report_s3_bucket" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.usageReportS3Bucket"></a>

```python
usage_report_s3_bucket: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SnsSmsPreferencesConfig <a name="SnsSmsPreferencesConfig" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sns_sms_preferences

snsSmsPreferences.SnsSmsPreferencesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_sender_id: str = None,
  default_sms_type: str = None,
  delivery_status_iam_role_arn: str = None,
  delivery_status_success_sampling_rate: str = None,
  id: str = None,
  monthly_spend_limit: typing.Union[int, float] = None,
  usage_report_s3_bucket: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.defaultSenderId">default_sender_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#default_sender_id SnsSmsPreferences#default_sender_id}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.defaultSmsType">default_sms_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#default_sms_type SnsSmsPreferences#default_sms_type}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.deliveryStatusIamRoleArn">delivery_status_iam_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#delivery_status_iam_role_arn SnsSmsPreferences#delivery_status_iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.deliveryStatusSuccessSamplingRate">delivery_status_success_sampling_rate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#delivery_status_success_sampling_rate SnsSmsPreferences#delivery_status_success_sampling_rate}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#id SnsSmsPreferences#id}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.monthlySpendLimit">monthly_spend_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#monthly_spend_limit SnsSmsPreferences#monthly_spend_limit}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.usageReportS3Bucket">usage_report_s3_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#usage_report_s3_bucket SnsSmsPreferences#usage_report_s3_bucket}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_sender_id`<sup>Optional</sup> <a name="default_sender_id" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.defaultSenderId"></a>

```python
default_sender_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#default_sender_id SnsSmsPreferences#default_sender_id}.

---

##### `default_sms_type`<sup>Optional</sup> <a name="default_sms_type" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.defaultSmsType"></a>

```python
default_sms_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#default_sms_type SnsSmsPreferences#default_sms_type}.

---

##### `delivery_status_iam_role_arn`<sup>Optional</sup> <a name="delivery_status_iam_role_arn" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.deliveryStatusIamRoleArn"></a>

```python
delivery_status_iam_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#delivery_status_iam_role_arn SnsSmsPreferences#delivery_status_iam_role_arn}.

---

##### `delivery_status_success_sampling_rate`<sup>Optional</sup> <a name="delivery_status_success_sampling_rate" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.deliveryStatusSuccessSamplingRate"></a>

```python
delivery_status_success_sampling_rate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#delivery_status_success_sampling_rate SnsSmsPreferences#delivery_status_success_sampling_rate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#id SnsSmsPreferences#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monthly_spend_limit`<sup>Optional</sup> <a name="monthly_spend_limit" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.monthlySpendLimit"></a>

```python
monthly_spend_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#monthly_spend_limit SnsSmsPreferences#monthly_spend_limit}.

---

##### `usage_report_s3_bucket`<sup>Optional</sup> <a name="usage_report_s3_bucket" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.usageReportS3Bucket"></a>

```python
usage_report_s3_bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#usage_report_s3_bucket SnsSmsPreferences#usage_report_s3_bucket}.

---



