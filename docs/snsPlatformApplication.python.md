# `snsPlatformApplication` Submodule <a name="`snsPlatformApplication` Submodule" id="@cdktf/provider-aws.snsPlatformApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnsPlatformApplication <a name="SnsPlatformApplication" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application aws_sns_platform_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sns_platform_application

snsPlatformApplication.SnsPlatformApplication(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  platform: str,
  platform_credential: str,
  apple_platform_bundle_id: str = None,
  apple_platform_team_id: str = None,
  event_delivery_failure_topic_arn: str = None,
  event_endpoint_created_topic_arn: str = None,
  event_endpoint_deleted_topic_arn: str = None,
  event_endpoint_updated_topic_arn: str = None,
  failure_feedback_role_arn: str = None,
  id: str = None,
  platform_principal: str = None,
  success_feedback_role_arn: str = None,
  success_feedback_sample_rate: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#name SnsPlatformApplication#name}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.platform">platform</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform SnsPlatformApplication#platform}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.platformCredential">platform_credential</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform_credential SnsPlatformApplication#platform_credential}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.applePlatformBundleId">apple_platform_bundle_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#apple_platform_bundle_id SnsPlatformApplication#apple_platform_bundle_id}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.applePlatformTeamId">apple_platform_team_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#apple_platform_team_id SnsPlatformApplication#apple_platform_team_id}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.eventDeliveryFailureTopicArn">event_delivery_failure_topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_delivery_failure_topic_arn SnsPlatformApplication#event_delivery_failure_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.eventEndpointCreatedTopicArn">event_endpoint_created_topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_created_topic_arn SnsPlatformApplication#event_endpoint_created_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.eventEndpointDeletedTopicArn">event_endpoint_deleted_topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_deleted_topic_arn SnsPlatformApplication#event_endpoint_deleted_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.eventEndpointUpdatedTopicArn">event_endpoint_updated_topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_updated_topic_arn SnsPlatformApplication#event_endpoint_updated_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.failureFeedbackRoleArn">failure_feedback_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#failure_feedback_role_arn SnsPlatformApplication#failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#id SnsPlatformApplication#id}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.platformPrincipal">platform_principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform_principal SnsPlatformApplication#platform_principal}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.successFeedbackRoleArn">success_feedback_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#success_feedback_role_arn SnsPlatformApplication#success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.successFeedbackSampleRate">success_feedback_sample_rate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#success_feedback_sample_rate SnsPlatformApplication#success_feedback_sample_rate}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#name SnsPlatformApplication#name}.

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.platform"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform SnsPlatformApplication#platform}.

---

##### `platform_credential`<sup>Required</sup> <a name="platform_credential" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.platformCredential"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform_credential SnsPlatformApplication#platform_credential}.

---

##### `apple_platform_bundle_id`<sup>Optional</sup> <a name="apple_platform_bundle_id" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.applePlatformBundleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#apple_platform_bundle_id SnsPlatformApplication#apple_platform_bundle_id}.

---

##### `apple_platform_team_id`<sup>Optional</sup> <a name="apple_platform_team_id" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.applePlatformTeamId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#apple_platform_team_id SnsPlatformApplication#apple_platform_team_id}.

---

##### `event_delivery_failure_topic_arn`<sup>Optional</sup> <a name="event_delivery_failure_topic_arn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.eventDeliveryFailureTopicArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_delivery_failure_topic_arn SnsPlatformApplication#event_delivery_failure_topic_arn}.

---

##### `event_endpoint_created_topic_arn`<sup>Optional</sup> <a name="event_endpoint_created_topic_arn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.eventEndpointCreatedTopicArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_created_topic_arn SnsPlatformApplication#event_endpoint_created_topic_arn}.

---

##### `event_endpoint_deleted_topic_arn`<sup>Optional</sup> <a name="event_endpoint_deleted_topic_arn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.eventEndpointDeletedTopicArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_deleted_topic_arn SnsPlatformApplication#event_endpoint_deleted_topic_arn}.

---

##### `event_endpoint_updated_topic_arn`<sup>Optional</sup> <a name="event_endpoint_updated_topic_arn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.eventEndpointUpdatedTopicArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_updated_topic_arn SnsPlatformApplication#event_endpoint_updated_topic_arn}.

---

##### `failure_feedback_role_arn`<sup>Optional</sup> <a name="failure_feedback_role_arn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.failureFeedbackRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#failure_feedback_role_arn SnsPlatformApplication#failure_feedback_role_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#id SnsPlatformApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `platform_principal`<sup>Optional</sup> <a name="platform_principal" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.platformPrincipal"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform_principal SnsPlatformApplication#platform_principal}.

---

##### `success_feedback_role_arn`<sup>Optional</sup> <a name="success_feedback_role_arn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.successFeedbackRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#success_feedback_role_arn SnsPlatformApplication#success_feedback_role_arn}.

---

##### `success_feedback_sample_rate`<sup>Optional</sup> <a name="success_feedback_sample_rate" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.successFeedbackSampleRate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#success_feedback_sample_rate SnsPlatformApplication#success_feedback_sample_rate}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetApplePlatformBundleId">reset_apple_platform_bundle_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetApplePlatformTeamId">reset_apple_platform_team_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventDeliveryFailureTopicArn">reset_event_delivery_failure_topic_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventEndpointCreatedTopicArn">reset_event_endpoint_created_topic_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventEndpointDeletedTopicArn">reset_event_endpoint_deleted_topic_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventEndpointUpdatedTopicArn">reset_event_endpoint_updated_topic_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetFailureFeedbackRoleArn">reset_failure_feedback_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetPlatformPrincipal">reset_platform_principal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetSuccessFeedbackRoleArn">reset_success_feedback_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetSuccessFeedbackSampleRate">reset_success_feedback_sample_rate</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_apple_platform_bundle_id` <a name="reset_apple_platform_bundle_id" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetApplePlatformBundleId"></a>

```python
def reset_apple_platform_bundle_id() -> None
```

##### `reset_apple_platform_team_id` <a name="reset_apple_platform_team_id" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetApplePlatformTeamId"></a>

```python
def reset_apple_platform_team_id() -> None
```

##### `reset_event_delivery_failure_topic_arn` <a name="reset_event_delivery_failure_topic_arn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventDeliveryFailureTopicArn"></a>

```python
def reset_event_delivery_failure_topic_arn() -> None
```

##### `reset_event_endpoint_created_topic_arn` <a name="reset_event_endpoint_created_topic_arn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventEndpointCreatedTopicArn"></a>

```python
def reset_event_endpoint_created_topic_arn() -> None
```

##### `reset_event_endpoint_deleted_topic_arn` <a name="reset_event_endpoint_deleted_topic_arn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventEndpointDeletedTopicArn"></a>

```python
def reset_event_endpoint_deleted_topic_arn() -> None
```

##### `reset_event_endpoint_updated_topic_arn` <a name="reset_event_endpoint_updated_topic_arn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventEndpointUpdatedTopicArn"></a>

```python
def reset_event_endpoint_updated_topic_arn() -> None
```

##### `reset_failure_feedback_role_arn` <a name="reset_failure_feedback_role_arn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetFailureFeedbackRoleArn"></a>

```python
def reset_failure_feedback_role_arn() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_platform_principal` <a name="reset_platform_principal" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetPlatformPrincipal"></a>

```python
def reset_platform_principal() -> None
```

##### `reset_success_feedback_role_arn` <a name="reset_success_feedback_role_arn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetSuccessFeedbackRoleArn"></a>

```python
def reset_success_feedback_role_arn() -> None
```

##### `reset_success_feedback_sample_rate` <a name="reset_success_feedback_sample_rate" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetSuccessFeedbackSampleRate"></a>

```python
def reset_success_feedback_sample_rate() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import sns_platform_application

snsPlatformApplication.SnsPlatformApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import sns_platform_application

snsPlatformApplication.SnsPlatformApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import sns_platform_application

snsPlatformApplication.SnsPlatformApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformBundleIdInput">apple_platform_bundle_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformTeamIdInput">apple_platform_team_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventDeliveryFailureTopicArnInput">event_delivery_failure_topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointCreatedTopicArnInput">event_endpoint_created_topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointDeletedTopicArnInput">event_endpoint_deleted_topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointUpdatedTopicArnInput">event_endpoint_updated_topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.failureFeedbackRoleArnInput">failure_feedback_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformCredentialInput">platform_credential_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformInput">platform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformPrincipalInput">platform_principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackRoleArnInput">success_feedback_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackSampleRateInput">success_feedback_sample_rate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformBundleId">apple_platform_bundle_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformTeamId">apple_platform_team_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventDeliveryFailureTopicArn">event_delivery_failure_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointCreatedTopicArn">event_endpoint_created_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointDeletedTopicArn">event_endpoint_deleted_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointUpdatedTopicArn">event_endpoint_updated_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.failureFeedbackRoleArn">failure_feedback_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformCredential">platform_credential</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformPrincipal">platform_principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackRoleArn">success_feedback_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackSampleRate">success_feedback_sample_rate</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `apple_platform_bundle_id_input`<sup>Optional</sup> <a name="apple_platform_bundle_id_input" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformBundleIdInput"></a>

```python
apple_platform_bundle_id_input: str
```

- *Type:* str

---

##### `apple_platform_team_id_input`<sup>Optional</sup> <a name="apple_platform_team_id_input" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformTeamIdInput"></a>

```python
apple_platform_team_id_input: str
```

- *Type:* str

---

##### `event_delivery_failure_topic_arn_input`<sup>Optional</sup> <a name="event_delivery_failure_topic_arn_input" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventDeliveryFailureTopicArnInput"></a>

```python
event_delivery_failure_topic_arn_input: str
```

- *Type:* str

---

##### `event_endpoint_created_topic_arn_input`<sup>Optional</sup> <a name="event_endpoint_created_topic_arn_input" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointCreatedTopicArnInput"></a>

```python
event_endpoint_created_topic_arn_input: str
```

- *Type:* str

---

##### `event_endpoint_deleted_topic_arn_input`<sup>Optional</sup> <a name="event_endpoint_deleted_topic_arn_input" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointDeletedTopicArnInput"></a>

```python
event_endpoint_deleted_topic_arn_input: str
```

- *Type:* str

---

##### `event_endpoint_updated_topic_arn_input`<sup>Optional</sup> <a name="event_endpoint_updated_topic_arn_input" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointUpdatedTopicArnInput"></a>

```python
event_endpoint_updated_topic_arn_input: str
```

- *Type:* str

---

##### `failure_feedback_role_arn_input`<sup>Optional</sup> <a name="failure_feedback_role_arn_input" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.failureFeedbackRoleArnInput"></a>

```python
failure_feedback_role_arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `platform_credential_input`<sup>Optional</sup> <a name="platform_credential_input" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformCredentialInput"></a>

```python
platform_credential_input: str
```

- *Type:* str

---

##### `platform_input`<sup>Optional</sup> <a name="platform_input" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformInput"></a>

```python
platform_input: str
```

- *Type:* str

---

##### `platform_principal_input`<sup>Optional</sup> <a name="platform_principal_input" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformPrincipalInput"></a>

```python
platform_principal_input: str
```

- *Type:* str

---

##### `success_feedback_role_arn_input`<sup>Optional</sup> <a name="success_feedback_role_arn_input" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackRoleArnInput"></a>

```python
success_feedback_role_arn_input: str
```

- *Type:* str

---

##### `success_feedback_sample_rate_input`<sup>Optional</sup> <a name="success_feedback_sample_rate_input" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackSampleRateInput"></a>

```python
success_feedback_sample_rate_input: str
```

- *Type:* str

---

##### `apple_platform_bundle_id`<sup>Required</sup> <a name="apple_platform_bundle_id" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformBundleId"></a>

```python
apple_platform_bundle_id: str
```

- *Type:* str

---

##### `apple_platform_team_id`<sup>Required</sup> <a name="apple_platform_team_id" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformTeamId"></a>

```python
apple_platform_team_id: str
```

- *Type:* str

---

##### `event_delivery_failure_topic_arn`<sup>Required</sup> <a name="event_delivery_failure_topic_arn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventDeliveryFailureTopicArn"></a>

```python
event_delivery_failure_topic_arn: str
```

- *Type:* str

---

##### `event_endpoint_created_topic_arn`<sup>Required</sup> <a name="event_endpoint_created_topic_arn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointCreatedTopicArn"></a>

```python
event_endpoint_created_topic_arn: str
```

- *Type:* str

---

##### `event_endpoint_deleted_topic_arn`<sup>Required</sup> <a name="event_endpoint_deleted_topic_arn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointDeletedTopicArn"></a>

```python
event_endpoint_deleted_topic_arn: str
```

- *Type:* str

---

##### `event_endpoint_updated_topic_arn`<sup>Required</sup> <a name="event_endpoint_updated_topic_arn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointUpdatedTopicArn"></a>

```python
event_endpoint_updated_topic_arn: str
```

- *Type:* str

---

##### `failure_feedback_role_arn`<sup>Required</sup> <a name="failure_feedback_role_arn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.failureFeedbackRoleArn"></a>

```python
failure_feedback_role_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `platform_credential`<sup>Required</sup> <a name="platform_credential" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformCredential"></a>

```python
platform_credential: str
```

- *Type:* str

---

##### `platform_principal`<sup>Required</sup> <a name="platform_principal" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformPrincipal"></a>

```python
platform_principal: str
```

- *Type:* str

---

##### `success_feedback_role_arn`<sup>Required</sup> <a name="success_feedback_role_arn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackRoleArn"></a>

```python
success_feedback_role_arn: str
```

- *Type:* str

---

##### `success_feedback_sample_rate`<sup>Required</sup> <a name="success_feedback_sample_rate" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackSampleRate"></a>

```python
success_feedback_sample_rate: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SnsPlatformApplicationConfig <a name="SnsPlatformApplicationConfig" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sns_platform_application

snsPlatformApplication.SnsPlatformApplicationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  platform: str,
  platform_credential: str,
  apple_platform_bundle_id: str = None,
  apple_platform_team_id: str = None,
  event_delivery_failure_topic_arn: str = None,
  event_endpoint_created_topic_arn: str = None,
  event_endpoint_deleted_topic_arn: str = None,
  event_endpoint_updated_topic_arn: str = None,
  failure_feedback_role_arn: str = None,
  id: str = None,
  platform_principal: str = None,
  success_feedback_role_arn: str = None,
  success_feedback_sample_rate: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#name SnsPlatformApplication#name}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.platform">platform</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform SnsPlatformApplication#platform}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.platformCredential">platform_credential</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform_credential SnsPlatformApplication#platform_credential}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.applePlatformBundleId">apple_platform_bundle_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#apple_platform_bundle_id SnsPlatformApplication#apple_platform_bundle_id}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.applePlatformTeamId">apple_platform_team_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#apple_platform_team_id SnsPlatformApplication#apple_platform_team_id}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventDeliveryFailureTopicArn">event_delivery_failure_topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_delivery_failure_topic_arn SnsPlatformApplication#event_delivery_failure_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventEndpointCreatedTopicArn">event_endpoint_created_topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_created_topic_arn SnsPlatformApplication#event_endpoint_created_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventEndpointDeletedTopicArn">event_endpoint_deleted_topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_deleted_topic_arn SnsPlatformApplication#event_endpoint_deleted_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventEndpointUpdatedTopicArn">event_endpoint_updated_topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_updated_topic_arn SnsPlatformApplication#event_endpoint_updated_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.failureFeedbackRoleArn">failure_feedback_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#failure_feedback_role_arn SnsPlatformApplication#failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#id SnsPlatformApplication#id}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.platformPrincipal">platform_principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform_principal SnsPlatformApplication#platform_principal}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.successFeedbackRoleArn">success_feedback_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#success_feedback_role_arn SnsPlatformApplication#success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.successFeedbackSampleRate">success_feedback_sample_rate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#success_feedback_sample_rate SnsPlatformApplication#success_feedback_sample_rate}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#name SnsPlatformApplication#name}.

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.platform"></a>

```python
platform: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform SnsPlatformApplication#platform}.

---

##### `platform_credential`<sup>Required</sup> <a name="platform_credential" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.platformCredential"></a>

```python
platform_credential: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform_credential SnsPlatformApplication#platform_credential}.

---

##### `apple_platform_bundle_id`<sup>Optional</sup> <a name="apple_platform_bundle_id" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.applePlatformBundleId"></a>

```python
apple_platform_bundle_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#apple_platform_bundle_id SnsPlatformApplication#apple_platform_bundle_id}.

---

##### `apple_platform_team_id`<sup>Optional</sup> <a name="apple_platform_team_id" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.applePlatformTeamId"></a>

```python
apple_platform_team_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#apple_platform_team_id SnsPlatformApplication#apple_platform_team_id}.

---

##### `event_delivery_failure_topic_arn`<sup>Optional</sup> <a name="event_delivery_failure_topic_arn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventDeliveryFailureTopicArn"></a>

```python
event_delivery_failure_topic_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_delivery_failure_topic_arn SnsPlatformApplication#event_delivery_failure_topic_arn}.

---

##### `event_endpoint_created_topic_arn`<sup>Optional</sup> <a name="event_endpoint_created_topic_arn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventEndpointCreatedTopicArn"></a>

```python
event_endpoint_created_topic_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_created_topic_arn SnsPlatformApplication#event_endpoint_created_topic_arn}.

---

##### `event_endpoint_deleted_topic_arn`<sup>Optional</sup> <a name="event_endpoint_deleted_topic_arn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventEndpointDeletedTopicArn"></a>

```python
event_endpoint_deleted_topic_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_deleted_topic_arn SnsPlatformApplication#event_endpoint_deleted_topic_arn}.

---

##### `event_endpoint_updated_topic_arn`<sup>Optional</sup> <a name="event_endpoint_updated_topic_arn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventEndpointUpdatedTopicArn"></a>

```python
event_endpoint_updated_topic_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_updated_topic_arn SnsPlatformApplication#event_endpoint_updated_topic_arn}.

---

##### `failure_feedback_role_arn`<sup>Optional</sup> <a name="failure_feedback_role_arn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.failureFeedbackRoleArn"></a>

```python
failure_feedback_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#failure_feedback_role_arn SnsPlatformApplication#failure_feedback_role_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#id SnsPlatformApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `platform_principal`<sup>Optional</sup> <a name="platform_principal" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.platformPrincipal"></a>

```python
platform_principal: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform_principal SnsPlatformApplication#platform_principal}.

---

##### `success_feedback_role_arn`<sup>Optional</sup> <a name="success_feedback_role_arn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.successFeedbackRoleArn"></a>

```python
success_feedback_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#success_feedback_role_arn SnsPlatformApplication#success_feedback_role_arn}.

---

##### `success_feedback_sample_rate`<sup>Optional</sup> <a name="success_feedback_sample_rate" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.successFeedbackSampleRate"></a>

```python
success_feedback_sample_rate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#success_feedback_sample_rate SnsPlatformApplication#success_feedback_sample_rate}.

---



