# `worklinkFleet` Submodule <a name="`worklinkFleet` Submodule" id="@cdktf/provider-aws.worklinkFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorklinkFleet <a name="WorklinkFleet" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet aws_worklink_fleet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import worklink_fleet

worklinkFleet.WorklinkFleet(
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
  audit_stream_arn: str = None,
  device_ca_certificate: str = None,
  display_name: str = None,
  id: str = None,
  identity_provider: WorklinkFleetIdentityProvider = None,
  network: WorklinkFleetNetwork = None,
  optimize_for_end_user_location: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#name WorklinkFleet#name}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.auditStreamArn">audit_stream_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#audit_stream_arn WorklinkFleet#audit_stream_arn}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.deviceCaCertificate">device_ca_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#device_ca_certificate WorklinkFleet#device_ca_certificate}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#display_name WorklinkFleet#display_name}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#id WorklinkFleet#id}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.identityProvider">identity_provider</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a></code> | identity_provider block. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.network">network</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.optimizeForEndUserLocation">optimize_for_end_user_location</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#optimize_for_end_user_location WorklinkFleet#optimize_for_end_user_location}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#name WorklinkFleet#name}.

---

##### `audit_stream_arn`<sup>Optional</sup> <a name="audit_stream_arn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.auditStreamArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#audit_stream_arn WorklinkFleet#audit_stream_arn}.

---

##### `device_ca_certificate`<sup>Optional</sup> <a name="device_ca_certificate" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.deviceCaCertificate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#device_ca_certificate WorklinkFleet#device_ca_certificate}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#display_name WorklinkFleet#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#id WorklinkFleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_provider`<sup>Optional</sup> <a name="identity_provider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.identityProvider"></a>

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a>

identity_provider block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#identity_provider WorklinkFleet#identity_provider}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.network"></a>

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a>

network block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#network WorklinkFleet#network}

---

##### `optimize_for_end_user_location`<sup>Optional</sup> <a name="optimize_for_end_user_location" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.optimizeForEndUserLocation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#optimize_for_end_user_location WorklinkFleet#optimize_for_end_user_location}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putIdentityProvider">put_identity_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putNetwork">put_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetAuditStreamArn">reset_audit_stream_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetDeviceCaCertificate">reset_device_ca_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetIdentityProvider">reset_identity_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetOptimizeForEndUserLocation">reset_optimize_for_end_user_location</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_identity_provider` <a name="put_identity_provider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putIdentityProvider"></a>

```python
def put_identity_provider(
  saml_metadata: str,
  type: str
) -> None
```

###### `saml_metadata`<sup>Required</sup> <a name="saml_metadata" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putIdentityProvider.parameter.samlMetadata"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#saml_metadata WorklinkFleet#saml_metadata}.

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putIdentityProvider.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#type WorklinkFleet#type}.

---

##### `put_network` <a name="put_network" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putNetwork"></a>

```python
def put_network(
  security_group_ids: typing.List[str],
  subnet_ids: typing.List[str],
  vpc_id: str
) -> None
```

###### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putNetwork.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#security_group_ids WorklinkFleet#security_group_ids}.

---

###### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putNetwork.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#subnet_ids WorklinkFleet#subnet_ids}.

---

###### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putNetwork.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#vpc_id WorklinkFleet#vpc_id}.

---

##### `reset_audit_stream_arn` <a name="reset_audit_stream_arn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetAuditStreamArn"></a>

```python
def reset_audit_stream_arn() -> None
```

##### `reset_device_ca_certificate` <a name="reset_device_ca_certificate" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetDeviceCaCertificate"></a>

```python
def reset_device_ca_certificate() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity_provider` <a name="reset_identity_provider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetIdentityProvider"></a>

```python
def reset_identity_provider() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_optimize_for_end_user_location` <a name="reset_optimize_for_end_user_location" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetOptimizeForEndUserLocation"></a>

```python
def reset_optimize_for_end_user_location() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import worklink_fleet

worklinkFleet.WorklinkFleet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import worklink_fleet

worklinkFleet.WorklinkFleet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import worklink_fleet

worklinkFleet.WorklinkFleet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.companyCode">company_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.identityProvider">identity_provider</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference">WorklinkFleetIdentityProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.network">network</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference">WorklinkFleetNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.auditStreamArnInput">audit_stream_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.deviceCaCertificateInput">device_ca_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.identityProviderInput">identity_provider_input</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.networkInput">network_input</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.optimizeForEndUserLocationInput">optimize_for_end_user_location_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.auditStreamArn">audit_stream_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.deviceCaCertificate">device_ca_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.optimizeForEndUserLocation">optimize_for_end_user_location</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `company_code`<sup>Required</sup> <a name="company_code" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.companyCode"></a>

```python
company_code: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `identity_provider`<sup>Required</sup> <a name="identity_provider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.identityProvider"></a>

```python
identity_provider: WorklinkFleetIdentityProviderOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference">WorklinkFleetIdentityProviderOutputReference</a>

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.network"></a>

```python
network: WorklinkFleetNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference">WorklinkFleetNetworkOutputReference</a>

---

##### `audit_stream_arn_input`<sup>Optional</sup> <a name="audit_stream_arn_input" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.auditStreamArnInput"></a>

```python
audit_stream_arn_input: str
```

- *Type:* str

---

##### `device_ca_certificate_input`<sup>Optional</sup> <a name="device_ca_certificate_input" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.deviceCaCertificateInput"></a>

```python
device_ca_certificate_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `identity_provider_input`<sup>Optional</sup> <a name="identity_provider_input" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.identityProviderInput"></a>

```python
identity_provider_input: WorklinkFleetIdentityProvider
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.networkInput"></a>

```python
network_input: WorklinkFleetNetwork
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a>

---

##### `optimize_for_end_user_location_input`<sup>Optional</sup> <a name="optimize_for_end_user_location_input" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.optimizeForEndUserLocationInput"></a>

```python
optimize_for_end_user_location_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `audit_stream_arn`<sup>Required</sup> <a name="audit_stream_arn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.auditStreamArn"></a>

```python
audit_stream_arn: str
```

- *Type:* str

---

##### `device_ca_certificate`<sup>Required</sup> <a name="device_ca_certificate" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.deviceCaCertificate"></a>

```python
device_ca_certificate: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `optimize_for_end_user_location`<sup>Required</sup> <a name="optimize_for_end_user_location" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.optimizeForEndUserLocation"></a>

```python
optimize_for_end_user_location: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorklinkFleetConfig <a name="WorklinkFleetConfig" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import worklink_fleet

worklinkFleet.WorklinkFleetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  audit_stream_arn: str = None,
  device_ca_certificate: str = None,
  display_name: str = None,
  id: str = None,
  identity_provider: WorklinkFleetIdentityProvider = None,
  network: WorklinkFleetNetwork = None,
  optimize_for_end_user_location: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#name WorklinkFleet#name}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.auditStreamArn">audit_stream_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#audit_stream_arn WorklinkFleet#audit_stream_arn}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.deviceCaCertificate">device_ca_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#device_ca_certificate WorklinkFleet#device_ca_certificate}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#display_name WorklinkFleet#display_name}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#id WorklinkFleet#id}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.identityProvider">identity_provider</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a></code> | identity_provider block. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.network">network</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.optimizeForEndUserLocation">optimize_for_end_user_location</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#optimize_for_end_user_location WorklinkFleet#optimize_for_end_user_location}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#name WorklinkFleet#name}.

---

##### `audit_stream_arn`<sup>Optional</sup> <a name="audit_stream_arn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.auditStreamArn"></a>

```python
audit_stream_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#audit_stream_arn WorklinkFleet#audit_stream_arn}.

---

##### `device_ca_certificate`<sup>Optional</sup> <a name="device_ca_certificate" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.deviceCaCertificate"></a>

```python
device_ca_certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#device_ca_certificate WorklinkFleet#device_ca_certificate}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#display_name WorklinkFleet#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#id WorklinkFleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_provider`<sup>Optional</sup> <a name="identity_provider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.identityProvider"></a>

```python
identity_provider: WorklinkFleetIdentityProvider
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a>

identity_provider block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#identity_provider WorklinkFleet#identity_provider}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.network"></a>

```python
network: WorklinkFleetNetwork
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a>

network block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#network WorklinkFleet#network}

---

##### `optimize_for_end_user_location`<sup>Optional</sup> <a name="optimize_for_end_user_location" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.optimizeForEndUserLocation"></a>

```python
optimize_for_end_user_location: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#optimize_for_end_user_location WorklinkFleet#optimize_for_end_user_location}.

---

### WorklinkFleetIdentityProvider <a name="WorklinkFleetIdentityProvider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import worklink_fleet

worklinkFleet.WorklinkFleetIdentityProvider(
  saml_metadata: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider.property.samlMetadata">saml_metadata</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#saml_metadata WorklinkFleet#saml_metadata}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#type WorklinkFleet#type}. |

---

##### `saml_metadata`<sup>Required</sup> <a name="saml_metadata" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider.property.samlMetadata"></a>

```python
saml_metadata: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#saml_metadata WorklinkFleet#saml_metadata}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#type WorklinkFleet#type}.

---

### WorklinkFleetNetwork <a name="WorklinkFleetNetwork" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import worklink_fleet

worklinkFleet.WorklinkFleetNetwork(
  security_group_ids: typing.List[str],
  subnet_ids: typing.List[str],
  vpc_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#security_group_ids WorklinkFleet#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#subnet_ids WorklinkFleet#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#vpc_id WorklinkFleet#vpc_id}. |

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#security_group_ids WorklinkFleet#security_group_ids}.

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#subnet_ids WorklinkFleet#subnet_ids}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#vpc_id WorklinkFleet#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorklinkFleetIdentityProviderOutputReference <a name="WorklinkFleetIdentityProviderOutputReference" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import worklink_fleet

worklinkFleet.WorklinkFleetIdentityProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.samlMetadataInput">saml_metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.samlMetadata">saml_metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `saml_metadata_input`<sup>Optional</sup> <a name="saml_metadata_input" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.samlMetadataInput"></a>

```python
saml_metadata_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `saml_metadata`<sup>Required</sup> <a name="saml_metadata" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.samlMetadata"></a>

```python
saml_metadata: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.internalValue"></a>

```python
internal_value: WorklinkFleetIdentityProvider
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a>

---


### WorklinkFleetNetworkOutputReference <a name="WorklinkFleetNetworkOutputReference" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import worklink_fleet

worklinkFleet.WorklinkFleetNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.internalValue"></a>

```python
internal_value: WorklinkFleetNetwork
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a>

---



