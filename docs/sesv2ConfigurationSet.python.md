# `sesv2ConfigurationSet` Submodule <a name="`sesv2ConfigurationSet` Submodule" id="@cdktf/provider-aws.sesv2ConfigurationSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2ConfigurationSet <a name="Sesv2ConfigurationSet" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set aws_sesv2_configuration_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set

sesv2ConfigurationSet.Sesv2ConfigurationSet(
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
  delivery_options: Sesv2ConfigurationSetDeliveryOptions = None,
  id: str = None,
  reputation_options: Sesv2ConfigurationSetReputationOptions = None,
  sending_options: Sesv2ConfigurationSetSendingOptions = None,
  suppression_options: Sesv2ConfigurationSetSuppressionOptions = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  tracking_options: Sesv2ConfigurationSetTrackingOptions = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.configurationSetName">configuration_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#configuration_set_name Sesv2ConfigurationSet#configuration_set_name}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.deliveryOptions">delivery_options</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions">Sesv2ConfigurationSetDeliveryOptions</a></code> | delivery_options block. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#id Sesv2ConfigurationSet#id}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.reputationOptions">reputation_options</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions">Sesv2ConfigurationSetReputationOptions</a></code> | reputation_options block. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.sendingOptions">sending_options</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions">Sesv2ConfigurationSetSendingOptions</a></code> | sending_options block. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.suppressionOptions">suppression_options</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions">Sesv2ConfigurationSetSuppressionOptions</a></code> | suppression_options block. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#tags Sesv2ConfigurationSet#tags}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#tags_all Sesv2ConfigurationSet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.trackingOptions">tracking_options</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions">Sesv2ConfigurationSetTrackingOptions</a></code> | tracking_options block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `configuration_set_name`<sup>Required</sup> <a name="configuration_set_name" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.configurationSetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#configuration_set_name Sesv2ConfigurationSet#configuration_set_name}.

---

##### `delivery_options`<sup>Optional</sup> <a name="delivery_options" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.deliveryOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions">Sesv2ConfigurationSetDeliveryOptions</a>

delivery_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#delivery_options Sesv2ConfigurationSet#delivery_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#id Sesv2ConfigurationSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reputation_options`<sup>Optional</sup> <a name="reputation_options" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.reputationOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions">Sesv2ConfigurationSetReputationOptions</a>

reputation_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#reputation_options Sesv2ConfigurationSet#reputation_options}

---

##### `sending_options`<sup>Optional</sup> <a name="sending_options" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.sendingOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions">Sesv2ConfigurationSetSendingOptions</a>

sending_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#sending_options Sesv2ConfigurationSet#sending_options}

---

##### `suppression_options`<sup>Optional</sup> <a name="suppression_options" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.suppressionOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions">Sesv2ConfigurationSetSuppressionOptions</a>

suppression_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#suppression_options Sesv2ConfigurationSet#suppression_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#tags Sesv2ConfigurationSet#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#tags_all Sesv2ConfigurationSet#tags_all}.

---

##### `tracking_options`<sup>Optional</sup> <a name="tracking_options" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.trackingOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions">Sesv2ConfigurationSetTrackingOptions</a>

tracking_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#tracking_options Sesv2ConfigurationSet#tracking_options}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putDeliveryOptions">put_delivery_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putReputationOptions">put_reputation_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putSendingOptions">put_sending_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putSuppressionOptions">put_suppression_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putTrackingOptions">put_tracking_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetDeliveryOptions">reset_delivery_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetReputationOptions">reset_reputation_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetSendingOptions">reset_sending_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetSuppressionOptions">reset_suppression_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetTrackingOptions">reset_tracking_options</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_delivery_options` <a name="put_delivery_options" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putDeliveryOptions"></a>

```python
def put_delivery_options(
  sending_pool_name: str = None,
  tls_policy: str = None
) -> None
```

###### `sending_pool_name`<sup>Optional</sup> <a name="sending_pool_name" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putDeliveryOptions.parameter.sendingPoolName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#sending_pool_name Sesv2ConfigurationSet#sending_pool_name}.

---

###### `tls_policy`<sup>Optional</sup> <a name="tls_policy" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putDeliveryOptions.parameter.tlsPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#tls_policy Sesv2ConfigurationSet#tls_policy}.

---

##### `put_reputation_options` <a name="put_reputation_options" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putReputationOptions"></a>

```python
def put_reputation_options(
  reputation_metrics_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `reputation_metrics_enabled`<sup>Optional</sup> <a name="reputation_metrics_enabled" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putReputationOptions.parameter.reputationMetricsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#reputation_metrics_enabled Sesv2ConfigurationSet#reputation_metrics_enabled}.

---

##### `put_sending_options` <a name="put_sending_options" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putSendingOptions"></a>

```python
def put_sending_options(
  sending_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `sending_enabled`<sup>Optional</sup> <a name="sending_enabled" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putSendingOptions.parameter.sendingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#sending_enabled Sesv2ConfigurationSet#sending_enabled}.

---

##### `put_suppression_options` <a name="put_suppression_options" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putSuppressionOptions"></a>

```python
def put_suppression_options(
  suppressed_reasons: typing.List[str] = None
) -> None
```

###### `suppressed_reasons`<sup>Optional</sup> <a name="suppressed_reasons" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putSuppressionOptions.parameter.suppressedReasons"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#suppressed_reasons Sesv2ConfigurationSet#suppressed_reasons}.

---

##### `put_tracking_options` <a name="put_tracking_options" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putTrackingOptions"></a>

```python
def put_tracking_options(
  custom_redirect_domain: str
) -> None
```

###### `custom_redirect_domain`<sup>Required</sup> <a name="custom_redirect_domain" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putTrackingOptions.parameter.customRedirectDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#custom_redirect_domain Sesv2ConfigurationSet#custom_redirect_domain}.

---

##### `reset_delivery_options` <a name="reset_delivery_options" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetDeliveryOptions"></a>

```python
def reset_delivery_options() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_reputation_options` <a name="reset_reputation_options" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetReputationOptions"></a>

```python
def reset_reputation_options() -> None
```

##### `reset_sending_options` <a name="reset_sending_options" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetSendingOptions"></a>

```python
def reset_sending_options() -> None
```

##### `reset_suppression_options` <a name="reset_suppression_options" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetSuppressionOptions"></a>

```python
def reset_suppression_options() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_tracking_options` <a name="reset_tracking_options" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetTrackingOptions"></a>

```python
def reset_tracking_options() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set

sesv2ConfigurationSet.Sesv2ConfigurationSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set

sesv2ConfigurationSet.Sesv2ConfigurationSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set

sesv2ConfigurationSet.Sesv2ConfigurationSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.deliveryOptions">delivery_options</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference">Sesv2ConfigurationSetDeliveryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.reputationOptions">reputation_options</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference">Sesv2ConfigurationSetReputationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.sendingOptions">sending_options</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference">Sesv2ConfigurationSetSendingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.suppressionOptions">suppression_options</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference">Sesv2ConfigurationSetSuppressionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.trackingOptions">tracking_options</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference">Sesv2ConfigurationSetTrackingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.configurationSetNameInput">configuration_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.deliveryOptionsInput">delivery_options_input</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions">Sesv2ConfigurationSetDeliveryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.reputationOptionsInput">reputation_options_input</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions">Sesv2ConfigurationSetReputationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.sendingOptionsInput">sending_options_input</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions">Sesv2ConfigurationSetSendingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.suppressionOptionsInput">suppression_options_input</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions">Sesv2ConfigurationSetSuppressionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.trackingOptionsInput">tracking_options_input</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions">Sesv2ConfigurationSetTrackingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.configurationSetName">configuration_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `delivery_options`<sup>Required</sup> <a name="delivery_options" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.deliveryOptions"></a>

```python
delivery_options: Sesv2ConfigurationSetDeliveryOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference">Sesv2ConfigurationSetDeliveryOptionsOutputReference</a>

---

##### `reputation_options`<sup>Required</sup> <a name="reputation_options" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.reputationOptions"></a>

```python
reputation_options: Sesv2ConfigurationSetReputationOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference">Sesv2ConfigurationSetReputationOptionsOutputReference</a>

---

##### `sending_options`<sup>Required</sup> <a name="sending_options" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.sendingOptions"></a>

```python
sending_options: Sesv2ConfigurationSetSendingOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference">Sesv2ConfigurationSetSendingOptionsOutputReference</a>

---

##### `suppression_options`<sup>Required</sup> <a name="suppression_options" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.suppressionOptions"></a>

```python
suppression_options: Sesv2ConfigurationSetSuppressionOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference">Sesv2ConfigurationSetSuppressionOptionsOutputReference</a>

---

##### `tracking_options`<sup>Required</sup> <a name="tracking_options" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.trackingOptions"></a>

```python
tracking_options: Sesv2ConfigurationSetTrackingOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference">Sesv2ConfigurationSetTrackingOptionsOutputReference</a>

---

##### `configuration_set_name_input`<sup>Optional</sup> <a name="configuration_set_name_input" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.configurationSetNameInput"></a>

```python
configuration_set_name_input: str
```

- *Type:* str

---

##### `delivery_options_input`<sup>Optional</sup> <a name="delivery_options_input" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.deliveryOptionsInput"></a>

```python
delivery_options_input: Sesv2ConfigurationSetDeliveryOptions
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions">Sesv2ConfigurationSetDeliveryOptions</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `reputation_options_input`<sup>Optional</sup> <a name="reputation_options_input" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.reputationOptionsInput"></a>

```python
reputation_options_input: Sesv2ConfigurationSetReputationOptions
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions">Sesv2ConfigurationSetReputationOptions</a>

---

##### `sending_options_input`<sup>Optional</sup> <a name="sending_options_input" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.sendingOptionsInput"></a>

```python
sending_options_input: Sesv2ConfigurationSetSendingOptions
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions">Sesv2ConfigurationSetSendingOptions</a>

---

##### `suppression_options_input`<sup>Optional</sup> <a name="suppression_options_input" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.suppressionOptionsInput"></a>

```python
suppression_options_input: Sesv2ConfigurationSetSuppressionOptions
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions">Sesv2ConfigurationSetSuppressionOptions</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tracking_options_input`<sup>Optional</sup> <a name="tracking_options_input" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.trackingOptionsInput"></a>

```python
tracking_options_input: Sesv2ConfigurationSetTrackingOptions
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions">Sesv2ConfigurationSetTrackingOptions</a>

---

##### `configuration_set_name`<sup>Required</sup> <a name="configuration_set_name" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.configurationSetName"></a>

```python
configuration_set_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2ConfigurationSetConfig <a name="Sesv2ConfigurationSetConfig" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set

sesv2ConfigurationSet.Sesv2ConfigurationSetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  configuration_set_name: str,
  delivery_options: Sesv2ConfigurationSetDeliveryOptions = None,
  id: str = None,
  reputation_options: Sesv2ConfigurationSetReputationOptions = None,
  sending_options: Sesv2ConfigurationSetSendingOptions = None,
  suppression_options: Sesv2ConfigurationSetSuppressionOptions = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  tracking_options: Sesv2ConfigurationSetTrackingOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.configurationSetName">configuration_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#configuration_set_name Sesv2ConfigurationSet#configuration_set_name}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.deliveryOptions">delivery_options</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions">Sesv2ConfigurationSetDeliveryOptions</a></code> | delivery_options block. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#id Sesv2ConfigurationSet#id}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.reputationOptions">reputation_options</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions">Sesv2ConfigurationSetReputationOptions</a></code> | reputation_options block. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.sendingOptions">sending_options</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions">Sesv2ConfigurationSetSendingOptions</a></code> | sending_options block. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.suppressionOptions">suppression_options</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions">Sesv2ConfigurationSetSuppressionOptions</a></code> | suppression_options block. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#tags Sesv2ConfigurationSet#tags}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#tags_all Sesv2ConfigurationSet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.trackingOptions">tracking_options</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions">Sesv2ConfigurationSetTrackingOptions</a></code> | tracking_options block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `configuration_set_name`<sup>Required</sup> <a name="configuration_set_name" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.configurationSetName"></a>

```python
configuration_set_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#configuration_set_name Sesv2ConfigurationSet#configuration_set_name}.

---

##### `delivery_options`<sup>Optional</sup> <a name="delivery_options" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.deliveryOptions"></a>

```python
delivery_options: Sesv2ConfigurationSetDeliveryOptions
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions">Sesv2ConfigurationSetDeliveryOptions</a>

delivery_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#delivery_options Sesv2ConfigurationSet#delivery_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#id Sesv2ConfigurationSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reputation_options`<sup>Optional</sup> <a name="reputation_options" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.reputationOptions"></a>

```python
reputation_options: Sesv2ConfigurationSetReputationOptions
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions">Sesv2ConfigurationSetReputationOptions</a>

reputation_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#reputation_options Sesv2ConfigurationSet#reputation_options}

---

##### `sending_options`<sup>Optional</sup> <a name="sending_options" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.sendingOptions"></a>

```python
sending_options: Sesv2ConfigurationSetSendingOptions
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions">Sesv2ConfigurationSetSendingOptions</a>

sending_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#sending_options Sesv2ConfigurationSet#sending_options}

---

##### `suppression_options`<sup>Optional</sup> <a name="suppression_options" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.suppressionOptions"></a>

```python
suppression_options: Sesv2ConfigurationSetSuppressionOptions
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions">Sesv2ConfigurationSetSuppressionOptions</a>

suppression_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#suppression_options Sesv2ConfigurationSet#suppression_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#tags Sesv2ConfigurationSet#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#tags_all Sesv2ConfigurationSet#tags_all}.

---

##### `tracking_options`<sup>Optional</sup> <a name="tracking_options" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.trackingOptions"></a>

```python
tracking_options: Sesv2ConfigurationSetTrackingOptions
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions">Sesv2ConfigurationSetTrackingOptions</a>

tracking_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#tracking_options Sesv2ConfigurationSet#tracking_options}

---

### Sesv2ConfigurationSetDeliveryOptions <a name="Sesv2ConfigurationSetDeliveryOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set

sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions(
  sending_pool_name: str = None,
  tls_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions.property.sendingPoolName">sending_pool_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#sending_pool_name Sesv2ConfigurationSet#sending_pool_name}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions.property.tlsPolicy">tls_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#tls_policy Sesv2ConfigurationSet#tls_policy}. |

---

##### `sending_pool_name`<sup>Optional</sup> <a name="sending_pool_name" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions.property.sendingPoolName"></a>

```python
sending_pool_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#sending_pool_name Sesv2ConfigurationSet#sending_pool_name}.

---

##### `tls_policy`<sup>Optional</sup> <a name="tls_policy" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions.property.tlsPolicy"></a>

```python
tls_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#tls_policy Sesv2ConfigurationSet#tls_policy}.

---

### Sesv2ConfigurationSetReputationOptions <a name="Sesv2ConfigurationSetReputationOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set

sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions(
  reputation_metrics_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions.property.reputationMetricsEnabled">reputation_metrics_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#reputation_metrics_enabled Sesv2ConfigurationSet#reputation_metrics_enabled}. |

---

##### `reputation_metrics_enabled`<sup>Optional</sup> <a name="reputation_metrics_enabled" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions.property.reputationMetricsEnabled"></a>

```python
reputation_metrics_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#reputation_metrics_enabled Sesv2ConfigurationSet#reputation_metrics_enabled}.

---

### Sesv2ConfigurationSetSendingOptions <a name="Sesv2ConfigurationSetSendingOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set

sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions(
  sending_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions.property.sendingEnabled">sending_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#sending_enabled Sesv2ConfigurationSet#sending_enabled}. |

---

##### `sending_enabled`<sup>Optional</sup> <a name="sending_enabled" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions.property.sendingEnabled"></a>

```python
sending_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#sending_enabled Sesv2ConfigurationSet#sending_enabled}.

---

### Sesv2ConfigurationSetSuppressionOptions <a name="Sesv2ConfigurationSetSuppressionOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set

sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions(
  suppressed_reasons: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions.property.suppressedReasons">suppressed_reasons</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#suppressed_reasons Sesv2ConfigurationSet#suppressed_reasons}. |

---

##### `suppressed_reasons`<sup>Optional</sup> <a name="suppressed_reasons" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions.property.suppressedReasons"></a>

```python
suppressed_reasons: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#suppressed_reasons Sesv2ConfigurationSet#suppressed_reasons}.

---

### Sesv2ConfigurationSetTrackingOptions <a name="Sesv2ConfigurationSetTrackingOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set

sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions(
  custom_redirect_domain: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions.property.customRedirectDomain">custom_redirect_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#custom_redirect_domain Sesv2ConfigurationSet#custom_redirect_domain}. |

---

##### `custom_redirect_domain`<sup>Required</sup> <a name="custom_redirect_domain" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions.property.customRedirectDomain"></a>

```python
custom_redirect_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#custom_redirect_domain Sesv2ConfigurationSet#custom_redirect_domain}.

---

## Classes <a name="Classes" id="Classes"></a>

### Sesv2ConfigurationSetDeliveryOptionsOutputReference <a name="Sesv2ConfigurationSetDeliveryOptionsOutputReference" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set

sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.resetSendingPoolName">reset_sending_pool_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.resetTlsPolicy">reset_tls_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_sending_pool_name` <a name="reset_sending_pool_name" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.resetSendingPoolName"></a>

```python
def reset_sending_pool_name() -> None
```

##### `reset_tls_policy` <a name="reset_tls_policy" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.resetTlsPolicy"></a>

```python
def reset_tls_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolNameInput">sending_pool_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicyInput">tls_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolName">sending_pool_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicy">tls_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions">Sesv2ConfigurationSetDeliveryOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sending_pool_name_input`<sup>Optional</sup> <a name="sending_pool_name_input" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolNameInput"></a>

```python
sending_pool_name_input: str
```

- *Type:* str

---

##### `tls_policy_input`<sup>Optional</sup> <a name="tls_policy_input" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicyInput"></a>

```python
tls_policy_input: str
```

- *Type:* str

---

##### `sending_pool_name`<sup>Required</sup> <a name="sending_pool_name" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolName"></a>

```python
sending_pool_name: str
```

- *Type:* str

---

##### `tls_policy`<sup>Required</sup> <a name="tls_policy" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicy"></a>

```python
tls_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.internalValue"></a>

```python
internal_value: Sesv2ConfigurationSetDeliveryOptions
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions">Sesv2ConfigurationSetDeliveryOptions</a>

---


### Sesv2ConfigurationSetReputationOptionsOutputReference <a name="Sesv2ConfigurationSetReputationOptionsOutputReference" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set

sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.resetReputationMetricsEnabled">reset_reputation_metrics_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_reputation_metrics_enabled` <a name="reset_reputation_metrics_enabled" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.resetReputationMetricsEnabled"></a>

```python
def reset_reputation_metrics_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.lastFreshStart">last_fresh_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabledInput">reputation_metrics_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabled">reputation_metrics_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions">Sesv2ConfigurationSetReputationOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_fresh_start`<sup>Required</sup> <a name="last_fresh_start" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.lastFreshStart"></a>

```python
last_fresh_start: str
```

- *Type:* str

---

##### `reputation_metrics_enabled_input`<sup>Optional</sup> <a name="reputation_metrics_enabled_input" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabledInput"></a>

```python
reputation_metrics_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reputation_metrics_enabled`<sup>Required</sup> <a name="reputation_metrics_enabled" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabled"></a>

```python
reputation_metrics_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.internalValue"></a>

```python
internal_value: Sesv2ConfigurationSetReputationOptions
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions">Sesv2ConfigurationSetReputationOptions</a>

---


### Sesv2ConfigurationSetSendingOptionsOutputReference <a name="Sesv2ConfigurationSetSendingOptionsOutputReference" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set

sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.resetSendingEnabled">reset_sending_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_sending_enabled` <a name="reset_sending_enabled" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.resetSendingEnabled"></a>

```python
def reset_sending_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.property.sendingEnabledInput">sending_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.property.sendingEnabled">sending_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions">Sesv2ConfigurationSetSendingOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sending_enabled_input`<sup>Optional</sup> <a name="sending_enabled_input" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.property.sendingEnabledInput"></a>

```python
sending_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sending_enabled`<sup>Required</sup> <a name="sending_enabled" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.property.sendingEnabled"></a>

```python
sending_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.property.internalValue"></a>

```python
internal_value: Sesv2ConfigurationSetSendingOptions
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions">Sesv2ConfigurationSetSendingOptions</a>

---


### Sesv2ConfigurationSetSuppressionOptionsOutputReference <a name="Sesv2ConfigurationSetSuppressionOptionsOutputReference" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set

sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.resetSuppressedReasons">reset_suppressed_reasons</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_suppressed_reasons` <a name="reset_suppressed_reasons" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.resetSuppressedReasons"></a>

```python
def reset_suppressed_reasons() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasonsInput">suppressed_reasons_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasons">suppressed_reasons</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions">Sesv2ConfigurationSetSuppressionOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `suppressed_reasons_input`<sup>Optional</sup> <a name="suppressed_reasons_input" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasonsInput"></a>

```python
suppressed_reasons_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `suppressed_reasons`<sup>Required</sup> <a name="suppressed_reasons" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasons"></a>

```python
suppressed_reasons: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.property.internalValue"></a>

```python
internal_value: Sesv2ConfigurationSetSuppressionOptions
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions">Sesv2ConfigurationSetSuppressionOptions</a>

---


### Sesv2ConfigurationSetTrackingOptionsOutputReference <a name="Sesv2ConfigurationSetTrackingOptionsOutputReference" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set

sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomainInput">custom_redirect_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomain">custom_redirect_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions">Sesv2ConfigurationSetTrackingOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_redirect_domain_input`<sup>Optional</sup> <a name="custom_redirect_domain_input" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomainInput"></a>

```python
custom_redirect_domain_input: str
```

- *Type:* str

---

##### `custom_redirect_domain`<sup>Required</sup> <a name="custom_redirect_domain" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomain"></a>

```python
custom_redirect_domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.internalValue"></a>

```python
internal_value: Sesv2ConfigurationSetTrackingOptions
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions">Sesv2ConfigurationSetTrackingOptions</a>

---



