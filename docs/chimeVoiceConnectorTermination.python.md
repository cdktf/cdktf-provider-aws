# `chimeVoiceConnectorTermination` Submodule <a name="`chimeVoiceConnectorTermination` Submodule" id="@cdktf/provider-aws.chimeVoiceConnectorTermination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeVoiceConnectorTermination <a name="ChimeVoiceConnectorTermination" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination aws_chime_voice_connector_termination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chime_voice_connector_termination

chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  calling_regions: typing.List[str],
  cidr_allow_list: typing.List[str],
  voice_connector_id: str,
  cps_limit: typing.Union[int, float] = None,
  default_phone_number: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.callingRegions">calling_regions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#calling_regions ChimeVoiceConnectorTermination#calling_regions}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.cidrAllowList">cidr_allow_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#cidr_allow_list ChimeVoiceConnectorTermination#cidr_allow_list}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.voiceConnectorId">voice_connector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#voice_connector_id ChimeVoiceConnectorTermination#voice_connector_id}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.cpsLimit">cps_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#cps_limit ChimeVoiceConnectorTermination#cps_limit}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.defaultPhoneNumber">default_phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#default_phone_number ChimeVoiceConnectorTermination#default_phone_number}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#disabled ChimeVoiceConnectorTermination#disabled}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#id ChimeVoiceConnectorTermination#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `calling_regions`<sup>Required</sup> <a name="calling_regions" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.callingRegions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#calling_regions ChimeVoiceConnectorTermination#calling_regions}.

---

##### `cidr_allow_list`<sup>Required</sup> <a name="cidr_allow_list" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.cidrAllowList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#cidr_allow_list ChimeVoiceConnectorTermination#cidr_allow_list}.

---

##### `voice_connector_id`<sup>Required</sup> <a name="voice_connector_id" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.voiceConnectorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#voice_connector_id ChimeVoiceConnectorTermination#voice_connector_id}.

---

##### `cps_limit`<sup>Optional</sup> <a name="cps_limit" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.cpsLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#cps_limit ChimeVoiceConnectorTermination#cps_limit}.

---

##### `default_phone_number`<sup>Optional</sup> <a name="default_phone_number" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.defaultPhoneNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#default_phone_number ChimeVoiceConnectorTermination#default_phone_number}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#disabled ChimeVoiceConnectorTermination#disabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#id ChimeVoiceConnectorTermination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetCpsLimit">reset_cps_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetDefaultPhoneNumber">reset_default_phone_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_cps_limit` <a name="reset_cps_limit" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetCpsLimit"></a>

```python
def reset_cps_limit() -> None
```

##### `reset_default_phone_number` <a name="reset_default_phone_number" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetDefaultPhoneNumber"></a>

```python
def reset_default_phone_number() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import chime_voice_connector_termination

chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import chime_voice_connector_termination

chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import chime_voice_connector_termination

chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.callingRegionsInput">calling_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cidrAllowListInput">cidr_allow_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cpsLimitInput">cps_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.defaultPhoneNumberInput">default_phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.voiceConnectorIdInput">voice_connector_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.callingRegions">calling_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cidrAllowList">cidr_allow_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cpsLimit">cps_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.defaultPhoneNumber">default_phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.voiceConnectorId">voice_connector_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `calling_regions_input`<sup>Optional</sup> <a name="calling_regions_input" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.callingRegionsInput"></a>

```python
calling_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cidr_allow_list_input`<sup>Optional</sup> <a name="cidr_allow_list_input" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cidrAllowListInput"></a>

```python
cidr_allow_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cps_limit_input`<sup>Optional</sup> <a name="cps_limit_input" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cpsLimitInput"></a>

```python
cps_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_phone_number_input`<sup>Optional</sup> <a name="default_phone_number_input" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.defaultPhoneNumberInput"></a>

```python
default_phone_number_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `voice_connector_id_input`<sup>Optional</sup> <a name="voice_connector_id_input" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.voiceConnectorIdInput"></a>

```python
voice_connector_id_input: str
```

- *Type:* str

---

##### `calling_regions`<sup>Required</sup> <a name="calling_regions" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.callingRegions"></a>

```python
calling_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cidr_allow_list`<sup>Required</sup> <a name="cidr_allow_list" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cidrAllowList"></a>

```python
cidr_allow_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cps_limit`<sup>Required</sup> <a name="cps_limit" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cpsLimit"></a>

```python
cps_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_phone_number`<sup>Required</sup> <a name="default_phone_number" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.defaultPhoneNumber"></a>

```python
default_phone_number: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `voice_connector_id`<sup>Required</sup> <a name="voice_connector_id" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.voiceConnectorId"></a>

```python
voice_connector_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeVoiceConnectorTerminationConfig <a name="ChimeVoiceConnectorTerminationConfig" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chime_voice_connector_termination

chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  calling_regions: typing.List[str],
  cidr_allow_list: typing.List[str],
  voice_connector_id: str,
  cps_limit: typing.Union[int, float] = None,
  default_phone_number: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.callingRegions">calling_regions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#calling_regions ChimeVoiceConnectorTermination#calling_regions}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.cidrAllowList">cidr_allow_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#cidr_allow_list ChimeVoiceConnectorTermination#cidr_allow_list}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.voiceConnectorId">voice_connector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#voice_connector_id ChimeVoiceConnectorTermination#voice_connector_id}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.cpsLimit">cps_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#cps_limit ChimeVoiceConnectorTermination#cps_limit}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.defaultPhoneNumber">default_phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#default_phone_number ChimeVoiceConnectorTermination#default_phone_number}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#disabled ChimeVoiceConnectorTermination#disabled}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#id ChimeVoiceConnectorTermination#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `calling_regions`<sup>Required</sup> <a name="calling_regions" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.callingRegions"></a>

```python
calling_regions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#calling_regions ChimeVoiceConnectorTermination#calling_regions}.

---

##### `cidr_allow_list`<sup>Required</sup> <a name="cidr_allow_list" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.cidrAllowList"></a>

```python
cidr_allow_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#cidr_allow_list ChimeVoiceConnectorTermination#cidr_allow_list}.

---

##### `voice_connector_id`<sup>Required</sup> <a name="voice_connector_id" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.voiceConnectorId"></a>

```python
voice_connector_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#voice_connector_id ChimeVoiceConnectorTermination#voice_connector_id}.

---

##### `cps_limit`<sup>Optional</sup> <a name="cps_limit" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.cpsLimit"></a>

```python
cps_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#cps_limit ChimeVoiceConnectorTermination#cps_limit}.

---

##### `default_phone_number`<sup>Optional</sup> <a name="default_phone_number" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.defaultPhoneNumber"></a>

```python
default_phone_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#default_phone_number ChimeVoiceConnectorTermination#default_phone_number}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#disabled ChimeVoiceConnectorTermination#disabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination#id ChimeVoiceConnectorTermination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



