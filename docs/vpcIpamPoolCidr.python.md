# `vpcIpamPoolCidr` Submodule <a name="`vpcIpamPoolCidr` Submodule" id="@cdktf/provider-aws.vpcIpamPoolCidr"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcIpamPoolCidr <a name="VpcIpamPoolCidr" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr aws_vpc_ipam_pool_cidr}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_ipam_pool_cidr

vpcIpamPoolCidr.VpcIpamPoolCidr(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ipam_pool_id: str,
  cidr: str = None,
  cidr_authorization_context: VpcIpamPoolCidrCidrAuthorizationContext = None,
  id: str = None,
  netmask_length: typing.Union[int, float] = None,
  timeouts: VpcIpamPoolCidrTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.ipamPoolId">ipam_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#ipam_pool_id VpcIpamPoolCidr#ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.cidr">cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#cidr VpcIpamPoolCidr#cidr}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.cidrAuthorizationContext">cidr_authorization_context</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext">VpcIpamPoolCidrCidrAuthorizationContext</a></code> | cidr_authorization_context block. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#id VpcIpamPoolCidr#id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.netmaskLength">netmask_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#netmask_length VpcIpamPoolCidr#netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts">VpcIpamPoolCidrTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ipam_pool_id`<sup>Required</sup> <a name="ipam_pool_id" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.ipamPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#ipam_pool_id VpcIpamPoolCidr#ipam_pool_id}.

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.cidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#cidr VpcIpamPoolCidr#cidr}.

---

##### `cidr_authorization_context`<sup>Optional</sup> <a name="cidr_authorization_context" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.cidrAuthorizationContext"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext">VpcIpamPoolCidrCidrAuthorizationContext</a>

cidr_authorization_context block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#cidr_authorization_context VpcIpamPoolCidr#cidr_authorization_context}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#id VpcIpamPoolCidr#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `netmask_length`<sup>Optional</sup> <a name="netmask_length" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.netmaskLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#netmask_length VpcIpamPoolCidr#netmask_length}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts">VpcIpamPoolCidrTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#timeouts VpcIpamPoolCidr#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.putCidrAuthorizationContext">put_cidr_authorization_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetCidr">reset_cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetCidrAuthorizationContext">reset_cidr_authorization_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetNetmaskLength">reset_netmask_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_cidr_authorization_context` <a name="put_cidr_authorization_context" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.putCidrAuthorizationContext"></a>

```python
def put_cidr_authorization_context(
  message: str = None,
  signature: str = None
) -> None
```

###### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.putCidrAuthorizationContext.parameter.message"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#message VpcIpamPoolCidr#message}.

---

###### `signature`<sup>Optional</sup> <a name="signature" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.putCidrAuthorizationContext.parameter.signature"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#signature VpcIpamPoolCidr#signature}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#create VpcIpamPoolCidr#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#delete VpcIpamPoolCidr#delete}.

---

##### `reset_cidr` <a name="reset_cidr" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetCidr"></a>

```python
def reset_cidr() -> None
```

##### `reset_cidr_authorization_context` <a name="reset_cidr_authorization_context" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetCidrAuthorizationContext"></a>

```python
def reset_cidr_authorization_context() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_netmask_length` <a name="reset_netmask_length" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetNetmaskLength"></a>

```python
def reset_netmask_length() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import vpc_ipam_pool_cidr

vpcIpamPoolCidr.VpcIpamPoolCidr.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import vpc_ipam_pool_cidr

vpcIpamPoolCidr.VpcIpamPoolCidr.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import vpc_ipam_pool_cidr

vpcIpamPoolCidr.VpcIpamPoolCidr.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.cidrAuthorizationContext">cidr_authorization_context</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference">VpcIpamPoolCidrCidrAuthorizationContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.ipamPoolCidrId">ipam_pool_cidr_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference">VpcIpamPoolCidrTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.cidrAuthorizationContextInput">cidr_authorization_context_input</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext">VpcIpamPoolCidrCidrAuthorizationContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.ipamPoolIdInput">ipam_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.netmaskLengthInput">netmask_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts">VpcIpamPoolCidrTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.ipamPoolId">ipam_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.netmaskLength">netmask_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cidr_authorization_context`<sup>Required</sup> <a name="cidr_authorization_context" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.cidrAuthorizationContext"></a>

```python
cidr_authorization_context: VpcIpamPoolCidrCidrAuthorizationContextOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference">VpcIpamPoolCidrCidrAuthorizationContextOutputReference</a>

---

##### `ipam_pool_cidr_id`<sup>Required</sup> <a name="ipam_pool_cidr_id" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.ipamPoolCidrId"></a>

```python
ipam_pool_cidr_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.timeouts"></a>

```python
timeouts: VpcIpamPoolCidrTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference">VpcIpamPoolCidrTimeoutsOutputReference</a>

---

##### `cidr_authorization_context_input`<sup>Optional</sup> <a name="cidr_authorization_context_input" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.cidrAuthorizationContextInput"></a>

```python
cidr_authorization_context_input: VpcIpamPoolCidrCidrAuthorizationContext
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext">VpcIpamPoolCidrCidrAuthorizationContext</a>

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ipam_pool_id_input`<sup>Optional</sup> <a name="ipam_pool_id_input" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.ipamPoolIdInput"></a>

```python
ipam_pool_id_input: str
```

- *Type:* str

---

##### `netmask_length_input`<sup>Optional</sup> <a name="netmask_length_input" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.netmaskLengthInput"></a>

```python
netmask_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[VpcIpamPoolCidrTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts">VpcIpamPoolCidrTimeouts</a>, cdktf.IResolvable]

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ipam_pool_id`<sup>Required</sup> <a name="ipam_pool_id" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.ipamPoolId"></a>

```python
ipam_pool_id: str
```

- *Type:* str

---

##### `netmask_length`<sup>Required</sup> <a name="netmask_length" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.netmaskLength"></a>

```python
netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpcIpamPoolCidrCidrAuthorizationContext <a name="VpcIpamPoolCidrCidrAuthorizationContext" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_ipam_pool_cidr

vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext(
  message: str = None,
  signature: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext.property.message">message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#message VpcIpamPoolCidr#message}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext.property.signature">signature</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#signature VpcIpamPoolCidr#signature}. |

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext.property.message"></a>

```python
message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#message VpcIpamPoolCidr#message}.

---

##### `signature`<sup>Optional</sup> <a name="signature" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext.property.signature"></a>

```python
signature: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#signature VpcIpamPoolCidr#signature}.

---

### VpcIpamPoolCidrConfig <a name="VpcIpamPoolCidrConfig" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_ipam_pool_cidr

vpcIpamPoolCidr.VpcIpamPoolCidrConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ipam_pool_id: str,
  cidr: str = None,
  cidr_authorization_context: VpcIpamPoolCidrCidrAuthorizationContext = None,
  id: str = None,
  netmask_length: typing.Union[int, float] = None,
  timeouts: VpcIpamPoolCidrTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.ipamPoolId">ipam_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#ipam_pool_id VpcIpamPoolCidr#ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.cidr">cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#cidr VpcIpamPoolCidr#cidr}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.cidrAuthorizationContext">cidr_authorization_context</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext">VpcIpamPoolCidrCidrAuthorizationContext</a></code> | cidr_authorization_context block. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#id VpcIpamPoolCidr#id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.netmaskLength">netmask_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#netmask_length VpcIpamPoolCidr#netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts">VpcIpamPoolCidrTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ipam_pool_id`<sup>Required</sup> <a name="ipam_pool_id" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.ipamPoolId"></a>

```python
ipam_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#ipam_pool_id VpcIpamPoolCidr#ipam_pool_id}.

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#cidr VpcIpamPoolCidr#cidr}.

---

##### `cidr_authorization_context`<sup>Optional</sup> <a name="cidr_authorization_context" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.cidrAuthorizationContext"></a>

```python
cidr_authorization_context: VpcIpamPoolCidrCidrAuthorizationContext
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext">VpcIpamPoolCidrCidrAuthorizationContext</a>

cidr_authorization_context block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#cidr_authorization_context VpcIpamPoolCidr#cidr_authorization_context}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#id VpcIpamPoolCidr#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `netmask_length`<sup>Optional</sup> <a name="netmask_length" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.netmaskLength"></a>

```python
netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#netmask_length VpcIpamPoolCidr#netmask_length}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.timeouts"></a>

```python
timeouts: VpcIpamPoolCidrTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts">VpcIpamPoolCidrTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#timeouts VpcIpamPoolCidr#timeouts}

---

### VpcIpamPoolCidrTimeouts <a name="VpcIpamPoolCidrTimeouts" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_ipam_pool_cidr

vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#create VpcIpamPoolCidr#create}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#delete VpcIpamPoolCidr#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#create VpcIpamPoolCidr#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#delete VpcIpamPoolCidr#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcIpamPoolCidrCidrAuthorizationContextOutputReference <a name="VpcIpamPoolCidrCidrAuthorizationContextOutputReference" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_ipam_pool_cidr

vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.resetMessage">reset_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.resetSignature">reset_signature</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_message` <a name="reset_message" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.resetMessage"></a>

```python
def reset_message() -> None
```

##### `reset_signature` <a name="reset_signature" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.resetSignature"></a>

```python
def reset_signature() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.signatureInput">signature_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.signature">signature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext">VpcIpamPoolCidrCidrAuthorizationContext</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `signature_input`<sup>Optional</sup> <a name="signature_input" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.signatureInput"></a>

```python
signature_input: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.signature"></a>

```python
signature: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.internalValue"></a>

```python
internal_value: VpcIpamPoolCidrCidrAuthorizationContext
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext">VpcIpamPoolCidrCidrAuthorizationContext</a>

---


### VpcIpamPoolCidrTimeoutsOutputReference <a name="VpcIpamPoolCidrTimeoutsOutputReference" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_ipam_pool_cidr

vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts">VpcIpamPoolCidrTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[VpcIpamPoolCidrTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts">VpcIpamPoolCidrTimeouts</a>, cdktf.IResolvable]

---



