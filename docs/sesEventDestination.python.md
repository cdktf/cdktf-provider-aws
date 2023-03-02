# `sesEventDestination` Submodule <a name="`sesEventDestination` Submodule" id="@cdktf/provider-aws.sesEventDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesEventDestination <a name="SesEventDestination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination aws_ses_event_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_event_destination

sesEventDestination.SesEventDestination(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  configuration_set_name: str,
  matching_types: typing.List[str],
  name: str,
  cloudwatch_destination: typing.Union[IResolvable, typing.List[SesEventDestinationCloudwatchDestination]] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  kinesis_destination: SesEventDestinationKinesisDestination = None,
  sns_destination: SesEventDestinationSnsDestination = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.configurationSetName">configuration_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#configuration_set_name SesEventDestination#configuration_set_name}. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.matchingTypes">matching_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#matching_types SesEventDestination#matching_types}. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#name SesEventDestination#name}. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.cloudwatchDestination">cloudwatch_destination</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination">SesEventDestinationCloudwatchDestination</a>]]</code> | cloudwatch_destination block. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#enabled SesEventDestination#enabled}. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#id SesEventDestination#id}. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.kinesisDestination">kinesis_destination</a></code> | <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination">SesEventDestinationKinesisDestination</a></code> | kinesis_destination block. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.snsDestination">sns_destination</a></code> | <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestination">SesEventDestinationSnsDestination</a></code> | sns_destination block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `configuration_set_name`<sup>Required</sup> <a name="configuration_set_name" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.configurationSetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#configuration_set_name SesEventDestination#configuration_set_name}.

---

##### `matching_types`<sup>Required</sup> <a name="matching_types" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.matchingTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#matching_types SesEventDestination#matching_types}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#name SesEventDestination#name}.

---

##### `cloudwatch_destination`<sup>Optional</sup> <a name="cloudwatch_destination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.cloudwatchDestination"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination">SesEventDestinationCloudwatchDestination</a>]]

cloudwatch_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#cloudwatch_destination SesEventDestination#cloudwatch_destination}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#enabled SesEventDestination#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#id SesEventDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kinesis_destination`<sup>Optional</sup> <a name="kinesis_destination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.kinesisDestination"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination">SesEventDestinationKinesisDestination</a>

kinesis_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#kinesis_destination SesEventDestination#kinesis_destination}

---

##### `sns_destination`<sup>Optional</sup> <a name="sns_destination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.snsDestination"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestination">SesEventDestinationSnsDestination</a>

sns_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#sns_destination SesEventDestination#sns_destination}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.putCloudwatchDestination">put_cloudwatch_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.putKinesisDestination">put_kinesis_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.putSnsDestination">put_sns_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.resetCloudwatchDestination">reset_cloudwatch_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.resetKinesisDestination">reset_kinesis_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.resetSnsDestination">reset_sns_destination</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_cloudwatch_destination` <a name="put_cloudwatch_destination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.putCloudwatchDestination"></a>

```python
def put_cloudwatch_destination(
  value: typing.Union[IResolvable, typing.List[SesEventDestinationCloudwatchDestination]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.putCloudwatchDestination.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination">SesEventDestinationCloudwatchDestination</a>]]

---

##### `put_kinesis_destination` <a name="put_kinesis_destination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.putKinesisDestination"></a>

```python
def put_kinesis_destination(
  role_arn: str,
  stream_arn: str
) -> None
```

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.putKinesisDestination.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#role_arn SesEventDestination#role_arn}.

---

###### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.putKinesisDestination.parameter.streamArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#stream_arn SesEventDestination#stream_arn}.

---

##### `put_sns_destination` <a name="put_sns_destination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.putSnsDestination"></a>

```python
def put_sns_destination(
  topic_arn: str
) -> None
```

###### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.putSnsDestination.parameter.topicArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#topic_arn SesEventDestination#topic_arn}.

---

##### `reset_cloudwatch_destination` <a name="reset_cloudwatch_destination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.resetCloudwatchDestination"></a>

```python
def reset_cloudwatch_destination() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kinesis_destination` <a name="reset_kinesis_destination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.resetKinesisDestination"></a>

```python
def reset_kinesis_destination() -> None
```

##### `reset_sns_destination` <a name="reset_sns_destination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.resetSnsDestination"></a>

```python
def reset_sns_destination() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ses_event_destination

sesEventDestination.SesEventDestination.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ses_event_destination

sesEventDestination.SesEventDestination.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ses_event_destination

sesEventDestination.SesEventDestination.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.cloudwatchDestination">cloudwatch_destination</a></code> | <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList">SesEventDestinationCloudwatchDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.kinesisDestination">kinesis_destination</a></code> | <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference">SesEventDestinationKinesisDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.snsDestination">sns_destination</a></code> | <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference">SesEventDestinationSnsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.cloudwatchDestinationInput">cloudwatch_destination_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination">SesEventDestinationCloudwatchDestination</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.configurationSetNameInput">configuration_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.kinesisDestinationInput">kinesis_destination_input</a></code> | <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination">SesEventDestinationKinesisDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.matchingTypesInput">matching_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.snsDestinationInput">sns_destination_input</a></code> | <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestination">SesEventDestinationSnsDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.configurationSetName">configuration_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.matchingTypes">matching_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cloudwatch_destination`<sup>Required</sup> <a name="cloudwatch_destination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.cloudwatchDestination"></a>

```python
cloudwatch_destination: SesEventDestinationCloudwatchDestinationList
```

- *Type:* <a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList">SesEventDestinationCloudwatchDestinationList</a>

---

##### `kinesis_destination`<sup>Required</sup> <a name="kinesis_destination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.kinesisDestination"></a>

```python
kinesis_destination: SesEventDestinationKinesisDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference">SesEventDestinationKinesisDestinationOutputReference</a>

---

##### `sns_destination`<sup>Required</sup> <a name="sns_destination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.snsDestination"></a>

```python
sns_destination: SesEventDestinationSnsDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference">SesEventDestinationSnsDestinationOutputReference</a>

---

##### `cloudwatch_destination_input`<sup>Optional</sup> <a name="cloudwatch_destination_input" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.cloudwatchDestinationInput"></a>

```python
cloudwatch_destination_input: typing.Union[IResolvable, typing.List[SesEventDestinationCloudwatchDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination">SesEventDestinationCloudwatchDestination</a>]]

---

##### `configuration_set_name_input`<sup>Optional</sup> <a name="configuration_set_name_input" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.configurationSetNameInput"></a>

```python
configuration_set_name_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kinesis_destination_input`<sup>Optional</sup> <a name="kinesis_destination_input" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.kinesisDestinationInput"></a>

```python
kinesis_destination_input: SesEventDestinationKinesisDestination
```

- *Type:* <a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination">SesEventDestinationKinesisDestination</a>

---

##### `matching_types_input`<sup>Optional</sup> <a name="matching_types_input" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.matchingTypesInput"></a>

```python
matching_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `sns_destination_input`<sup>Optional</sup> <a name="sns_destination_input" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.snsDestinationInput"></a>

```python
sns_destination_input: SesEventDestinationSnsDestination
```

- *Type:* <a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestination">SesEventDestinationSnsDestination</a>

---

##### `configuration_set_name`<sup>Required</sup> <a name="configuration_set_name" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.configurationSetName"></a>

```python
configuration_set_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `matching_types`<sup>Required</sup> <a name="matching_types" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.matchingTypes"></a>

```python
matching_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SesEventDestinationCloudwatchDestination <a name="SesEventDestinationCloudwatchDestination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_event_destination

sesEventDestination.SesEventDestinationCloudwatchDestination(
  default_value: str,
  dimension_name: str,
  value_source: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination.property.defaultValue">default_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#default_value SesEventDestination#default_value}. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination.property.dimensionName">dimension_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#dimension_name SesEventDestination#dimension_name}. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination.property.valueSource">value_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#value_source SesEventDestination#value_source}. |

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#default_value SesEventDestination#default_value}.

---

##### `dimension_name`<sup>Required</sup> <a name="dimension_name" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination.property.dimensionName"></a>

```python
dimension_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#dimension_name SesEventDestination#dimension_name}.

---

##### `value_source`<sup>Required</sup> <a name="value_source" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination.property.valueSource"></a>

```python
value_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#value_source SesEventDestination#value_source}.

---

### SesEventDestinationConfig <a name="SesEventDestinationConfig" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_event_destination

sesEventDestination.SesEventDestinationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  configuration_set_name: str,
  matching_types: typing.List[str],
  name: str,
  cloudwatch_destination: typing.Union[IResolvable, typing.List[SesEventDestinationCloudwatchDestination]] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  kinesis_destination: SesEventDestinationKinesisDestination = None,
  sns_destination: SesEventDestinationSnsDestination = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.configurationSetName">configuration_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#configuration_set_name SesEventDestination#configuration_set_name}. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.matchingTypes">matching_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#matching_types SesEventDestination#matching_types}. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#name SesEventDestination#name}. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.cloudwatchDestination">cloudwatch_destination</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination">SesEventDestinationCloudwatchDestination</a>]]</code> | cloudwatch_destination block. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#enabled SesEventDestination#enabled}. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#id SesEventDestination#id}. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.kinesisDestination">kinesis_destination</a></code> | <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination">SesEventDestinationKinesisDestination</a></code> | kinesis_destination block. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.snsDestination">sns_destination</a></code> | <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestination">SesEventDestinationSnsDestination</a></code> | sns_destination block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `configuration_set_name`<sup>Required</sup> <a name="configuration_set_name" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.configurationSetName"></a>

```python
configuration_set_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#configuration_set_name SesEventDestination#configuration_set_name}.

---

##### `matching_types`<sup>Required</sup> <a name="matching_types" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.matchingTypes"></a>

```python
matching_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#matching_types SesEventDestination#matching_types}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#name SesEventDestination#name}.

---

##### `cloudwatch_destination`<sup>Optional</sup> <a name="cloudwatch_destination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.cloudwatchDestination"></a>

```python
cloudwatch_destination: typing.Union[IResolvable, typing.List[SesEventDestinationCloudwatchDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination">SesEventDestinationCloudwatchDestination</a>]]

cloudwatch_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#cloudwatch_destination SesEventDestination#cloudwatch_destination}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#enabled SesEventDestination#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#id SesEventDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kinesis_destination`<sup>Optional</sup> <a name="kinesis_destination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.kinesisDestination"></a>

```python
kinesis_destination: SesEventDestinationKinesisDestination
```

- *Type:* <a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination">SesEventDestinationKinesisDestination</a>

kinesis_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#kinesis_destination SesEventDestination#kinesis_destination}

---

##### `sns_destination`<sup>Optional</sup> <a name="sns_destination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.snsDestination"></a>

```python
sns_destination: SesEventDestinationSnsDestination
```

- *Type:* <a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestination">SesEventDestinationSnsDestination</a>

sns_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#sns_destination SesEventDestination#sns_destination}

---

### SesEventDestinationKinesisDestination <a name="SesEventDestinationKinesisDestination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_event_destination

sesEventDestination.SesEventDestinationKinesisDestination(
  role_arn: str,
  stream_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#role_arn SesEventDestination#role_arn}. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination.property.streamArn">stream_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#stream_arn SesEventDestination#stream_arn}. |

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#role_arn SesEventDestination#role_arn}.

---

##### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#stream_arn SesEventDestination#stream_arn}.

---

### SesEventDestinationSnsDestination <a name="SesEventDestinationSnsDestination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_event_destination

sesEventDestination.SesEventDestinationSnsDestination(
  topic_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestination.property.topicArn">topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#topic_arn SesEventDestination#topic_arn}. |

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestination.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#topic_arn SesEventDestination#topic_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### SesEventDestinationCloudwatchDestinationList <a name="SesEventDestinationCloudwatchDestinationList" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_event_destination

sesEventDestination.SesEventDestinationCloudwatchDestinationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SesEventDestinationCloudwatchDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination">SesEventDestinationCloudwatchDestination</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SesEventDestinationCloudwatchDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination">SesEventDestinationCloudwatchDestination</a>]]

---


### SesEventDestinationCloudwatchDestinationOutputReference <a name="SesEventDestinationCloudwatchDestinationOutputReference" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_event_destination

sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.defaultValueInput">default_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.dimensionNameInput">dimension_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.valueSourceInput">value_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.dimensionName">dimension_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.valueSource">value_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination">SesEventDestinationCloudwatchDestination</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.defaultValueInput"></a>

```python
default_value_input: str
```

- *Type:* str

---

##### `dimension_name_input`<sup>Optional</sup> <a name="dimension_name_input" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.dimensionNameInput"></a>

```python
dimension_name_input: str
```

- *Type:* str

---

##### `value_source_input`<sup>Optional</sup> <a name="value_source_input" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.valueSourceInput"></a>

```python
value_source_input: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `dimension_name`<sup>Required</sup> <a name="dimension_name" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.dimensionName"></a>

```python
dimension_name: str
```

- *Type:* str

---

##### `value_source`<sup>Required</sup> <a name="value_source" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.valueSource"></a>

```python
value_source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SesEventDestinationCloudwatchDestination, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination">SesEventDestinationCloudwatchDestination</a>, cdktf.IResolvable]

---


### SesEventDestinationKinesisDestinationOutputReference <a name="SesEventDestinationKinesisDestinationOutputReference" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_event_destination

sesEventDestination.SesEventDestinationKinesisDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.streamArnInput">stream_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.streamArn">stream_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination">SesEventDestinationKinesisDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `stream_arn_input`<sup>Optional</sup> <a name="stream_arn_input" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.streamArnInput"></a>

```python
stream_arn_input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.internalValue"></a>

```python
internal_value: SesEventDestinationKinesisDestination
```

- *Type:* <a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination">SesEventDestinationKinesisDestination</a>

---


### SesEventDestinationSnsDestinationOutputReference <a name="SesEventDestinationSnsDestinationOutputReference" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_event_destination

sesEventDestination.SesEventDestinationSnsDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.topicArnInput">topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.topicArn">topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestination">SesEventDestinationSnsDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `topic_arn_input`<sup>Optional</sup> <a name="topic_arn_input" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.topicArnInput"></a>

```python
topic_arn_input: str
```

- *Type:* str

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.internalValue"></a>

```python
internal_value: SesEventDestinationSnsDestination
```

- *Type:* <a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestination">SesEventDestinationSnsDestination</a>

---



