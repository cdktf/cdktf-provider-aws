# `iotDomainConfiguration` Submodule <a name="`iotDomainConfiguration` Submodule" id="@cdktf/provider-aws.iotDomainConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotDomainConfiguration <a name="IotDomainConfiguration" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration aws_iot_domain_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iot_domain_configuration

iotDomainConfiguration.IotDomainConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  authorizer_config: IotDomainConfigurationAuthorizerConfig = None,
  domain_name: str = None,
  id: str = None,
  server_certificate_arns: typing.List[str] = None,
  service_type: str = None,
  status: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  tls_config: IotDomainConfigurationTlsConfig = None,
  validation_certificate_arn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#name IotDomainConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.authorizerConfig">authorizer_config</a></code> | <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a></code> | authorizer_config block. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#domain_name IotDomainConfiguration#domain_name}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#id IotDomainConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.serverCertificateArns">server_certificate_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#server_certificate_arns IotDomainConfiguration#server_certificate_arns}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.serviceType">service_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#service_type IotDomainConfiguration#service_type}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#status IotDomainConfiguration#status}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#tags IotDomainConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#tags_all IotDomainConfiguration#tags_all}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.tlsConfig">tls_config</a></code> | <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a></code> | tls_config block. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.validationCertificateArn">validation_certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#validation_certificate_arn IotDomainConfiguration#validation_certificate_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#name IotDomainConfiguration#name}.

---

##### `authorizer_config`<sup>Optional</sup> <a name="authorizer_config" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.authorizerConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a>

authorizer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#authorizer_config IotDomainConfiguration#authorizer_config}

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#domain_name IotDomainConfiguration#domain_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#id IotDomainConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `server_certificate_arns`<sup>Optional</sup> <a name="server_certificate_arns" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.serverCertificateArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#server_certificate_arns IotDomainConfiguration#server_certificate_arns}.

---

##### `service_type`<sup>Optional</sup> <a name="service_type" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.serviceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#service_type IotDomainConfiguration#service_type}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#status IotDomainConfiguration#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#tags IotDomainConfiguration#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#tags_all IotDomainConfiguration#tags_all}.

---

##### `tls_config`<sup>Optional</sup> <a name="tls_config" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.tlsConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#tls_config IotDomainConfiguration#tls_config}

---

##### `validation_certificate_arn`<sup>Optional</sup> <a name="validation_certificate_arn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.validationCertificateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#validation_certificate_arn IotDomainConfiguration#validation_certificate_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.putAuthorizerConfig">put_authorizer_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.putTlsConfig">put_tls_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetAuthorizerConfig">reset_authorizer_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetDomainName">reset_domain_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetServerCertificateArns">reset_server_certificate_arns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetServiceType">reset_service_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetTlsConfig">reset_tls_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetValidationCertificateArn">reset_validation_certificate_arn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_authorizer_config` <a name="put_authorizer_config" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.putAuthorizerConfig"></a>

```python
def put_authorizer_config(
  allow_authorizer_override: typing.Union[bool, IResolvable] = None,
  default_authorizer_name: str = None
) -> None
```

###### `allow_authorizer_override`<sup>Optional</sup> <a name="allow_authorizer_override" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.putAuthorizerConfig.parameter.allowAuthorizerOverride"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#allow_authorizer_override IotDomainConfiguration#allow_authorizer_override}.

---

###### `default_authorizer_name`<sup>Optional</sup> <a name="default_authorizer_name" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.putAuthorizerConfig.parameter.defaultAuthorizerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#default_authorizer_name IotDomainConfiguration#default_authorizer_name}.

---

##### `put_tls_config` <a name="put_tls_config" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.putTlsConfig"></a>

```python
def put_tls_config(
  security_policy: str = None
) -> None
```

###### `security_policy`<sup>Optional</sup> <a name="security_policy" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.putTlsConfig.parameter.securityPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#security_policy IotDomainConfiguration#security_policy}.

---

##### `reset_authorizer_config` <a name="reset_authorizer_config" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetAuthorizerConfig"></a>

```python
def reset_authorizer_config() -> None
```

##### `reset_domain_name` <a name="reset_domain_name" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetDomainName"></a>

```python
def reset_domain_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_server_certificate_arns` <a name="reset_server_certificate_arns" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetServerCertificateArns"></a>

```python
def reset_server_certificate_arns() -> None
```

##### `reset_service_type` <a name="reset_service_type" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetServiceType"></a>

```python
def reset_service_type() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_tls_config` <a name="reset_tls_config" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetTlsConfig"></a>

```python
def reset_tls_config() -> None
```

##### `reset_validation_certificate_arn` <a name="reset_validation_certificate_arn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetValidationCertificateArn"></a>

```python
def reset_validation_certificate_arn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IotDomainConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import iot_domain_configuration

iotDomainConfiguration.IotDomainConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import iot_domain_configuration

iotDomainConfiguration.IotDomainConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import iot_domain_configuration

iotDomainConfiguration.IotDomainConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import iot_domain_configuration

iotDomainConfiguration.IotDomainConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IotDomainConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotDomainConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotDomainConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IotDomainConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.authorizerConfig">authorizer_config</a></code> | <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference">IotDomainConfigurationAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.domainType">domain_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference">IotDomainConfigurationTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.authorizerConfigInput">authorizer_config_input</a></code> | <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateArnsInput">server_certificate_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serviceTypeInput">service_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tlsConfigInput">tls_config_input</a></code> | <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.validationCertificateArnInput">validation_certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateArns">server_certificate_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serviceType">service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.validationCertificateArn">validation_certificate_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `authorizer_config`<sup>Required</sup> <a name="authorizer_config" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.authorizerConfig"></a>

```python
authorizer_config: IotDomainConfigurationAuthorizerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference">IotDomainConfigurationAuthorizerConfigOutputReference</a>

---

##### `domain_type`<sup>Required</sup> <a name="domain_type" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.domainType"></a>

```python
domain_type: str
```

- *Type:* str

---

##### `tls_config`<sup>Required</sup> <a name="tls_config" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tlsConfig"></a>

```python
tls_config: IotDomainConfigurationTlsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference">IotDomainConfigurationTlsConfigOutputReference</a>

---

##### `authorizer_config_input`<sup>Optional</sup> <a name="authorizer_config_input" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.authorizerConfigInput"></a>

```python
authorizer_config_input: IotDomainConfigurationAuthorizerConfig
```

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a>

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `server_certificate_arns_input`<sup>Optional</sup> <a name="server_certificate_arns_input" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateArnsInput"></a>

```python
server_certificate_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_type_input`<sup>Optional</sup> <a name="service_type_input" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serviceTypeInput"></a>

```python
service_type_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tls_config_input`<sup>Optional</sup> <a name="tls_config_input" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tlsConfigInput"></a>

```python
tls_config_input: IotDomainConfigurationTlsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a>

---

##### `validation_certificate_arn_input`<sup>Optional</sup> <a name="validation_certificate_arn_input" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.validationCertificateArnInput"></a>

```python
validation_certificate_arn_input: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `server_certificate_arns`<sup>Required</sup> <a name="server_certificate_arns" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateArns"></a>

```python
server_certificate_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `validation_certificate_arn`<sup>Required</sup> <a name="validation_certificate_arn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.validationCertificateArn"></a>

```python
validation_certificate_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotDomainConfigurationAuthorizerConfig <a name="IotDomainConfigurationAuthorizerConfig" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iot_domain_configuration

iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig(
  allow_authorizer_override: typing.Union[bool, IResolvable] = None,
  default_authorizer_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig.property.allowAuthorizerOverride">allow_authorizer_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#allow_authorizer_override IotDomainConfiguration#allow_authorizer_override}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig.property.defaultAuthorizerName">default_authorizer_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#default_authorizer_name IotDomainConfiguration#default_authorizer_name}. |

---

##### `allow_authorizer_override`<sup>Optional</sup> <a name="allow_authorizer_override" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig.property.allowAuthorizerOverride"></a>

```python
allow_authorizer_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#allow_authorizer_override IotDomainConfiguration#allow_authorizer_override}.

---

##### `default_authorizer_name`<sup>Optional</sup> <a name="default_authorizer_name" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig.property.defaultAuthorizerName"></a>

```python
default_authorizer_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#default_authorizer_name IotDomainConfiguration#default_authorizer_name}.

---

### IotDomainConfigurationConfig <a name="IotDomainConfigurationConfig" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iot_domain_configuration

iotDomainConfiguration.IotDomainConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  authorizer_config: IotDomainConfigurationAuthorizerConfig = None,
  domain_name: str = None,
  id: str = None,
  server_certificate_arns: typing.List[str] = None,
  service_type: str = None,
  status: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  tls_config: IotDomainConfigurationTlsConfig = None,
  validation_certificate_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#name IotDomainConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.authorizerConfig">authorizer_config</a></code> | <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a></code> | authorizer_config block. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#domain_name IotDomainConfiguration#domain_name}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#id IotDomainConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.serverCertificateArns">server_certificate_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#server_certificate_arns IotDomainConfiguration#server_certificate_arns}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.serviceType">service_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#service_type IotDomainConfiguration#service_type}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#status IotDomainConfiguration#status}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#tags IotDomainConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#tags_all IotDomainConfiguration#tags_all}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a></code> | tls_config block. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.validationCertificateArn">validation_certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#validation_certificate_arn IotDomainConfiguration#validation_certificate_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#name IotDomainConfiguration#name}.

---

##### `authorizer_config`<sup>Optional</sup> <a name="authorizer_config" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.authorizerConfig"></a>

```python
authorizer_config: IotDomainConfigurationAuthorizerConfig
```

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a>

authorizer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#authorizer_config IotDomainConfiguration#authorizer_config}

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#domain_name IotDomainConfiguration#domain_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#id IotDomainConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `server_certificate_arns`<sup>Optional</sup> <a name="server_certificate_arns" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.serverCertificateArns"></a>

```python
server_certificate_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#server_certificate_arns IotDomainConfiguration#server_certificate_arns}.

---

##### `service_type`<sup>Optional</sup> <a name="service_type" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#service_type IotDomainConfiguration#service_type}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#status IotDomainConfiguration#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#tags IotDomainConfiguration#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#tags_all IotDomainConfiguration#tags_all}.

---

##### `tls_config`<sup>Optional</sup> <a name="tls_config" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.tlsConfig"></a>

```python
tls_config: IotDomainConfigurationTlsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#tls_config IotDomainConfiguration#tls_config}

---

##### `validation_certificate_arn`<sup>Optional</sup> <a name="validation_certificate_arn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.validationCertificateArn"></a>

```python
validation_certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#validation_certificate_arn IotDomainConfiguration#validation_certificate_arn}.

---

### IotDomainConfigurationTlsConfig <a name="IotDomainConfigurationTlsConfig" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iot_domain_configuration

iotDomainConfiguration.IotDomainConfigurationTlsConfig(
  security_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig.property.securityPolicy">security_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#security_policy IotDomainConfiguration#security_policy}. |

---

##### `security_policy`<sup>Optional</sup> <a name="security_policy" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig.property.securityPolicy"></a>

```python
security_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iot_domain_configuration#security_policy IotDomainConfiguration#security_policy}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotDomainConfigurationAuthorizerConfigOutputReference <a name="IotDomainConfigurationAuthorizerConfigOutputReference" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iot_domain_configuration

iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resetAllowAuthorizerOverride">reset_allow_authorizer_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resetDefaultAuthorizerName">reset_default_authorizer_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_authorizer_override` <a name="reset_allow_authorizer_override" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resetAllowAuthorizerOverride"></a>

```python
def reset_allow_authorizer_override() -> None
```

##### `reset_default_authorizer_name` <a name="reset_default_authorizer_name" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resetDefaultAuthorizerName"></a>

```python
def reset_default_authorizer_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.allowAuthorizerOverrideInput">allow_authorizer_override_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.defaultAuthorizerNameInput">default_authorizer_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.allowAuthorizerOverride">allow_authorizer_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.defaultAuthorizerName">default_authorizer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_authorizer_override_input`<sup>Optional</sup> <a name="allow_authorizer_override_input" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.allowAuthorizerOverrideInput"></a>

```python
allow_authorizer_override_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_authorizer_name_input`<sup>Optional</sup> <a name="default_authorizer_name_input" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.defaultAuthorizerNameInput"></a>

```python
default_authorizer_name_input: str
```

- *Type:* str

---

##### `allow_authorizer_override`<sup>Required</sup> <a name="allow_authorizer_override" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.allowAuthorizerOverride"></a>

```python
allow_authorizer_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_authorizer_name`<sup>Required</sup> <a name="default_authorizer_name" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.defaultAuthorizerName"></a>

```python
default_authorizer_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.internalValue"></a>

```python
internal_value: IotDomainConfigurationAuthorizerConfig
```

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a>

---


### IotDomainConfigurationTlsConfigOutputReference <a name="IotDomainConfigurationTlsConfigOutputReference" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iot_domain_configuration

iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.resetSecurityPolicy">reset_security_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_policy` <a name="reset_security_policy" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.resetSecurityPolicy"></a>

```python
def reset_security_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.securityPolicyInput">security_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.securityPolicy">security_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_policy_input`<sup>Optional</sup> <a name="security_policy_input" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.securityPolicyInput"></a>

```python
security_policy_input: str
```

- *Type:* str

---

##### `security_policy`<sup>Required</sup> <a name="security_policy" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.securityPolicy"></a>

```python
security_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.internalValue"></a>

```python
internal_value: IotDomainConfigurationTlsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a>

---



