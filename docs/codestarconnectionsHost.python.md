# `codestarconnectionsHost` Submodule <a name="`codestarconnectionsHost` Submodule" id="@cdktf/provider-aws.codestarconnectionsHost"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodestarconnectionsHost <a name="CodestarconnectionsHost" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host aws_codestarconnections_host}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codestarconnections_host

codestarconnectionsHost.CodestarconnectionsHost(
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
  provider_endpoint: str,
  provider_type: str,
  id: str = None,
  timeouts: CodestarconnectionsHostTimeouts = None,
  vpc_configuration: CodestarconnectionsHostVpcConfiguration = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#name CodestarconnectionsHost#name}. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.providerEndpoint">provider_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#provider_endpoint CodestarconnectionsHost#provider_endpoint}. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.providerType">provider_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#provider_type CodestarconnectionsHost#provider_type}. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#id CodestarconnectionsHost#id}. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts">CodestarconnectionsHostTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration">CodestarconnectionsHostVpcConfiguration</a></code> | vpc_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#name CodestarconnectionsHost#name}.

---

##### `provider_endpoint`<sup>Required</sup> <a name="provider_endpoint" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.providerEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#provider_endpoint CodestarconnectionsHost#provider_endpoint}.

---

##### `provider_type`<sup>Required</sup> <a name="provider_type" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.providerType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#provider_type CodestarconnectionsHost#provider_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#id CodestarconnectionsHost#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts">CodestarconnectionsHostTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#timeouts CodestarconnectionsHost#timeouts}

---

##### `vpc_configuration`<sup>Optional</sup> <a name="vpc_configuration" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.vpcConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration">CodestarconnectionsHostVpcConfiguration</a>

vpc_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#vpc_configuration CodestarconnectionsHost#vpc_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.putVpcConfiguration">put_vpc_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.resetVpcConfiguration">reset_vpc_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#create CodestarconnectionsHost#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#delete CodestarconnectionsHost#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#update CodestarconnectionsHost#update}.

---

##### `put_vpc_configuration` <a name="put_vpc_configuration" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.putVpcConfiguration"></a>

```python
def put_vpc_configuration(
  security_group_ids: typing.List[str],
  subnet_ids: typing.List[str],
  vpc_id: str,
  tls_certificate: str = None
) -> None
```

###### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.putVpcConfiguration.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#security_group_ids CodestarconnectionsHost#security_group_ids}.

---

###### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.putVpcConfiguration.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#subnet_ids CodestarconnectionsHost#subnet_ids}.

---

###### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.putVpcConfiguration.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#vpc_id CodestarconnectionsHost#vpc_id}.

---

###### `tls_certificate`<sup>Optional</sup> <a name="tls_certificate" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.putVpcConfiguration.parameter.tlsCertificate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#tls_certificate CodestarconnectionsHost#tls_certificate}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vpc_configuration` <a name="reset_vpc_configuration" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.resetVpcConfiguration"></a>

```python
def reset_vpc_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import codestarconnections_host

codestarconnectionsHost.CodestarconnectionsHost.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import codestarconnections_host

codestarconnectionsHost.CodestarconnectionsHost.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import codestarconnections_host

codestarconnectionsHost.CodestarconnectionsHost.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference">CodestarconnectionsHostTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference">CodestarconnectionsHostVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.providerEndpointInput">provider_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.providerTypeInput">provider_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts">CodestarconnectionsHostTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.vpcConfigurationInput">vpc_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration">CodestarconnectionsHostVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.providerEndpoint">provider_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.providerType">provider_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.timeouts"></a>

```python
timeouts: CodestarconnectionsHostTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference">CodestarconnectionsHostTimeoutsOutputReference</a>

---

##### `vpc_configuration`<sup>Required</sup> <a name="vpc_configuration" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.vpcConfiguration"></a>

```python
vpc_configuration: CodestarconnectionsHostVpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference">CodestarconnectionsHostVpcConfigurationOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_endpoint_input`<sup>Optional</sup> <a name="provider_endpoint_input" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.providerEndpointInput"></a>

```python
provider_endpoint_input: str
```

- *Type:* str

---

##### `provider_type_input`<sup>Optional</sup> <a name="provider_type_input" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.providerTypeInput"></a>

```python
provider_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[CodestarconnectionsHostTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts">CodestarconnectionsHostTimeouts</a>, cdktf.IResolvable]

---

##### `vpc_configuration_input`<sup>Optional</sup> <a name="vpc_configuration_input" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.vpcConfigurationInput"></a>

```python
vpc_configuration_input: CodestarconnectionsHostVpcConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration">CodestarconnectionsHostVpcConfiguration</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider_endpoint`<sup>Required</sup> <a name="provider_endpoint" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.providerEndpoint"></a>

```python
provider_endpoint: str
```

- *Type:* str

---

##### `provider_type`<sup>Required</sup> <a name="provider_type" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.providerType"></a>

```python
provider_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CodestarconnectionsHostConfig <a name="CodestarconnectionsHostConfig" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codestarconnections_host

codestarconnectionsHost.CodestarconnectionsHostConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  provider_endpoint: str,
  provider_type: str,
  id: str = None,
  timeouts: CodestarconnectionsHostTimeouts = None,
  vpc_configuration: CodestarconnectionsHostVpcConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#name CodestarconnectionsHost#name}. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.providerEndpoint">provider_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#provider_endpoint CodestarconnectionsHost#provider_endpoint}. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.providerType">provider_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#provider_type CodestarconnectionsHost#provider_type}. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#id CodestarconnectionsHost#id}. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts">CodestarconnectionsHostTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration">CodestarconnectionsHostVpcConfiguration</a></code> | vpc_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#name CodestarconnectionsHost#name}.

---

##### `provider_endpoint`<sup>Required</sup> <a name="provider_endpoint" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.providerEndpoint"></a>

```python
provider_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#provider_endpoint CodestarconnectionsHost#provider_endpoint}.

---

##### `provider_type`<sup>Required</sup> <a name="provider_type" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.providerType"></a>

```python
provider_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#provider_type CodestarconnectionsHost#provider_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#id CodestarconnectionsHost#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.timeouts"></a>

```python
timeouts: CodestarconnectionsHostTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts">CodestarconnectionsHostTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#timeouts CodestarconnectionsHost#timeouts}

---

##### `vpc_configuration`<sup>Optional</sup> <a name="vpc_configuration" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.vpcConfiguration"></a>

```python
vpc_configuration: CodestarconnectionsHostVpcConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration">CodestarconnectionsHostVpcConfiguration</a>

vpc_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#vpc_configuration CodestarconnectionsHost#vpc_configuration}

---

### CodestarconnectionsHostTimeouts <a name="CodestarconnectionsHostTimeouts" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codestarconnections_host

codestarconnectionsHost.CodestarconnectionsHostTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#create CodestarconnectionsHost#create}. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#delete CodestarconnectionsHost#delete}. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#update CodestarconnectionsHost#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#create CodestarconnectionsHost#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#delete CodestarconnectionsHost#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#update CodestarconnectionsHost#update}.

---

### CodestarconnectionsHostVpcConfiguration <a name="CodestarconnectionsHostVpcConfiguration" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codestarconnections_host

codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration(
  security_group_ids: typing.List[str],
  subnet_ids: typing.List[str],
  vpc_id: str,
  tls_certificate: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#security_group_ids CodestarconnectionsHost#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#subnet_ids CodestarconnectionsHost#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#vpc_id CodestarconnectionsHost#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration.property.tlsCertificate">tls_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#tls_certificate CodestarconnectionsHost#tls_certificate}. |

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#security_group_ids CodestarconnectionsHost#security_group_ids}.

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#subnet_ids CodestarconnectionsHost#subnet_ids}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#vpc_id CodestarconnectionsHost#vpc_id}.

---

##### `tls_certificate`<sup>Optional</sup> <a name="tls_certificate" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration.property.tlsCertificate"></a>

```python
tls_certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#tls_certificate CodestarconnectionsHost#tls_certificate}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodestarconnectionsHostTimeoutsOutputReference <a name="CodestarconnectionsHostTimeoutsOutputReference" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codestarconnections_host

codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts">CodestarconnectionsHostTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CodestarconnectionsHostTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts">CodestarconnectionsHostTimeouts</a>, cdktf.IResolvable]

---


### CodestarconnectionsHostVpcConfigurationOutputReference <a name="CodestarconnectionsHostVpcConfigurationOutputReference" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codestarconnections_host

codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.resetTlsCertificate">reset_tls_certificate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tls_certificate` <a name="reset_tls_certificate" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.resetTlsCertificate"></a>

```python
def reset_tls_certificate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.tlsCertificateInput">tls_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.tlsCertificate">tls_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration">CodestarconnectionsHostVpcConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tls_certificate_input`<sup>Optional</sup> <a name="tls_certificate_input" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.tlsCertificateInput"></a>

```python
tls_certificate_input: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tls_certificate`<sup>Required</sup> <a name="tls_certificate" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.tlsCertificate"></a>

```python
tls_certificate: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: CodestarconnectionsHostVpcConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration">CodestarconnectionsHostVpcConfiguration</a>

---



